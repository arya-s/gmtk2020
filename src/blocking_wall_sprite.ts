import sprites from '../data/sprites/blocking_walls/*.png'
import Sprite from './sprite'
import Vec2 from './vec2'

class BlockingWallSprite {
    public corruptedSprite
    public healthySprite
    public pos
    public l1 = false
    public l2 = false
    public loaded = false

    constructor(size: Vec2, pos) {
        this.pos = pos
        const s = `${size.x / 8}x${size.y / 8}`
        const corrutpedSrc = `${s}_corrupted`
        const healthySrc = `${s}_healthy`

        console.log(sprites[corrutpedSrc], sprites[healthySrc])

        console.log('sprites', sprites)
        if (!sprites.hasOwnProperty(corrutpedSrc) || sprites.hasOwnProperty(healthySrc)) {
            console.warn('Size mismatch for block sprite. Cannot find sprite for size', s)
        }
        const corrupted = new Image()
        corrupted.onload = () => {
            this.l1 = true
            this.loaded = this.l1 && this.l2
        }
        corrupted.src = sprites[corrutpedSrc]
        const healthy = new Image()
        healthy.onload = () => {
            this.l1 = true
            this.loaded = this.l1 && this.l2
        }
        healthy.src = sprites[healthySrc]

        this.corruptedSprite = new Sprite(corrupted)
        this.healthySprite = new Sprite(healthy)

        console.log(corrupted, healthy)
    }

    render(context: CanvasRenderingContext2D) {
        if (!this.loaded) {
            return
        }

        this.corruptedSprite.render(context, this.pos)
    }
}

export default BlockingWallSprite
