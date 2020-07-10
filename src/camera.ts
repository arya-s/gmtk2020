import Vec2 from './vec2'
import Entity from './entity'
import { clamp, lerp, CONSTANTS } from './utils'
import { easeInOutCubic as ease } from './easing'
import LevelManager from './level_manager'

class Camera {
    private _position = new Vec2(0, 0)
    private target: Entity
    private bufferZone = new Vec2(-CONSTANTS.WIDTH / 2, -CONSTANTS.HEIGHT / 2)
    private lookAhead = 2
    private lookAheadSpeed = 32

    constructor() {}

    get position() {
        return this._position
    }

    set position(position: Vec2) {
        this._position = position
    }

    setTarget(target: Entity) {
        this.target = target
    }

    update(dt: number) {
        if (!this.target) {
            return
        }

        this.position.x = clamp(
            lerp(
                this.position.x,
                this.target.left() + this.lookAhead * this.target.facing + this.bufferZone.x,
                ease(this.lookAheadSpeed * dt)
            ),
            0,
            LevelManager.activeLevel.levelWidth - CONSTANTS.WIDTH
        )

        this.position.y = clamp(
            this.target.top() + this.bufferZone.y,
            0,
            LevelManager.activeLevel.levelHeight - CONSTANTS.HEIGHT
        )
    }

    render(context: CanvasRenderingContext2D) {
        context.translate(-this._position.x + 0.5, -this._position.y + 0.5)
    }
}

export default Camera
