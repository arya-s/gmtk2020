import Aseprite from './aseprite'
import sprite from '../data/sprites/player_tron.json'

class PlayerSprite extends Aseprite {
    constructor() {
        super(sprite)
    }
}

export default PlayerSprite
