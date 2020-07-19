const PREVENT_DEFAULT_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space']
const AXIS_DEADZONE = 0.3
import { clamp } from './utils'

export const enum InputRumble {
    LEFT,
    RIGHT,
    BOTH,
}

class Keyboard {
    private previous: { [key: string]: boolean } = {}
    private current: { [key: string]: boolean } = {}
    private next: { [key: string]: boolean } = {}
    private gamepads: { [key: number]: Gamepad } = {}

    constructor() {
        window.addEventListener(
            'keydown',
            (event) => {
                const key = event.code
                if (PREVENT_DEFAULT_KEYS.includes(key)) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                this.next[key] = true
            },
            false
        )

        window.addEventListener(
            'keyup',
            (event) => {
                const key = event.code
                if (PREVENT_DEFAULT_KEYS.includes(key)) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                this.next[key] = false
            },
            false
        )

        const handleGamepad = (event: GamepadEvent, connecting: boolean) => {
            const gamepad = event.gamepad

            if (connecting) {
                this.gamepads[gamepad.index] = gamepad
            } else {
                delete this.gamepads[gamepad.index]
            }
        }

        window.addEventListener('gamepadconnected', (event: GamepadEvent) =>
            handleGamepad(event, true)
        )
        window.addEventListener('gamepaddiscconnected', (event: GamepadEvent) =>
            handleGamepad(event, false)
        )
    }

    rumble(side: InputRumble, rumbleDurationMs: number, startDelay = 0) {
        // we don't allow rumbling more than 1s
        const duration = clamp(rumbleDurationMs, 0, 1000)

        const weakMagnitude = side === InputRumble.LEFT || InputRumble.BOTH ? 1 : 0
        const strongMagnitude = side === InputRumble.RIGHT || InputRumble.BOTH ? 1 : 0

        for (const gamepad of navigator.getGamepads()) {
            if (gamepad) {
                gamepad.vibrationActuator.playEffect('dual-rumble', {
                    startDelay,
                    duration,
                    weakMagnitude,
                    strongMagnitude,
                })
            }
        }
    }

    updateGamepads() {
        for (const gamepad of navigator.getGamepads()) {
            if (gamepad) {
                this.gamepads[gamepad.index] = gamepad

                for (let buttonIdx = 0; buttonIdx < gamepad.buttons.length; buttonIdx++) {
                    const button = gamepad.buttons[buttonIdx]
                    this.next[`B${buttonIdx}`] = button.pressed
                }

                const X_AXIS = gamepad.axes[0]
                const Y_AXIS = gamepad.axes[1]
                const X_SEC_AXIS = gamepad.axes[2]
                const Y_SEC_AXIS = gamepad.axes[3]

                if (X_AXIS > AXIS_DEADZONE) {
                    this.next['A0_POS'] = true
                    this.next['A0_NEG'] = false
                } else if (X_AXIS < -AXIS_DEADZONE) {
                    this.next['A0_POS'] = false
                    this.next['A0_NEG'] = true
                } else {
                    this.next['A0_POS'] = false
                    this.next['A0_NEG'] = false
                }

                if (Y_AXIS > AXIS_DEADZONE) {
                    this.next['A1_POS'] = true
                    this.next['A1_NEG'] = false
                } else if (Y_AXIS < -AXIS_DEADZONE) {
                    this.next['A1_POS'] = false
                    this.next['A1_NEG'] = true
                } else {
                    this.next['A1_POS'] = false
                    this.next['A1_NEG'] = false
                }

                if (X_SEC_AXIS > AXIS_DEADZONE) {
                    this.next['A2_POS'] = true
                    this.next['A2_NEG'] = false
                } else if (X_SEC_AXIS < -AXIS_DEADZONE) {
                    this.next['A2_POS'] = false
                    this.next['A2_NEG'] = true
                } else {
                    this.next['A2_POS'] = false
                    this.next['A2_NEG'] = false
                }

                if (Y_SEC_AXIS > AXIS_DEADZONE) {
                    this.next['A3_POS'] = true
                    this.next['A3_NEG'] = false
                } else if (Y_SEC_AXIS < -AXIS_DEADZONE) {
                    this.next['A3_POS'] = false
                    this.next['A3_NEG'] = true
                } else {
                    this.next['A3_POS'] = false
                    this.next['A3_NEG'] = false
                }
            }
        }
    }

    update() {
        this.updateGamepads()
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
export const JUMP = new Key('jump', 'Space', 'B0', 'B1')
export const UP = new Key('up', 'KeyW', 'ArrowUp', 'B12', 'A1_NEG')
export const DOWN = new Key('down', 'KeyS', 'ArrowDown', 'B13', 'A1_POS')
export const LEFT = new Key('left', 'KeyA', 'ArrowLeft', 'B14', 'A0_NEG')
export const RIGHT = new Key('right', 'KeyD', 'ArrowRight', 'B15', 'A0_POS')
export const GRAB = new Key('grab', 'KeyZ', 'KeyY', 'KeyC', 'KeyX', 'B5', 'B2', 'B4')
