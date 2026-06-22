import * as THREE from 'three'

const MIN_DISTANCE = 2
const MAX_DISTANCE = 10
const MAX_ORBIT_SPEED = 1080
const ORBIT_DAMPING = 6
const MIN_ANGLE_X = -89.999
const MAX_ANGLE_X = 89.999

export class CameraController {
  readonly target = new THREE.Vector3(0, -0.5, 0)

  private angleX = -25
  private angleY = -200.5
  private distance = 4
  private velocityX = 0
  private velocityY = 0
  private lastX = 0
  private lastY = 0
  private lastTime = 0
  private orbiting = false

  beginOrbit(x: number, y: number, time: number) {
    this.lastX = x
    this.lastY = y
    this.lastTime = time
    this.velocityX = 0
    this.velocityY = 0
    this.orbiting = true
  }

  orbitTo(x: number, y: number, time: number) {
    if (!this.orbiting) return

    const deltaX = x - this.lastX
    const deltaY = y - this.lastY
    const seconds = Math.max((time - this.lastTime) / 1000, 1 / 240)

    this.angleY -= deltaX
    this.angleX = THREE.MathUtils.clamp(this.angleX - deltaY, MIN_ANGLE_X, MAX_ANGLE_X)
    this.velocityY = THREE.MathUtils.clamp(-deltaX / seconds, -MAX_ORBIT_SPEED, MAX_ORBIT_SPEED)
    this.velocityX = THREE.MathUtils.clamp(-deltaY / seconds, -MAX_ORBIT_SPEED, MAX_ORBIT_SPEED)

    this.lastX = x
    this.lastY = y
    this.lastTime = time
  }

  endOrbit(time: number) {
    if (!this.orbiting) return

    const damping = Math.exp(-ORBIT_DAMPING * Math.max(0, (time - this.lastTime) / 1000))
    this.velocityX *= damping
    this.velocityY *= damping
    this.orbiting = false
  }

  stopInertia() {
    this.velocityX = 0
    this.velocityY = 0
    this.orbiting = false
  }

  update(seconds: number) {
    if (this.orbiting) return

    this.angleY += this.velocityY * seconds
    const nextAngleX = THREE.MathUtils.clamp(
      this.angleX + this.velocityX * seconds,
      MIN_ANGLE_X,
      MAX_ANGLE_X
    )
    if (nextAngleX === MIN_ANGLE_X || nextAngleX === MAX_ANGLE_X) this.velocityX = 0
    this.angleX = nextAngleX

    const damping = Math.exp(-ORBIT_DAMPING * seconds)
    this.velocityX *= damping
    this.velocityY *= damping

    if (Math.abs(this.velocityX) < 0.01) this.velocityX = 0
    if (Math.abs(this.velocityY) < 0.01) this.velocityY = 0
  }

  zoomByWheel(deltaY: number) {
    this.zoomByScale(Math.exp(deltaY * 0.001))
  }

  zoomByScale(scale: number) {
    this.distance = THREE.MathUtils.clamp(this.distance * scale, MIN_DISTANCE, MAX_DISTANCE)
  }

  apply(camera: THREE.PerspectiveCamera) {
    const offset = new THREE.Vector3(0, 0, this.distance)
    offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(this.angleX))
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(this.angleY))

    camera.position.copy(this.target).add(offset)
    camera.up.set(0, 1, 0)
    camera.lookAt(this.target)
  }

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
