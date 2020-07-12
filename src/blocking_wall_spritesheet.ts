import sheet from '../data/sprites/blocking_walls/blocking_walls_sprites.json'
import sheetSrc from '../data/sprites/blocking_walls/blocking_walls_sprites.png'
import Vec2 from './vec2'

class BlockingWallSpritesheet {
    public img = new Image()
    public loaded = false

    constructor() {
        this.img.src = sheetSrc
        this.img.addEventListener('load', () => {
            this.loaded = true
        })
    }

    render(context: CanvasRenderingContext2D, pos: Vec2, half: Vec2, sprite: string) {
        if (!this.loaded) {
            return
        }

        const { frames } = sheet
        const data = frames[sprite]

        if (data === undefined) {
            console.warn('Cant find sprite for', sprite)
            return
        }

        const { frame } = data

        context.drawImage(
            this.img,
            frame.x,
            frame.y,
            frame.w,
            frame.h,
            pos.x - frame.w / 2 + 0.5,
            pos.y + frame.h / 2 - half.y * 2 + 0.5,
            // pos.x - frame.w / 2 + 0.5,
            // pos.y - frame.h / 2 - half.y + 0.5,
            frame.w,
            frame.h
        )
    }
}

export default new BlockingWallSpritesheet()
