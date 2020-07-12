import Aseprite from './aseprite'
import sprite from '../data/sprites/virus.json'
import Vec2 from './vec2'

class Enemy {
    private sprite = new Aseprite(sprite)
    public pos: Vec2

    constructor(pos: Vec2) {
        this.pos = pos
        this.sprite.play('Idle')
    }

    render(context: CanvasRenderingContext2D) {
        this.sprite.render(context, this.pos)
    }

    update(dt: number) {
        this.sprite.update(dt)
    }
}

export default Enemy
