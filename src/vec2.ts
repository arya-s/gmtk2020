class Vec2 {
    constructor(public x: number, public y: number) {
        this.x = x
        this.y = y
    }

    add(other: Vec2) {
        this.x += other.x
        this.y += other.y
    }

    lengthSquared() {
        return this.x * this.x + this.y * this.y
    }

    length() {
        return Math.sqrt(this.lengthSquared())
    }

    clone() {
        return new Vec2(this.x, this.y)
    }

    static addTwo(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x + b.x, a.y + b.y)
    }

    static get zero() {
        return new Vec2(0, 0)
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}

export default Vec2
