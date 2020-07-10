class Tile {
    public sx: number
    public sy: number
    public sWidth: number
    public sHeight: number
    public dx: number
    public dy: number
    public dWidth: number
    public dHeight: number

    constructor(
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ) {
        this.sx = sx
        this.sy = sy
        this.sWidth = sWidth
        this.sHeight = sHeight
        this.dx = dx
        this.dy = dy
        this.dWidth = dWidth
        this.dHeight = dHeight
    }

    draw(context: CanvasRenderingContext2D, tileset: CanvasImageSource) {
        context.drawImage(
            tileset,
            this.sx,
            this.sy,
            this.sWidth,
            this.sHeight,
            this.dx,
            this.dy,
            this.dWidth,
            this.dHeight
        )
    }
}

export default Tile
