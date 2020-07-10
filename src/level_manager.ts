import levelIndex from '../data/levels/*.json'
import Level from './level'

interface LevelIndex {
    [levelName: string]: any
}

class LevelManager {
    public activeLevelName: string
    public activeLevel: Level

    init() {
        this.initLevel('a_03')
    }

    initLevel(level: string) {
        if (!levelIndex[level]) {
            throw new Error(`Level ${level} was not found. Did you spell it correctly?`)
        }

        const levelData = levelIndex[level]
        this.activeLevelName = level
        this.activeLevel = new Level()
        this.activeLevel.load(levelData)
    }

    reload() {
        this.initLevel(this.activeLevelName)
    }

    update(dt: number) {
        this.activeLevel.update(dt)
    }

    render(context: CanvasRenderingContext2D) {
        this.activeLevel.render(context)
    }
}

const levelManager = new LevelManager()

export default levelManager

window.level = (level: string) => levelManager.initLevel(level)
window.levels = levelIndex
