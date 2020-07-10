import Solid from './solid'
import Vec2 from './vec2'
import LevelManager from './level_manager'
import { lerp, overlap } from './utils'
import { easeInOutCubic } from './easing'

class MovingPlatform extends Solid {
    private moveBy: Vec2
    private moveFrom: Vec2
    private moveTo: Vec2
    private moveTime: number
    private moveTimePositive: number
    private moveTimeNegative: number
    private restTime: number
    private restCounter: number
    private moveLerp = 0
    private movingPositive = true

    constructor(
        position: Vec2,
        half: Vec2,
        moveBy: Vec2,
        moveTimeForward: number,
        moveTimeBackwards,
        restTime: number
    ) {
        super(position, half)
        this.moveBy = moveBy
        this.moveFrom = this.position.clone()
        this.moveTo = Vec2.addTwo(this.moveFrom, this.moveBy)
        this.restTime = restTime
        this.restCounter = restTime
        this.moveTimePositive = moveTimeForward
        this.moveTimeNegative = moveTimeBackwards
    }

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = '#3949ad'
        context.fillRect(this.left() + 0.5, this.top() + 0.5, this.width(), this.height())
    }

    update(dt: number) {
        super.update(dt)

        this.restCounter += dt

        this.speed.x = 0
        this.speed.y = 0

        if (this.movingPositive) {
            if (this.restCounter >= this.restTime - this.moveTimePositive) {
                this.moveLerp += dt / this.moveTimePositive
                if (this.moveLerp >= 1) {
                    this.moveLerp = 1
                    this.movingPositive = false
                    this.restCounter = 0
                }

                this.speed.x =
                    (this.position.x - this.moveFrom.x) / (this.moveLerp * this.moveTimePositive)
                this.speed.y =
                    (this.position.y - this.moveFrom.y) / (this.moveLerp * this.moveTimePositive)
            }
        } else {
            if (this.restCounter >= this.restTime - this.moveTimeNegative) {
                this.moveLerp -= dt / this.moveTimeNegative
                if (this.moveLerp <= 0) {
                    this.moveLerp = 0
                    this.movingPositive = true
                    this.restCounter = 0
                }
                this.speed.x =
                    (this.position.x - this.moveTo.x) /
                    ((1 - this.moveLerp) * this.moveTimeNegative)
                this.speed.y =
                    (this.position.y - this.moveTo.y) /
                    ((1 - this.moveLerp) * this.moveTimeNegative)
            }
        }

        const target = new Vec2(
            lerp(this.moveFrom.x, this.moveTo.x, easeInOutCubic(this.moveLerp)),
            lerp(this.moveFrom.y, this.moveTo.y, easeInOutCubic(this.moveLerp))
        )

        this.moveToX(target.x)
        this.moveToY(target.y)

        for (const actor of LevelManager.activeLevel.actors) {
            if (overlap(this, actor) || actor.isRiding(this)) {
                actor.momentumSpeed = this.speed.clone()
            }
        }
    }
}

export default MovingPlatform
