import Vec2 from './vec2'

class Sprite {
    constructor(public img: HTMLImageElement) {
        this.img = img
    }

    draw(context: CanvasRenderingContext2D, position: Vec2) {
        context.drawImage(this.img, position.x + 0.5, position.y + 0.5) // 0.5 needed for canvas not positioning correctly
    }
}

export default Sprite
