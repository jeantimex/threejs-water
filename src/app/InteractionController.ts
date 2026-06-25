import * as THREE from 'three'
import type { CameraController } from '../camera/CameraController'
import type { Renderer } from '../Renderer'
import type { SimulationObjectRegistry } from '../objects/SimulationObjectRegistry'
import type { Water } from '../Water'
import type { SimulationControls } from './SimulationControls'

// Modes of user mouse or touch screen interaction
enum InteractionMode {
  None,
  AddDrops,      // Clicking/Dragging water surface to create ripples
  MoveObject,    // Dragging the active 3D obstacle
  OrbitCamera,   // Dragging sky/background to rotate camera view
}

export interface InteractionDependencies {
  canvas: HTMLCanvasElement
  camera: THREE.PerspectiveCamera
  cameraController: CameraController
  water: Water
  renderer: Renderer
  objects: SimulationObjectRegistry
  controls: SimulationControls
  draw(): void
}

/**
 * Coordinates mouse, pointer, touch, keyboard, and scroll interactions.
 * Connects standard pointer events to:
 * 1. Raycasting intersections on objects (moving them relative to camera orientation).
 * 2. Raycasting intersections on the water surface plane (adding Gaussian drops).
 * 3. Camera controls (orbiting camera views, touch pinch-zooms, wheel-scroll zooms).
 * 4. Keyboard shortcuts (spacebar to pause simulation, 'G' to toggle gravity, 'L' to point sun in camera direction).
 */
export class InteractionController {
  private mode = InteractionMode.None
  // 3D coordinates representing the previous location where the cursor intersected the drag plane
  private previousHit: THREE.Vector3 | null = null
  // Normalized vector perpendicular to the virtual plane used to translate dragging coordinates
  private dragPlaneNormal: THREE.Vector3 | null = null
  // Active primary touch/mouse pointer ID
  private activePointerId: number | null = null
  // Keeps track of touch pointer locations to resolve pinching gestures
  private readonly touchPointers = new Map<number, THREE.Vector2>()
  private pinchDistance: number | null = null
  private pinching = false
  // Flag indicating if user is holding the 'L' key to position the sun/light direction
  private settingLightDirection = false

  constructor(private readonly dependencies: InteractionDependencies) {}

  get draggingObject() {
    return this.mode === InteractionMode.MoveObject
  }

  /**
   * Registers listeners on pointer, keyboard, and mouse scroll inputs.
   */
  connect() {
    const { canvas } = this.dependencies
    canvas.style.touchAction = 'none' // Prevent default mobile browser scrolling gestures
    canvas.addEventListener('pointerdown', this.onPointerDown)
    canvas.addEventListener('pointermove', this.onPointerMove)
    canvas.addEventListener('pointerup', this.onPointerEnd)
    canvas.addEventListener('pointercancel', this.onPointerEnd)
    canvas.addEventListener('lostpointercapture', this.onLostPointerCapture)
    canvas.addEventListener('wheel', this.onWheel, { passive: false })
    window.addEventListener('keydown', this.onKeyDown, { capture: true })
    window.addEventListener('keyup', this.onKeyUp, { capture: true })
  }

  /**
   * Advances camera controller velocity and synchronizes dynamic light mappings.
   */
  update(seconds: number) {
    this.dependencies.cameraController.update(seconds)
    this.syncLightDirection()
  }

  /**
   * Helper that updates the caustics map if simulation is paused but the sun direction changes.
   */
  preparePausedDraw() {
    if (this.syncLightDirection() && this.dependencies.controls.paused) {
      this.dependencies.renderer.updateCaustics(this.dependencies.water)
    }
  }

  /**
   * Cancels active drag state.
   */
  cancelDrag() {
    this.stopDrag()
  }

  /**
   * Constructs a 3D ray projecting from the camera through the mouse client coordinates.
   */
  private getRay(x: number, y: number) {
    const { canvas, camera } = this.dependencies
    const rect = canvas.getBoundingClientRect()
    // Map client coordinates to normalized device coordinates [-1, 1]
    const pointer = new THREE.Vector2(
      ((x - rect.left) / rect.width) * 2 - 1,
      -((y - rect.top) / rect.height) * 2 + 1
    )
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(pointer, camera)
    return {
      origin: raycaster.ray.origin.clone(),
      direction: raycaster.ray.direction.clone(),
    }
  }

