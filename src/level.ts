import Actor from './actor'
import Grid from './grid'
import Solid from './solid'
import BlockingWall from './blocking_wall'
import Death from './death'
import Tile from './tile'
import Player from './player'
import Camera from './camera'
import Goal from './goal'
import Vec2 from './vec2'
import MovingPlatform from './moving_platform'
import Spike, { KillFrom } from './spike'
import JumpThrough from './jump_through'
import { debug, CONSTANTS } from './utils'
import WaterfallBottom from './waterfall_bottom'
import SmallTorch from './small_torch'
import tilesetSprite from '../data/tileset.png'
import level_manager from './level_manager'
import levelManager from './level_manager'
import Enemy from './enemy'

interface TileLayers {
    front?: Tile[]
    middle?: Tile[]
    back?: Tile[]
}

interface EntityLayers {
    entity_front?: any[]
    entity_middle?: any[]
    entity_back?: any[]
}

const DESPAWN_TIMER = 5
const REMOVE_TIMER = 4

class Level {
    public camera = new Camera()
    public player: Player
    public actors: Array<Actor>
    public grid: Grid = new Grid()
    public solids: Array<Solid>
    public jumpThroughs: JumpThrough[]
    public decals: any[]
    public tileLayers: TileLayers
    public entityLayers: EntityLayers
    public loaded: boolean = false
    public levelWidth: number
    public levelHeight: number
    public gridCellWidth: number
    public gridCellHeight: number
    private tileset: HTMLImageElement = new Image()
    private respawnPoint: Vec2
    private nextLevel: string
    private blockingWalls: Array<BlockingWall> = []

    private despawnTimer = 0
    private removeTimer = REMOVE_TIMER
    public wallToRemove = null
    public startRemoveTimer = false

