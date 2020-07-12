import levelIndex from '../data/levels/*.json'
import Level from './level'
import Player from './player'
import { kFormatter } from './utils'
import Sound from './sound'
import threatLoopSoudnSrc from '../data/sounds/threat_loop.mp3'

interface LevelIndex {
    [levelName: string]: any
}

class LevelManager {
    public activeLevelName: string
    public activeLevel: Level
    public levelRunning = true
    public score = 0
    public sound = new Sound(threatLoopSoudnSrc)

    init() {
        this.initLevel('TDU1')
        this.sound.play(true)
    }

    initLevel(level: string, player?: Player) {
        if (!levelIndex[level]) {
            throw new Error(`Level ${level} was not found. Did you spell it correctly?`)
        }

        const levelData = levelIndex[level]
        this.activeLevelName = level
        this.activeLevel = new Level(player)
        this.activeLevel.load(levelData)
        this.levelRunning = true
    }

    reload() {
        this.initLevel(this.activeLevelName)
    }

    updateScore(delta) {
        this.activeLevel.score += delta
    }

    levelEnded() {
        this.levelRunning = false
    }

    update(dt: number) {
        if (this.levelRunning) {
            this.activeLevel.update(dt)
        }
    }

    render(context: CanvasRenderingContext2D) {
        this.activeLevel.render(context)
        if (this.levelRunning) {
            this.renderText(context, kFormatter(this.score))
        }
    }

    renderText(context, text) {
        context.fillStyle = '#6abe30'
        context.font = '8px "Press Start 2P"'
        context.textAlign = 'left'
        context.textBaseline = 'middle'
        context.fillText(text, 12.5, 8.5)
    }
}

const levelManager = new LevelManager()

export default levelManager

window.level = (level: string) => levelManager.initLevel(level)
window.levels = levelIndex
