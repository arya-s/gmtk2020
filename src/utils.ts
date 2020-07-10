import Vec2 from './vec2'
import Solid from './solid'
import Grid from './grid'
import Actor from './actor'
import Entity from './entity'

export const CONSTANTS = {
    WIDTH: 320,
    HEIGHT: 180,
    SCALE: 4,
    GRID_SIZE: 32,
}

export interface Collision {
    collided: boolean
    collider: Solid | Grid | null
}

export const collideOutsideAt = function (
    solids: Solid[],
    position: Vec2,
    half: Vec2,
    nextPos: Vec2
): Collision {
    for (const solid of solids) {
        if (
            solid.collidable &&
            !solid.intersectPoint(position, half) &&
            solid.intersectPoint(nextPos, half)
        ) {
            return { collided: true, collider: solid }
        }
    }

    return { collided: false, collider: null }
}

export const collideAt = function (
    gridOrSolids: Grid | Solid[],
    positionOrEntity: Vec2 | Entity,
    halfOrOffset: Vec2
): Collision {
    if (gridOrSolids instanceof Grid) {
        const grid = gridOrSolids as Grid
        const entity = positionOrEntity as Entity
        if (grid.collideAt(entity, halfOrOffset)) {
            return { collided: true, collider: grid }
        }
    } else {
        const position = positionOrEntity as Vec2
        // Todo: only test for intersection if the solid is within the camera view
        for (const solid of gridOrSolids as Solid[]) {
            if (solid.collidable && solid.intersectPoint(position, halfOrOffset)) {
                return { collided: true, collider: solid }
            }
        }
    }

    return { collided: false, collider: null }
}

export const overlap = function (solid: Solid, actor: Actor): boolean {
    return solid.intersectEntity(actor)
}

/**
 * Approach the target number from a given starting point in max movement steps, without exceeding it.
 */
export const approach = function (val: number, target: number, max: number): number {
    return val > target ? Math.max(val - max, target) : Math.min(val + max, target)
}

export const clearDraw = function (context: CanvasRenderingContext2D) {
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.fillStyle = '#302831'
    context.fillRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT)
}

export const lerp = function (a: number, b: number, amount: number): number {
    amount = Math.max(0, amount)
    amount = Math.min(1, amount)
    return a + (b - a) * amount
}

export const clamp = (v: number, min: number, max: number) => {
    return Math.min(max, Math.max(min, v))
}

export const debug = (s: string) => {
    document.getElementById('debug').textContent = s
}
