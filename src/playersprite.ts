import Aseprite from './aseprite'
import sprite from '../data/sprites/new_player.json'

class PlayerSprite extends Aseprite {
    constructor() {
        super(sprite)
    }
}

export default PlayerSprite
