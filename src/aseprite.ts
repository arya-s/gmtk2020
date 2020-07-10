import Vec2 from './vec2'
import sprites from '../data/sprites/*.png'

interface FrameTag {
    name: string
    from: number
    to: number
}

class Aseprite {
    private activeTag: FrameTag = { name: null, from: 0, to: 0 }
    private activeFrame: number
    private frameCount: number
    private duration: number
    private img: HTMLImageElement = new Image()
    private loaded: boolean = false

    constructor(private data: Object) {
        this.data = data
        this.img.src = sprites[this.data.meta.image.split('.png')[0]]
        this.img.addEventListener('load', () => {
            this.loaded = true
        })
    }

    initAnimation(tag) {
        const { frameTags } = this.data.meta
        this.activeTag = frameTags.find((ft) => ft.name === tag)
        this.frameCount = this.activeTag.to - this.activeTag.from + 1
        this.activeFrame = 0
        this.setFrameDuration()
    }

    setFrameDuration() {
        const { frames } = this.data
        const frame = frames[this.activeTag.from + this.activeFrame]

        if (frame) {
            this.duration = frames[this.activeTag.from + this.activeFrame].duration / 1000
        }
    }

    play(tag: string) {
        if (this.activeTag.name !== tag) {
            this.initAnimation(tag)
        }
    }

    nextFrame() {
        this.activeFrame = (this.activeFrame + 1) % this.frameCount
    }

    render(context: CanvasRenderingContext2D, position: Vec2, half: Vec2 = new Vec2(0, 10)) {
        if (!this.loaded) {
            return
        }

        const { frames } = this.data
        const frame = frames[this.activeTag.from + this.activeFrame].frame

        context.drawImage(
            this.img,
            frame.x,
            frame.y,
            frame.w,
            frame.h,
            position.x - frame.w / 2 + 0.5,
            position.y - frame.h / 2 - half.y + 0.5,
            frame.w,
            frame.h
        )
    }

    update(dt: number) {
        if (!this.loaded || this.frameCount === 0) {
            return
        }

        if (this.duration > 0) {
            this.duration -= dt
            return
        }

        this.nextFrame()
        this.setFrameDuration()
    }
}

export default Aseprite
