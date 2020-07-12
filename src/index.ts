import LevelManager from './level_manager'
import { CONSTANTS, clearDraw } from './utils'

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
    let dt = (now - start) / 1000
    start = now

    update(dt)
    render()
    requestAnimationFrame(tick)
}

init()
requestAnimationFrame(tick)
