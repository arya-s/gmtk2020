import Solid from './solid'

class BlockingWall extends Solid {
    public color = '#00a09c'
    public removing = false
    public consumed = false

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color
        context.fillRect(this.left() + 0.5, this.top() + 0.5, this.width(), this.height())
    }
}

export default BlockingWall
