class Keyboard {
    private previous: { [key: string]: boolean } = {}
    private current: { [key: string]: boolean } = {}
    private next: { [key: string]: boolean } = {}

    constructor() {
        window.addEventListener('keydown', (event) => {
            this.next[event.code] = true
        })

        window.addEventListener('keyup', (event) => {
            this.next[event.code] = false
        })
    }

    update() {
        for (const key of Object.keys(this.next)) {
            this.previous[key] = this.current[key]
            this.current[key] = this.next[key]
        }
    }

    check(key: Key) {
        for (const code of key.codes) {
            if (this.current[code]) {
                return true
            }
        }

        return false
    }

    pressed(key: Key) {
        for (const code of key.codes) {
            if (this.current[code] && !this.previous[code]) {
                return true
            }
        }

        return false
    }

    released(key: Key) {
        for (const code of key.codes) {
            if (!this.current[code] && this.previous[code]) {
                return true
            }
        }

        return false
    }
}

class Key {
    public name: string
    public codes: Array<string> = []

    constructor(name, ...codes) {
        this.name = name
        this.codes = codes
    }
}

export const keyboard = new Keyboard()
export const JUMP = new Key('jump', 'Space', 'KeyC')
export const LEFT = new Key('left', 'KeyA', 'ArrowLeft')
export const RIGHT = new Key('right', 'KeyD', 'ArrowRight')
export const TELEPORT = new Key('teleport', 'KeyX')
