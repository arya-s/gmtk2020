import { CONSTANTS, clamp } from './utils'
import Vec2 from './vec2'

class StaminaBar {
    public width = 8
    public height = 1.5
    public value = 1.0
    public position = new Vec2(0, 0)
    public show = false

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.show ? '#00000' : '#00000000'
        context.fillRect(this.position.x + 0.5, this.position.y + 0.5, this.width, this.height)

        const barWidth = clamp(Math.floor(this.width * this.value), 0, 100)
        context.fillStyle = this.show ? '#0373fc' : '#00000000'
        context.fillRect(this.position.x + 0.5, this.position.y + 0.5, barWidth, this.height)
    }

    update(dt: number) {}
}

export default StaminaBar
