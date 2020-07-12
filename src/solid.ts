import Entity from './entity'
import Actor from './actor'
import Vec2 from './vec2'
import LevelManager from './level_manager'
import { overlap } from './utils'

let id = 0

class Solid extends Entity {
    public collidable: boolean
    public speed = new Vec2(0, 0)
    public id

    constructor(public position: Vec2, public half: Vec2) {
        super(position, half)
        this.collidable = true
        this.id = id
        id++
    }

    moveX(amount: number) {
        this.xRemainder += amount
        let move = Math.round(this.xRemainder)

        if (move !== 0) {
            const riding = this.getAllRidingActors()
            const sign = Math.sign(move)
            this.xRemainder -= move
            this.collidable = false

            while (move !== 0) {
                this.position.x += sign

                if (move > 0) {
                    for (const actor of LevelManager.activeLevel.actors) {
                        if (overlap(this, actor)) {
                            // Push right
                            actor.moveX(this.right() - actor.left(), actor.squish.bind(actor))
                            // console.log('1 walls speed', this.speed.clone())
                        } else if (riding.includes(actor)) {
                            // Carry
                            actor.moveX(sign, null)
                            // console.log('2 walls speed', this.speed.clone())
                        }
                    }
                } else {
                    for (const actor of LevelManager.activeLevel.actors) {
                        if (overlap(this, actor)) {
                            // Push left
                            actor.moveX(this.left() - actor.right(), actor.squish.bind(actor))
                            // console.log('3 walls speed', this.speed.clone())
                        } else if (riding.includes(actor)) {
                            // Carry
                            actor.moveX(sign, null)
                            // console.log('4 walls speed', this.speed.clone())
                        }
                    }
                }

                move -= sign
            }

            this.collidable = true
        }
    }

    moveY(amount: number) {
        this.yRemainder += amount
        let move = Math.round(this.yRemainder)

        if (move !== 0) {
            const riding = this.getAllRidingActors()
            const sign = Math.sign(move)
            this.yRemainder -= move
            this.collidable = false

            while (move !== 0) {
                this.position.y += sign

                if (move > 0) {
                    for (const actor of LevelManager.activeLevel.actors) {
                        if (overlap(this, actor)) {
                            // Push top
                            actor.moveY(this.bottom() - actor.top(), actor.squish.bind(actor))
                        } else if (riding.includes(actor)) {
                            // Carry
                            actor.moveY(sign, null)
                        }
                    }
                } else {
                    for (const actor of LevelManager.activeLevel.actors) {
                        if (overlap(this, actor)) {
                            // Push bottom
                            actor.moveY(this.top() - actor.bottom(), actor.squish.bind(actor))
                        } else if (riding.includes(actor)) {
                            // Carry
                            actor.moveY(sign, null)
                        }
                    }
                }

                move -= sign
            }

            this.collidable = true
        }
    }

    moveToX(x: number) {
        this.moveX(x - (this.position.x + this.xRemainder))
    }

    moveToY(y: number) {
        this.moveY(y - (this.position.y + this.yRemainder))
    }

    getAllRidingActors(): Array<Actor> {
        return LevelManager.activeLevel.actors.filter((actor) => actor.isRiding(this))
    }
}

export default Solid
