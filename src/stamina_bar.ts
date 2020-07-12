import { CONSTANTS, clamp } from './utils'

class StaminaBar {
    private width = 100 / CONSTANTS.SCALE
    private height = 20 / CONSTANTS.SCALE
    public value = 1.0

    render(context: CanvasRenderingContext2D) {
        // border
        context.fillStyle = '#fff'
        context.fillRect(
            CONSTANTS.WIDTH - 20 / CONSTANTS.SCALE - this.width + 0.5,
            0 + 20 / CONSTANTS.SCALE + 0.5,
            this.width,
            this.height
        )

        context.fillStyle = '#000'
        context.fillRect(
            CONSTANTS.WIDTH - 20 / CONSTANTS.SCALE - this.width + 1 + 0.5,
            0 + 20 / CONSTANTS.SCALE + 1 + 0.5,
            this.width - 2,
            this.height - 2
        )

        const barWidth = clamp(Math.floor(this.width * this.value) - 2, 0, 100)
        context.fillStyle = '#0373fc'
        context.fillRect(
            CONSTANTS.WIDTH - 20 / CONSTANTS.SCALE - this.width + 1 + 0.5,
            0 + 20 / CONSTANTS.SCALE + 1 + 0.5,
            barWidth,
            this.height - 2
        )
    }

    update(dt: number) {}
}

export default StaminaBar
