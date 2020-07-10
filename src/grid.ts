import Vec2 from './vec2'
import Entity from './entity'

export enum GridCell {
    Empty = '0',
    Blocking = '1',
}

class Grid {
    public grid: GridCell[][] = [[]]
    public collisionGrid: {} = {}
    public cellSize: Vec2
    public width: number
    public height: number
    public loaded = false
    public context: CanvasRenderingContext2D

    init({ grid, gridCellWidth, gridCellHeight, gridCellsX, gridCellsY }) {
        this.cellSize = new Vec2(gridCellWidth, gridCellHeight)
        this.width = gridCellsX
        this.height = gridCellsY
        this.grid = Array(this.height)
            .fill(GridCell.Empty)
            .map(() => Array(this.width).fill(GridCell.Empty))

        let x = 0
        let y = 0
        for (const gridCell of grid) {
            this.set(x, y, gridCell)
            x++
            if (x >= this.width) {
                x = 0
                y++
            }
        }

        this.loaded = true
    }

    get(column: number, row: number): GridCell
    get(pos: Vec2): GridCell
    get(columnOrPos: number | Vec2, row?: number) {
        let x: number
        let y: number

        if (typeof columnOrPos === 'number' && typeof row === 'number') {
            x = columnOrPos
            y = row
        } else {
            x = (columnOrPos as Vec2).x
            y = (columnOrPos as Vec2).y
        }

        if (x < 0 || x > this.width - 1) {
            throw new Error(`column ${x} out of bounds: ${this.width}`)
        }

        if (y < 0 || y > this.height - 1) {
            throw new Error(`row ${y} out of bounds: ${this.height}`)
        }

        return this.grid[y][x]
    }

    set(column: number, row: number, gridCell: GridCell): void
    set(pos: Vec2, gridCell: GridCell): void
    set(columnOrPos: number | Vec2, rowOrGridCell: number | GridCell, gridCell?: GridCell) {
        let x: number
        let y: number
        let value: GridCell

        if (typeof columnOrPos === 'number' && typeof rowOrGridCell === 'number') {
            x = columnOrPos
            y = rowOrGridCell
            value = gridCell
        } else {
            x = (columnOrPos as Vec2).x
            y = (columnOrPos as Vec2).y
            value = rowOrGridCell as GridCell
        }

        if (x < 0 || x > this.width - 1) {
            throw new Error(`column ${x} out of bounds: ${this.width}`)
        }

        if (y < 0 || y > this.height - 1) {
            throw new Error(`row ${y} out of bounds: ${this.height}`)
        }

        this.grid[y][x] = value
    }

    isInBounds(pos: Vec2) {
        return pos.x >= 0 && pos.x < this.width && pos.y >= 0 && pos.y < this.height
    }

    collideAt(entity: Entity, offset: Vec2): boolean
    collideAt(pos: Vec2): boolean
    collideAt(posOrEntity: Vec2 | Entity, offset?: Vec2) {
        if (posOrEntity instanceof Vec2) {
            const pos = posOrEntity as Vec2
            const gridPos = new Vec2(
                Math.round(pos.x / this.cellSize.x),
                Math.round(pos.y / this.cellSize.y)
            )
            return this.isInBounds(gridPos) && this.get(gridPos) !== GridCell.Empty
        } else {
            const entity = posOrEntity as Entity
            const gridPosFrom = new Vec2(
                Math.floor((entity.left() + offset.x) / this.cellSize.x),
                Math.floor((entity.top() + offset.y) / this.cellSize.y)
            )
            const gridPosTo = new Vec2(
                Math.ceil((entity.right() + offset.x) / this.cellSize.x),
                Math.ceil((entity.bottom() + offset.y) / this.cellSize.y)
            )

            this.collisionGrid = {}
            for (let y = gridPosFrom.y; y < gridPosTo.y; y++) {
                for (let x = gridPosFrom.x; x < gridPosTo.x; x++) {
                    const gridPos = new Vec2(x, y)
                    this.collisionGrid[`${x}:${y}`] = true

                    if (this.isInBounds(gridPos) && this.get(gridPos) !== GridCell.Empty) {
                        return true
                    }
                }
            }

            return false
        }
    }

    renderCell(context: CanvasRenderingContext2D, pos: Vec2) {
        context.beginPath()
        context.moveTo(pos.x, pos.y)
        context.lineTo(pos.x + this.cellSize.x, pos.y)
        context.lineTo(pos.x + this.cellSize.x, pos.y + this.cellSize.y)
        context.lineTo(pos.x, pos.y + this.cellSize.y)
        context.lineTo(pos.x, pos.y)
        context.closePath()
        context.stroke()
    }

    render(context: CanvasRenderingContext2D, color = '#cacaca') {
        if (this.context === undefined) {
            this.context = context
        }

        if (!this.loaded) {
            return
        }

        context.lineWidth = 1
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const pos = new Vec2(x * this.cellSize.x, y * this.cellSize.y)
                if (this.get(x, y) !== GridCell.Empty) {
                    context.strokeStyle = '#f00'
                    this.renderCell(context, pos)
                }

                if (this.collisionGrid[`${x}:${y}`]) {
                    context.strokeStyle = '#0f0'
                    this.renderCell(context, pos)
                }
            }
        }
    }
}

export default Grid
