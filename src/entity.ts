import Vec2 from './vec2'
import Sprite from './sprite'

const cross = new Image()
cross.src = 'cross.png'

class Entity {
    public position: Vec2
    public half: Vec2
    public facing: number = 0
    public speed: Vec2
    protected xRemainder: number
    protected yRemainder: number
    protected centerSprite = new Sprite(cross)

    constructor(position: Vec2, half: Vec2) {
        this.position = position
        this.half = new Vec2(half.x, half.y)
        this.xRemainder = 0
        this.yRemainder = 0
    }

    intersectPoint(point: Vec2, half: Vec2): boolean {
        const dx = point.x - this.position.x
        const px = half.x + this.half.x - Math.abs(dx)

        if (px <= 0) {
            return false
        }

        const dy = point.y - this.position.y
        const py = half.y + this.half.y - Math.abs(dy)

        if (py <= 0) {
            return false
        }

        return true
    }

    intersectEntity(other: Entity): boolean {
        const dx = other.position.x - this.position.x
        const px = other.half.x + this.half.x - Math.abs(dx)

        if (px <= 0) {
            return false
        }

        const dy = other.position.y - this.position.y
        const py = other.half.y + this.half.y - Math.abs(dy)

        if (py <= 0) {
            return false
        }

        return true
    }

    update(dt: number) {}

    drawAABB(context: CanvasRenderingContext2D, color: string = '#fff', thickness: number = 1) {
        const x1 = Math.floor(this.position.x - this.half.x)
        const y1 = Math.floor(this.position.y - this.half.y)
        const x2 = Math.floor(this.position.x + this.half.x)
        const y2 = Math.floor(this.position.y + this.half.y)

        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y1)
        context.lineTo(x2, y2)
        context.lineTo(x1, y2)
        context.lineTo(x1, y1)
        context.closePath()
        context.lineWidth = thickness
        context.strokeStyle = color
        context.stroke()

        this.centerSprite.draw(context, new Vec2(this.position.x - 2, this.position.y - 2))
    }

    left(): number {
        return this.position.x - this.half.x
    }

    right(): number {
        return this.position.x + this.half.x
    }

    top(): number {
        return this.position.y - this.half.y
    }

    bottom(): number {
        return this.position.y + this.half.y
    }

    width(): number {
        return this.half.x * 2
    }

    height(): number {
        return this.half.y * 2
    }
}

export default Entity
