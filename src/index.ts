import Stats from 'stats.js'
import LevelManager from './level_manager'
import { CONSTANTS, clearDraw } from './utils'

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = CONSTANTS.WIDTH
canvas.height = CONSTANTS.HEIGHT
const context = canvas.getContext('2d')
context.translate(0.5, 0.5)
context.imageSmoothingEnabled = false

let start: number

const init = function () {
    start = performance.now()
    LevelManager.init()
}

const update = function (dt: number) {
    LevelManager.update(dt)
}

const render = function () {
    clearDraw(context)
    LevelManager.render(context)
}

const tick = function (now: DOMHighResTimeStamp) {
    stats.begin()
    let dt = (now - start) / 1000
    start = now

    update(dt)
    render()
    stats.end()
    requestAnimationFrame(tick)
}

init()
requestAnimationFrame(tick)
