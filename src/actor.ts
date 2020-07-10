import Entity from './entity'
import LevelManager from './level_manager'
import Solid from './solid'
import { collideAt, collideOutsideAt } from './utils'
import Vec2 from './vec2'

/**
 * Actors are are physics objects, such as Players, projectiles.
 * Anything that has to move and interact with the level.
 */
class Actor extends Entity {
    public momentumSpeed = new Vec2(0, 0)

    moveX(amount: number, onCollide: Function) {
        this.xRemainder += amount
        let move = Math.round(this.xRemainder)

        if (move !== 0) {
            this.xRemainder -= move
            const sign = Math.sign(move)

            while (move !== 0) {
                const checkPos = Vec2.addTwo(this.position, new Vec2(sign, 0))
                let collision = collideAt(LevelManager.activeLevel.solids, checkPos, this.half)

                if (!collision.collided) {
                    collision = collideAt(LevelManager.activeLevel.grid, this, new Vec2(sign, 0))
                }

                if (!collision.collided) {
                    this.position.x += sign
                    move -= sign
                } else {
                    if (typeof onCollide === 'function') {
                        onCollide(collision.collider, sign)
                    }

                    break
                }
            }
        }
    }

    moveY(amount: number, onCollide: Function) {
        this.yRemainder += amount
        let move = Math.round(this.yRemainder)

        if (move !== 0) {
            this.yRemainder -= move
            const sign = Math.sign(move)

            while (move !== 0) {
                const checkPos = Vec2.addTwo(this.position, new Vec2(0, sign))
                let collision = collideAt(LevelManager.activeLevel.solids, checkPos, this.half)

                // check if we hit a jump through top
                if (sign === 1 && !collision.collided) {
                    collision = collideOutsideAt(
                        LevelManager.activeLevel.jumpThroughs,
                        this.position,
                        this.half,
                        checkPos
                    )
                }

                if (!collision.collided) {
                    collision = collideAt(LevelManager.activeLevel.grid, this, new Vec2(0, sign))
                }

                if (!collision.collided) {
                    // No solid immeidately beside us
                    this.position.y += sign
                    move -= sign
                } else {
                    if (typeof onCollide === 'function') {
                        onCollide(collision.collider, sign)
                    }

                    break
                }
            }
        }
    }

    /**
     * Checks whether or not this actor is riding the given sold.
     * This should be overriden by actors.
     * @param {Solid} solid
     */
    isRiding(solid: Solid): boolean {
        const down = Vec2.addTwo(this.position, new Vec2(0, 1))
        return solid.collidable && solid.intersectPoint(down, this.half)
    }

    /**
     * A callback that is called when the actor is squished between solids.
     * This should be overriden by actors.
     */
    squish() {}
}

export default Actor