    public enemy = new Enemy(new Vec2(0, 0)))

    constructor(player?: Player) {
        if (player !== undefined) {
            this.player = player
        } else {
            this.player = new Player()
        }

        this.respawnPoint = new Vec2(this.player.position.x + 5, 20)
        this.camera.setTarget(this.player)
        this.actors = []
        this.solids = []
        this.jumpThroughs = []
        this.decals = []
        this.tileLayers = {}
        this.entityLayers = {}

        this.tileset.src = tilesetSprite
        this.tileset.addEventListener('load', () => {
            this.loaded = true
        })
    }

    clear() {
        this.solids = []
        this.jumpThroughs = []
        this.decals = []
        this.tileLayers = {}
        this.createBounds()
    }

    createBounds() {
        // Bounds
        this.addSolid(new Solid(new Vec2(this.levelWidth / 2, 0), new Vec2(this.levelWidth / 2, 0))) // TOP
        this.addSolid(
            new Solid(
                new Vec2(this.levelWidth - 1, this.levelHeight / 2),
                new Vec2(0, this.levelHeight / 2)
            )
        ) // RIGHT
        this.addSolid(
            new Solid(
                new Vec2(this.levelWidth / 2, this.levelHeight - 1),
                new Vec2(this.levelWidth / 2, 0)
            )
        ) // BOTTOM
        this.addSolid(
            new Solid(new Vec2(0, this.levelHeight / 2), new Vec2(0, this.levelHeight / 2))
        ) // LEFT
    }

    createTiles(layer, tiles) {
        const { data, gridCellsX, gridCellsY } = tiles

        const tileLayer = []

        for (let row = 0; row < gridCellsY; row++) {
            for (let col = 0; col < gridCellsX; col++) {
                let tile = data[gridCellsX * row + col]

                if (tile === -1) {
                    continue
                }

                const sx = tile % 16
                const sy = Math.floor(tile / 16)

                const half = new Vec2(this.gridCellWidth / 2, this.gridCellHeight / 2)
                const pos = new Vec2(
                    col * this.gridCellWidth + half.x,
                    row * this.gridCellHeight + half.y
                )

                tileLayer.push(
                    new Tile(
                        sx * this.gridCellWidth,
                        sy * this.gridCellHeight,
                        this.gridCellWidth,
                        this.gridCellHeight,
                        pos.x - half.x + 0.5,
                        pos.y - half.y + 0.5,
                        this.gridCellWidth,
                        this.gridCellHeight
                    )
                )
            }
        }

        this.tileLayers[layer] = tileLayer
    }

    createGrid(gridData) {
        this.grid.init(gridData)
    }

    createEntities(layer, entities) {
        const { gridCellWidth, gridCellHeight } = entities

        const decalLayer = []

        for (const entity of entities.entities) {
            const { x, y, width, height, originX, originY, values, name } = entity

            const half = new Vec2(width / 2, height / 2)
            const pos = new Vec2(x + half.x - originX, y + half.y - originY)

            switch (name) {
                case 'blocking_wall':
                    const wall = new BlockingWall(pos, half)
                    this.solids.push(wall)
                    this.blockingWalls.push(wall)
                    break
                case 'jump_through':
                    this.jumpThroughs.push(new JumpThrough(pos, half))
                    break
                case 'moving_platform':
                    const {
                        move_by_x,
                        move_by_y,
                        forward_move_time,
                        backwards_move_time,
                        rest_time,
                    } = values
                    this.solids.push(
                        new MovingPlatform(
                            pos,
                            half,
                            new Vec2(move_by_x, move_by_y),
                            forward_move_time,
                            backwards_move_time,
                            rest_time
                        )
                    )
                    break
                case 'spikes':
                    this.solids.push(new Spike(pos, half, KillFrom.TOP))
                    break
                case 'spikes_top':
                    this.solids.push(new Spike(pos, half, KillFrom.BOTTOM))
                    break
                case 'spikes_bottom':
                    this.solids.push(new Spike(pos, half, KillFrom.TOP))
                    break
                case 'spikes_left':
                    this.solids.push(new Spike(pos, half, KillFrom.TOP_BOTTOM_RIGHT))
                    break
                case 'spikes_right':
                    this.solids.push(new Spike(pos, half, KillFrom.TOP_BOTTOM_LEFT))
                    break
                case 'spikes_all':
                    this.solids.push(new Spike(pos, half, KillFrom.ALL))
                    break
                case 'death':
                    this.solids.push(new Death(pos, half))
                    break
                case 'goal':
                    const { next } = values
                    this.nextLevel = next
                    this.solids.push(new Goal(pos, half))
                    break
                case 'waterfall_bottom':
                    decalLayer.push(
                        new WaterfallBottom(
                            new Vec2(x + this.gridCellWidth, y + this.gridCellHeight * 3)
                        )
                    )
                    break
                case 'small_torch':
                    decalLayer.push(new SmallTorch(new Vec2(x + 16, y + 24)))
                    break
                case 'respawn':
                    this.respawnPoint = new Vec2(x, y)
                    break
                case 'enemy':
                    this.enemy.pos.x = x
                    this.enemy.pos.y = y
                    break

                default:
                    break
            }
        }

        if (layer) {
            this.entityLayers[layer] = decalLayer
        }
    }

    draw(context) {
        if (!this.loaded) {
            return
        }

        for (const tile of this.tileLayers.back) {
            if (
                tile.dx >= this.camera.position.x - 8 &&
                tile.dx <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                tile.dy >= this.camera.position.y - 8 &&
                tile.dy <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                tile.draw(context, this.tileset)
            }
        }

        for (const decal of this.entityLayers.entity_back) {
            if (
                decal.pos.x >= this.camera.position.x - 8 &&
                decal.pos.x <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                decal.pos.y >= this.camera.position.y - 8 &&
                decal.pos.y <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                decal.render(context)
            }
        }

        for (const tile of this.tileLayers.middle) {
            if (
                tile.dx >= this.camera.position.x - 8 &&
                tile.dx <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                tile.dy >= this.camera.position.y - 8 &&
                tile.dy <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                tile.draw(context, this.tileset)
            }
        }

        for (const decal of this.entityLayers.entity_middle) {
            if (
                decal.pos.x >= this.camera.position.x - 8 &&
                decal.pos.x <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                decal.pos.y >= this.camera.position.y - 8 &&
                decal.pos.y <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                decal.render(context)
            }
        }

        this.player.render(context)
        // this.player.drawAABB(context)

        for (const tile of this.tileLayers.front) {
            if (
                tile.dx >= this.camera.position.x - 8 &&
                tile.dx <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                tile.dy >= this.camera.position.y - 8 &&
                tile.dy <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                tile.draw(context, this.tileset)
            }
        }

        for (const decal of this.entityLayers.entity_front) {
            if (
                decal.pos.x >= this.camera.position.x - 8 &&
                decal.pos.x <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                decal.pos.y >= this.camera.position.y - 8 &&
                decal.pos.y <= this.camera.position.y + CONSTANTS.HEIGHT + 8
            ) {
                decal.render(context)
            }
        }

        for (const solid of this.solids) {
            if (solid instanceof MovingPlatform) {
                ;(solid as MovingPlatform).render(context)
            } else if (solid instanceof BlockingWall) {
                ;(solid as BlockingWall).render(context)
            }
        }

        this.grid.render(context)
        this.enemy.render(context)
    }

    onComplete(player: Player) {
        if (this.nextLevel) {
            level_manager.initLevel(this.nextLevel, player)
        }
    }

    load(level) {
        console.log('Loaded level', level)
        this.levelWidth = level.width
        this.levelHeight = level.height
        this.gridCellWidth = level.layers[0].gridCellWidth
        this.gridCellHeight = level.layers[1].gridCellWidth

        this.createBounds()
        this.createGrid(level.layers.find((layer) => layer.name === 'grid'))
        this.createEntities(
            null,
            level.layers.find((layer) => layer.name === 'entities')
        )
        this.createEntities(
            'entity_back',
            level.layers.find((layer) => layer.name === 'entity_back')
        )
        this.createTiles(
            'back',
            level.layers.find((layer) => layer.name === 'back')
        )
        this.createEntities(
            'entity_middle',
            level.layers.find((layer) => layer.name === 'entity_middle')
        )
        this.createTiles(
            'middle',
            level.layers.find((layer) => layer.name === 'middle')
        )
        this.createEntities(
            'entity_front',
            level.layers.find((layer) => layer.name === 'entity_front')
        )
        this.createTiles(
            'front',
            level.layers.find((layer) => layer.name === 'front')
        )

        this.addPlayer(this.player)
    }

    addPlayer(player: Player) {
        this.actors.push(player)
        this.player = player
        this.player.position = new Vec2(
            this.respawnPoint.x - this.player.half.x,
            this.respawnPoint.y
        )
    }

    addActor(actor: Actor) {
        this.actors.push(actor)
    }

    addSolid(solid: Solid) {
        this.solids.push(solid)
    }

    render(context: CanvasRenderingContext2D) {
        this.camera.render(context)
        this.draw(context)
    }

    update(dt: number) {
        if (this.despawnTimer <= 0) {
            const randomWallIdx = Math.floor(Math.random() * this.blockingWalls.length)
            const wallToRemove = this.blockingWalls[randomWallIdx]
            if (wallToRemove !== null && wallToRemove !== undefined) {
                wallToRemove.color = '#ff0000'
                wallToRemove.removing = true
                this.wallToRemove = wallToRemove
                this.enemy.spawnAt(new Vec2(wallToRemove.position.x, wallToRemove.top() - 5), wallToRemove)
            }
            this.despawnTimer = DESPAWN_TIMER
            this.removeTimer = REMOVE_TIMER
            this.startRemoveTimer = true
        } else {
            this.despawnTimer -= dt
        }

        if (this.startRemoveTimer) {
            if (this.removeTimer <= 0) {
                if (this.wallToRemove !== null && this.wallToRemove !== undefined) {
                    const solidIdx = this.solids.findIndex((v) => v.id === this.wallToRemove.id)
                    const wallIdx = this.blockingWalls.findIndex(
                        (v) => v.id === this.wallToRemove.id
                    )

                    this.wallToRemove.color = '#ffff00'

                    if (solidIdx !== -1 && wallIdx !== -1) {
                        this.solids.splice(solidIdx, 1)
                        this.blockingWalls.splice(wallIdx, 1)
                    }
                    this.startRemoveTimer = false
                }
            } else {
                this.removeTimer -= dt
            }
        }

        for (const actor of this.actors) {
            actor.update(dt)
        }

        for (const solid of this.solids) {
            solid.update(dt)
        }

        for (const [layer, decals] of Object.entries(this.entityLayers)) {
            for (const decal of decals) {
                if (
                    decal.pos.x >= this.camera.position.x - 8 &&
                    decal.pos.x <= this.camera.position.x + CONSTANTS.WIDTH + 8 &&
                    decal.pos.y >= this.camera.position.y - 8 &&
                    decal.pos.y <= this.camera.position.y + CONSTANTS.HEIGHT + 8
                ) {
                    decal.update(dt)
                }
            }
        }

        this.camera.update(dt)
        this.enemy.update(dt)
    }

    spawnPlayer() {
        this.player.position = new Vec2(
            this.respawnPoint.x - this.player.half.x,
            this.respawnPoint.y
        )
    }
}

export default Level
