import Solid from './solid'
import Vec2 from './vec2'

export enum KillFrom {
    TOP = 0,
    TOP_BOTTOM_RIGHT,
    BOTTOM,
    TOP_BOTTOM_LEFT,
    ALL,
}

class Spike extends Solid {
    public killFrom: KillFrom = KillFrom.TOP

    constructor(pos: Vec2, half: Vec2, killFrom?: KillFrom) {
        super(pos, half)
        this.killFrom = killFrom
    }

    drawAABB(context: CanvasRenderingContext2D, color = '#979', thickness: number = 1) {
        super.drawAABB(context, color, thickness)
    }
}

export default Spike
