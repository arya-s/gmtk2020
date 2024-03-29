import Aseprite from './aseprite'
import sprite from '../data/sprites/virus.json'
import Vec2 from './vec2'
import { lerp } from './utils'
import { easeInOutQuad } from './easing'
import corruptingSoundSrc from '../data/sounds/corrupting.mp3'
import Sound from './sound'
import BlockingWall from './blocking_wall'

const FADE_TIME = 1.6

class Enemy {
    public sprite = new Aseprite(sprite)
    public pos: Vec2
    private fadeLerp = 0
    private fade = false
    private fadeIn = true
    private fadeInTime = FADE_TIME
    private corruptingSound = new Sound(corruptingSoundSrc)
    private spawnFor: BlockingWall

    constructor(pos: Vec2) {
        this.pos = pos
        this.sprite.play('Idle')
    }

    spawnAt(pos: Vec2, spawnFor) {
        this.pos = pos
        this.fade = true
        this.fadeIn = true
        this.fadeLerp = 0
        this.spawnFor = spawnFor
    }

    render(context: CanvasRenderingContext2D) {
        if (this.fade) {
            context.globalAlpha = lerp(0, 1, easeInOutQuad(this.fadeLerp))
            this.sprite.render(context, this.pos)
            context.globalAlpha = 1.0
        }
    }

    update(dt: number) {
        this.sprite.update(dt)
        if (this.fade) {
            if (this.fadeIn) {
                this.fadeLerp += dt / this.fadeInTime

                if (this.fadeLerp >= 1) {
                    this.fadeLerp = 1
                    this.fadeIn = false
                }
            } else {
                this.fadeLerp -= dt / this.fadeInTime
                if (this.fadeLerp <= 0) {
                    this.fadeLerp = 0
                    this.fade = false
                }
            }

            if (this.fadeLerp >= 1 && this.spawnFor && !this.spawnFor.consumed) {
                this.corruptingSound.play()
            }
        }
    }
}

export default Enemy
