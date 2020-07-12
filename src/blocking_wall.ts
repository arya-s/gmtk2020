import Solid from './solid'
import BlockingWallSpritesheet from './blocking_wall_spritesheet'
import { timeStamp } from 'console'

const CORRUPT_TIMER = 1.6

class BlockingWall extends Solid {
    public color = '#00a09c'
    public removing = false
    public consumed = false
    public identifier = `${this.width() / 8}x${this.height() / 8}`
    public corruptedTimer = CORRUPT_TIMER
    public renderHealthy = true

    render(context: CanvasRenderingContext2D) {
        if (!this.renderHealthy) {
            BlockingWallSpritesheet.render(
                context,
                this.position,
                this.half,
                `${this.identifier}_corrupted`
            )
        } else {
            BlockingWallSpritesheet.render(
                context,
                this.position,
                this.half,
                `${this.identifier}_healthy`
            )
        }
    }

    update(dt) {
        if (this.removing) {
            if (this.corruptedTimer <= 0) {
                this.renderHealthy = false
            } else {
                this.corruptedTimer -= dt
            }
        }
    }
}

export default BlockingWall
