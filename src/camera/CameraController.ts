import * as THREE from 'three'

// Constants controlling the orbital camera limits and dynamics
const MIN_DISTANCE = 2      // Minimum zoom distance from the target
const MAX_DISTANCE = 10     // Maximum zoom distance from the target
const MAX_ORBIT_SPEED = 1080 // Cap on rotation speed (degrees per second) to prevent extreme spinning
const ORBIT_DAMPING = 6      // Friction coefficient for camera momentum decay
const MIN_ANGLE_X = -89.999  // Maximum downward vertical look angle (degrees)
const MAX_ANGLE_X = 89.999   // Maximum upward vertical look angle (degrees)

/**
 * Handles orbiting, rotating, inertia, and zooming of the camera around a focal point.
 * Also computes light directions aligned with the camera coordinate frame.
 */
export class CameraController {
  // The center target point the camera orbits around
  readonly target = new THREE.Vector3(0, -0.5, 0)

  private angleX = -25      // Vertical pitch angle in degrees (altitude)
  private angleY = -200.5   // Horizontal yaw angle in degrees (azimuth)
  private distance = 4      // Current distance from the target point
  private velocityX = 0     // Pitch angular velocity (degrees/sec)
  private velocityY = 0     // Yaw angular velocity (degrees/sec)
  private lastX = 0         // Last pointer X coordinate
  private lastY = 0         // Last pointer Y coordinate
  private lastTime = 0      // Timestamp of the last move event (ms)
  private orbiting = false  // Flag indicating if the user is actively dragging to orbit

  /**
   * Initializes the drag-to-orbit state with the current cursor position and time.
   * Resets any existing velocity/momentum.
   */
  beginOrbit(x: number, y: number, time: number) {
    this.lastX = x
    this.lastY = y
    this.lastTime = time
    this.velocityX = 0
    this.velocityY = 0
    this.orbiting = true
  }

  /**
   * Computes the horizontal and vertical angular displacement based on cursor movements.
   * Calculates instantaneous angular velocities to preserve for inertial coasting.
   */
  orbitTo(x: number, y: number, time: number) {
    if (!this.orbiting) return

    const deltaX = x - this.lastX
    const deltaY = y - this.lastY
    // Prevent divide-by-zero or extreme spikes in velocity by clamping min time step
    const seconds = Math.max((time - this.lastTime) / 1000, 1 / 240)

    // Adjust azimuth and pitch angles based on mouse delta
    this.angleY -= deltaX
    this.angleX = THREE.MathUtils.clamp(this.angleX - deltaY, MIN_ANGLE_X, MAX_ANGLE_X)
    
    // Calculate and clamp velocity (degrees per second) for inertial calculations
    this.velocityY = THREE.MathUtils.clamp(-deltaX / seconds, -MAX_ORBIT_SPEED, MAX_ORBIT_SPEED)
    this.velocityX = THREE.MathUtils.clamp(-deltaY / seconds, -MAX_ORBIT_SPEED, MAX_ORBIT_SPEED)

    this.lastX = x
    this.lastY = y
    this.lastTime = time
  }

  /**
   * Ends active dragging and starts the inertial decay phase.
   * Dampens the current velocities depending on the time elapsed since the last move event.
   */
  endOrbit(time: number) {
    if (!this.orbiting) return

    // Apply exponential decay over the duration between the last move and mouse release
    const damping = Math.exp(-ORBIT_DAMPING * Math.max(0, (time - this.lastTime) / 1000))
    this.velocityX *= damping
    this.velocityY *= damping
    this.orbiting = false
  }

  /**
   * Immediately stops all camera rotation and inertial momentum.
   */
  stopInertia() {
    this.velocityX = 0
    this.velocityY = 0
    this.orbiting = false
  }

  /**
   * Updates camera angles according to current angular velocities during the inertial coasting phase.
   * Applies damping (friction) over the elapsed time step.
   *
   * @param seconds Elapsed time in seconds since the last frame
   */
  update(seconds: number) {
    if (this.orbiting) return // Do not apply inertias while dragging

    // Apply angular velocities
    this.angleY += this.velocityY * seconds
    const nextAngleX = THREE.MathUtils.clamp(
      this.angleX + this.velocityX * seconds,
      MIN_ANGLE_X,
      MAX_ANGLE_X
    )
    // If we hit rotation boundary limits, kill pitch velocity
    if (nextAngleX === MIN_ANGLE_X || nextAngleX === MAX_ANGLE_X) this.velocityX = 0
    this.angleX = nextAngleX

    // Damp velocity using exponential decay formula: V = V0 * e^(-damping * dt)
    const damping = Math.exp(-ORBIT_DAMPING * seconds)
    this.velocityX *= damping
    this.velocityY *= damping

    // Threshold small velocities to clean zero
    if (Math.abs(this.velocityX) < 0.01) this.velocityX = 0
    if (Math.abs(this.velocityY) < 0.01) this.velocityY = 0
  }

  /**
   * Adjusts the camera zoom distance via a scroll wheel delta.
   */
  zoomByWheel(deltaY: number) {
    this.zoomByScale(Math.exp(deltaY * 0.001))
  }

  /**
   * Adjusts the camera zoom distance by a scaling multiplier, clamping within bounds.
   */
  zoomByScale(scale: number) {
    this.distance = THREE.MathUtils.clamp(this.distance * scale, MIN_DISTANCE, MAX_DISTANCE)
  }

  /**
   * Applies the calculated yaw/pitch angles and distance offsets to a Three.js perspective camera.
   * Sets the camera position, up vector, and targets the focal point.
   */
  apply(camera: THREE.PerspectiveCamera) {
    const offset = new THREE.Vector3(0, 0, this.distance)
    // Rotate offset vector around camera local axis based on vertical (altitude) and horizontal (azimuth) angles
    offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(this.angleX))
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(this.angleY))

    camera.position.copy(this.target).add(offset)
    camera.up.set(0, 1, 0)
    camera.lookAt(this.target)
  }

  /**
   * Calculates a directional light vector matching the current camera viewpoint,
   * keeping shadows or specular highlights aligned with the user perspective.
   */
  getLightDirection(target: THREE.Vector3): THREE.Vector3 {
    const yRad = THREE.MathUtils.degToRad(90 - this.angleY)
    const xRad = THREE.MathUtils.degToRad(-this.angleX)
    return target.set(
      Math.cos(yRad) * Math.cos(xRad),
      Math.sin(xRad),
      Math.sin(yRad) * Math.cos(xRad)
    ).normalize()
  }
}