  /**
   * Checks intersections when the pointer is clicked down.
   * If hitting an object: Starts MoveObject mode.
   * If hitting the water plane inside pool: Starts AddDrops mode.
   * Otherwise: Starts camera OrbitCamera rotation mode.
   */
  private startDrag(x: number, y: number, time: number) {
    const { cameraController, camera, objects, controls } = this.dependencies
    cameraController.stopInertia()
    const { origin, direction } = this.getRay(x, y)
    
    // Project ray onto water plane level (y=0)
    const pointOnPlane = origin.clone().addScaledVector(direction, -origin.y / direction.y)
    // Perform hit testing against active obstacle
    const objectHit = objects.active?.hitTest(origin, direction) ?? null
    const poolWidth = controls.poolShape === 'Box' ? 1.0 : controls.poolWidth
    const poolLength = controls.poolShape === 'Box' ? 1.0 : controls.poolLength

    if (objectHit) {
      this.mode = InteractionMode.MoveObject
      this.previousHit = objectHit
      // Construct a drag plane facing the camera, anchored at the hit position
      this.dragPlaneNormal = new THREE.Vector3(0, 0, -1)
        .applyQuaternion(camera.quaternion)
        .negate()
    } else if (Math.abs(pointOnPlane.x) < poolWidth && Math.abs(pointOnPlane.z) < poolLength) {
      this.mode = InteractionMode.AddDrops
      this.duringDrag(x, y, time)
    } else {
      this.mode = InteractionMode.OrbitCamera
      cameraController.beginOrbit(x, y, time)
    }
  }

  /**
   * Executes drag movement operations.
   */
  private duringDrag(x: number, y: number, time: number) {
    const { water, renderer, objects, cameraController, controls, draw } = this.dependencies
    const poolWidth = controls.poolShape === 'Box' ? 1.0 : controls.poolWidth
    const poolHeight = controls.poolShape === 'Box' ? 1.0 : controls.poolHeight
    const poolLength = controls.poolShape === 'Box' ? 1.0 : controls.poolLength

    if (this.mode === InteractionMode.AddDrops) {
      // Find intersection with y=0 water surface and inject ripple drop
      const { origin, direction } = this.getRay(x, y)
      const point = origin.clone().addScaledVector(direction, -origin.y / direction.y)
      water.addDrop(point.x / poolWidth, point.z / poolLength, 0.03, 0.01)
      if (controls.paused) {
        water.updateNormals()
        renderer.updateCaustics(water)
      }
    } else if (this.mode === InteractionMode.MoveObject) {
      // Raycast coordinate translation onto virtual drag plane
      if (!this.previousHit || !this.dragPlaneNormal || !objects.active) return
      const { origin, direction } = this.getRay(x, y)
      const distance = -this.dragPlaneNormal.dot(origin.clone().sub(this.previousHit))
        / this.dragPlaneNormal.dot(direction)
      const nextHit = origin.clone().addScaledVector(direction, distance)
      
      // Translate the object by ray displacement, clamped by pool bounds
      objects.active.moveBy(nextHit.clone().sub(this.previousHit), poolWidth, poolHeight, poolLength)
      renderer.setWaterOptics(objects.optics)
      this.previousHit = nextHit
      
      if (controls.paused) renderer.updateCaustics(water)
    } else if (this.mode === InteractionMode.OrbitCamera) {
      // Orbit camera rotation
      cameraController.orbitTo(x, y, time)
    }

    if (controls.paused) draw()
  }

  /**
   * Resets active drag states.
   */
  private stopDrag() {
    this.mode = InteractionMode.None
    this.previousHit = null
    this.dragPlaneNormal = null
  }

