import { CONSTANTS } from './utils'
import Sprite from './sprite'
import Vec2 from './vec2'
import Level from './level'
import crossSprite from '../data/sprites/cross.png'

const cross = new Image()
cross.src = crossSprite
const sprite = new Sprite(cross)

const debug = document.getElementById('debug')

export const mouse = {
    x: 0,
    y: 0,
    gridX: 0,
    gridY: 0,
}

export const init = function (canvas: HTMLElement) {
    const rect = canvas.getBoundingClientRect()
    const { WIDTH, HEIGHT, GRID_SIZE, SCALE } = CONSTANTS
    const realGridSize = GRID_SIZE / SCALE

    canvas.addEventListener('click', function () {
        // Level.fill((mouse.gridX - 4) / 8, (mouse.gridY - 4) / 8);
    })

    canvas.addEventListener('mousemove', function (e: MouseEvent) {
        mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left)) * WIDTH
        mouse.y = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * HEIGHT

        mouse.gridX = mouse.x - (mouse.x % realGridSize) + realGridSize / 2
        mouse.gridY = mouse.y - (mouse.y % realGridSize) + realGridSize / 2
    })
}

export const draw = function (context: CanvasRenderingContext2D) {
    sprite.draw(context, new Vec2(mouse.gridX - 2, mouse.gridY - 2))
}
