import Aseprite from './aseprite'
import sprite from '../data/sprites/SmallProps_Torch.json'
import Vec2 from './vec2'

class SmallTorch {
    private sprite = new Aseprite(sprite)
    private pos: Vec2

    constructor(pos: Vec2) {
        this.pos = pos
        this.sprite.play('Loop')
    }

    render(context: CanvasRenderingContext2D) {
        this.sprite.render(context, this.pos)
    }

    update(dt: number) {
        this.sprite.update(dt)
    }
}

export default SmallTorch