  /**
   * Pointer down listener (mouse click or touch start).
   */
  private onPointerDown = (event: PointerEvent) => {
    // Only accept left mouse click (button 0)
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (event.pointerType !== 'touch' && (this.activePointerId !== null || !event.isPrimary)) return
    if (event.pointerType === 'touch' && this.touchPointers.size >= 2) return

    event.preventDefault()
    this.dependencies.canvas.setPointerCapture(event.pointerId)

    if (event.pointerType === 'touch') {
      this.touchPointers.set(event.pointerId, new THREE.Vector2(event.clientX, event.clientY))
      // Handle multi-touch pinching gestures for zoom
      if (this.touchPointers.size === 2) {
        this.pinching = true
        this.pinchDistance = this.getPinchDistance()
        this.activePointerId = null
        this.dependencies.cameraController.stopInertia()
        this.stopDrag()
        return
      }
      if (this.pinching || this.touchPointers.size > 1) return
    } else if (this.activePointerId !== null) {
      return
    }

    this.activePointerId = event.pointerId
    this.startDrag(event.clientX, event.clientY, event.timeStamp)
  }

  /**
   * Pointer move listener. Updates drag states or pinch zoom scaling.
   */
  private onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === 'touch' && this.touchPointers.has(event.pointerId)) {
      this.touchPointers.get(event.pointerId)!.set(event.clientX, event.clientY)
      if (this.pinching && this.pinchDistance !== null && this.touchPointers.size >= 2) {
        event.preventDefault()
        const nextDistance = this.getPinchDistance()
        if (nextDistance > 0) {
          // Adjust zoom multiplier proportionally to pinch distance delta
          this.dependencies.cameraController.zoomByScale(this.pinchDistance / nextDistance)
          this.pinchDistance = nextDistance
          if (this.dependencies.controls.paused) this.dependencies.draw()
        }
        return
      }
    }
    if (event.pointerId !== this.activePointerId) return
    event.preventDefault()
    this.duringDrag(event.clientX, event.clientY, event.timeStamp)
  }

  private onPointerEnd = (event: PointerEvent) => this.finishPointer(event, true)
  private onLostPointerCapture = (event: PointerEvent) => this.finishPointer(event, false)

  /**
   * Cleans pointer drag/pinch states when pointer is released.
   */
  private finishPointer(event: PointerEvent, releaseCapture: boolean) {
    const wasActive = event.pointerId === this.activePointerId
    if (event.pointerType === 'touch') {
      this.touchPointers.delete(event.pointerId)
      if (this.pinching) {
        if (this.touchPointers.size < 2) this.pinchDistance = null
        if (this.touchPointers.size === 0) this.pinching = false
      }
    }

    if (wasActive) {
      if (this.mode === InteractionMode.OrbitCamera) {
        this.dependencies.cameraController.endOrbit(event.timeStamp)
      }
      this.activePointerId = null
      this.stopDrag()
    }

    const { canvas } = this.dependencies
    if (releaseCapture && canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId)
    }
  }

  /**
   * Mouse scroll wheel zoom handler.
   */
  private onWheel = (event: WheelEvent) => {
    event.preventDefault()
    this.dependencies.cameraController.zoomByWheel(event.deltaY)
    if (this.dependencies.controls.paused) this.dependencies.draw()
  }

  /**
   * Returns distance between two finger touch points.
   */
  private getPinchDistance() {
    const [first, second] = Array.from(this.touchPointers.values())
    return first.distanceTo(second)
  }

  /**
   * Hotkey keydown event listeners.
   */
  private onKeyDown = (event: KeyboardEvent) => {
    const { cameraController, renderer, water, controls, draw } = this.dependencies
    if (event.code === 'KeyL') {
      // Hold L to align light/sun direction with camera looking direction
      this.settingLightDirection = true
      cameraController.getLightDirection(renderer.lightDir)
      if (controls.paused) draw()
      else renderer.updateCaustics(water)
    } else if (event.code === 'Space' && !event.repeat) {
      // Space: play/pause simulation
      controls.togglePaused()
    } else if (event.code === 'KeyG' && !event.repeat) {
      // G: toggle gravity/physics simulation
      controls.togglePhysics()
    }
  }

  private onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'KeyL') this.settingLightDirection = false
  }

  /**
   * Aligns sunlight source vector to track camera changes.
   */
  private syncLightDirection() {
    if (!this.settingLightDirection && !this.dependencies.controls.lightFollowsCamera) return false
    this.dependencies.cameraController.getLightDirection(this.dependencies.renderer.lightDir)
    return true
  }
}
