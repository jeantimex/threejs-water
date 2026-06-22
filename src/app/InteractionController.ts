import * as THREE from 'three'
import type { CameraController } from '../camera/CameraController'
import type { Renderer } from '../Renderer'
import type { SimulationObjectRegistry } from '../objects/SimulationObjectRegistry'
import type { Water } from '../Water'
import type { SimulationControls } from './SimulationControls'

enum InteractionMode {
  None,
  AddDrops,
  MoveObject,
  OrbitCamera,
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

export class InteractionController {
  private mode = InteractionMode.None
  private previousHit: THREE.Vector3 | null = null
  private dragPlaneNormal: THREE.Vector3 | null = null
  private activePointerId: number | null = null
  private readonly touchPointers = new Map<number, THREE.Vector2>()
  private pinchDistance: number | null = null
  private pinching = false
  private settingLightDirection = false

  constructor(private readonly dependencies: InteractionDependencies) {}

  get draggingObject() {
    return this.mode === InteractionMode.MoveObject
  }

  connect() {
    const { canvas } = this.dependencies
    canvas.style.touchAction = 'none'
    canvas.addEventListener('pointerdown', this.onPointerDown)
    canvas.addEventListener('pointermove', this.onPointerMove)
    canvas.addEventListener('pointerup', this.onPointerEnd)
    canvas.addEventListener('pointercancel', this.onPointerEnd)
    canvas.addEventListener('lostpointercapture', this.onLostPointerCapture)
    canvas.addEventListener('wheel', this.onWheel, { passive: false })
    window.addEventListener('keydown', this.onKeyDown, { capture: true })
    window.addEventListener('keyup', this.onKeyUp, { capture: true })
  }

  update(seconds: number) {
    this.dependencies.cameraController.update(seconds)
    this.syncLightDirection()
  }

  preparePausedDraw() {
    if (this.syncLightDirection() && this.dependencies.controls.paused) {
      this.dependencies.renderer.updateCaustics(this.dependencies.water)
    }
  }

  cancelDrag() {
    this.stopDrag()
  }

  private getRay(x: number, y: number) {
    const { canvas, camera } = this.dependencies
    const rect = canvas.getBoundingClientRect()
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

  private startDrag(x: number, y: number, time: number) {
    const { cameraController, camera, objects } = this.dependencies
    cameraController.stopInertia()
    const { origin, direction } = this.getRay(x, y)
    const pointOnPlane = origin.clone().addScaledVector(direction, -origin.y / direction.y)
    const objectHit = objects.active?.hitTest(origin, direction) ?? null

    if (objectHit) {
      this.mode = InteractionMode.MoveObject
      this.previousHit = objectHit
      this.dragPlaneNormal = new THREE.Vector3(0, 0, -1)
        .applyQuaternion(camera.quaternion)
        .negate()
    } else if (Math.abs(pointOnPlane.x) < 1 && Math.abs(pointOnPlane.z) < 1) {
      this.mode = InteractionMode.AddDrops
      this.duringDrag(x, y, time)
    } else {
      this.mode = InteractionMode.OrbitCamera
      cameraController.beginOrbit(x, y, time)
    }
  }

  private duringDrag(x: number, y: number, time: number) {
    const { water, renderer, objects, cameraController, controls, draw } = this.dependencies

    if (this.mode === InteractionMode.AddDrops) {
      const { origin, direction } = this.getRay(x, y)
      const point = origin.clone().addScaledVector(direction, -origin.y / direction.y)
      water.addDrop(point.x, point.z, 0.03, 0.01)
      if (controls.paused) {
        water.updateNormals()
        renderer.updateCaustics(water)
      }
    } else if (this.mode === InteractionMode.MoveObject) {
      if (!this.previousHit || !this.dragPlaneNormal || !objects.active) return
      const { origin, direction } = this.getRay(x, y)
      const distance = -this.dragPlaneNormal.dot(origin.clone().sub(this.previousHit))
        / this.dragPlaneNormal.dot(direction)
      const nextHit = origin.clone().addScaledVector(direction, distance)
      objects.active.moveBy(nextHit.clone().sub(this.previousHit))
      renderer.setWaterOptics(objects.optics)
      this.previousHit = nextHit
      if (controls.paused) renderer.updateCaustics(water)
    } else if (this.mode === InteractionMode.OrbitCamera) {
      cameraController.orbitTo(x, y, time)
    }

    if (controls.paused) draw()
  }

  private stopDrag() {
    this.mode = InteractionMode.None
    this.previousHit = null
    this.dragPlaneNormal = null
  }

  private onPointerDown = (event: PointerEvent) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (event.pointerType !== 'touch' && (this.activePointerId !== null || !event.isPrimary)) return
    if (event.pointerType === 'touch' && this.touchPointers.size >= 2) return

    event.preventDefault()
    this.dependencies.canvas.setPointerCapture(event.pointerId)

    if (event.pointerType === 'touch') {
      this.touchPointers.set(event.pointerId, new THREE.Vector2(event.clientX, event.clientY))
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

  private onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === 'touch' && this.touchPointers.has(event.pointerId)) {
      this.touchPointers.get(event.pointerId)!.set(event.clientX, event.clientY)
      if (this.pinching && this.pinchDistance !== null && this.touchPointers.size >= 2) {
        event.preventDefault()
        const nextDistance = this.getPinchDistance()
        if (nextDistance > 0) {
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

  private onWheel = (event: WheelEvent) => {
    event.preventDefault()
    this.dependencies.cameraController.zoomByWheel(event.deltaY)
    if (this.dependencies.controls.paused) this.dependencies.draw()
  }

  private getPinchDistance() {
    const [first, second] = Array.from(this.touchPointers.values())
    return first.distanceTo(second)
  }

  private onKeyDown = (event: KeyboardEvent) => {
    const { cameraController, renderer, water, controls, draw } = this.dependencies
    if (event.code === 'KeyL') {
      this.settingLightDirection = true
      cameraController.getLightDirection(renderer.lightDir)
      if (controls.paused) draw()
      else renderer.updateCaustics(water)
    } else if (event.code === 'Space' && !event.repeat) {
      controls.togglePaused()
    } else if (event.code === 'KeyG' && !event.repeat) {
      controls.togglePhysics()
    }
  }

  private onKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'KeyL') this.settingLightDirection = false
  }

  private syncLightDirection() {
    if (!this.settingLightDirection) return false
    this.dependencies.cameraController.getLightDirection(this.dependencies.renderer.lightDir)
    return true
  }
}
