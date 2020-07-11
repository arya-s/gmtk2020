import Actor from './actor'
import LevelManager from './level_manager'
import Vec2 from './vec2'
import { keyboard, JUMP, LEFT, RIGHT, TELEPORT } from './keys'
import { collideAt, approach, lerp, collideOutsideAt } from './utils'
import PlayerSprite from './playersprite'
import Spike, { KillFrom } from './spike'
import Solid from './solid'
import Goal from './goal'
import Death from './death'
import Sound from './sound'
import jumpSoundSrc from '../data/sounds/jump.mp3'
import launchedSoundSrc from '../data/sounds/launched.mp3'
import deathSoundSrc from '../data/sounds/death.mp3'
import footstepSoundSrc from '../data/sounds/footstep.mp3'
import MovingPlatform from './moving_platform'

const MAX_RUN = 90
const RUN_ACCEL = 1000
const RUN_REDUCE = 400
const AIR_MULT = 0.65 // Gives you slightly less control of horizontal motion in the air
const MAX_FALL = 160
const GRAVITY = 900
const HALF_GRAV_THRESHOLD = 40 // Halves gravity at the peak of a jump, if the jump button is held
const FAST_MAX_ACCEL = 300
const JUMP_GRACE_TIME = 0.1 // Time after leaving a ledge when you can still jump
const JUMP_SPEED = -105
const JUMP_H_BOOST = 40 // If left or right is held at the moment of a jump, this horizontal speed boost is applied
const VAR_JUMP_TIME = 0.2 // Time after jumping that you can hold the jump button to continue gaining upward speed
const CEILING_VAR_JUMP_GRACE = 0.05
const WALL_SLIDE_START_MAX = 20
const WALL_SLIDE_TIME = 1.2
const WALL_JUMP_CHECK_DIST = 3
const WALL_JUMP_FORCE_TIME = 0.16
const WALL_JUMP_H_SPEED = MAX_RUN + JUMP_H_BOOST
const WALL_SPEED_RENTENTION_TIME = 0.06
const AUTO_JUMP_TIME = 0.16
const TELEPORT_DISTANCE = 54
const TELEPORT_TIME = 1.5
const JUMP_THROUGH_ASSIST_SPEED = -40
const MOMENTUM_X_CAP = 250
const MOMENTUM_Y_CAP = -130
const LAUNCHED_BOOST_CHECK_SPEED_SQARED = 100 * 100
const LAUNCHED_JUMP_CHECK_SPEED_SQUARED = 220 * 220
const LAUNCHED_MIN_SPEED_SQUARED = 140 * 140
const LAUNCHED_DOUBLE_SPEED_SQUARED = 150 * 150

class Player extends Actor {
    private sprite: PlayerSprite = new PlayerSprite()
    private speed: Vec2 = new Vec2(0, 0)
    private moveDir: number = 0
    public facing: number = 1
    private moveXAmount: number = 0
    private grounded: boolean = false
    private wasGrounded = false
    private forceMoveX: number = 0
    private forceMoveXTimer: number = 0
    private maxFall: number = MAX_FALL
    private jumpGraceTimer: number = JUMP_GRACE_TIME
    private varJumpSpeed: number = 0
    private varJumpTimer: number = VAR_JUMP_TIME
    private wallSlideTimer: number = WALL_SLIDE_TIME
    private wallSlideDir: number = 0
    private wallBoostDir: number = 0
    private wallBoostTimer: number = 0
    private wallSpeedRententionTimer: number = WALL_SPEED_RENTENTION_TIME
    private wallSpeedRetained: number = 0
    private autoJump: boolean = true
    private autoJumpTimer: number = AUTO_JUMP_TIME
    private teleportTimer: number = 0
    private jumpSound = new Sound(jumpSoundSrc)
    private deathSound = new Sound(deathSoundSrc)
    private launchedSound = new Sound(launchedSoundSrc)
    private stepSound = new Sound(footstepSoundSrc)
    public momentumSpeed = new Vec2(0, 0)
    private launched = false

    private queue = []
    private activeFrameInputs = []
    private play = false

    constructor() {
        super(new Vec2(4, 150), new Vec2(4, 6))
        this.onCollideH = this.onCollideH.bind(this)
        this.onCollideV = this.onCollideV.bind(this)

        document.getElementById('replay_button').onclick = () => {
            this.play = true
        }
    }

    momentumBoost() {
        const boost = this.momentumSpeed.clone()
        if (Math.abs(this.momentumSpeed.x) > MOMENTUM_X_CAP) {
            boost.x = MOMENTUM_X_CAP * Math.sign(boost.x)
        }

        if (boost.y > 0) {
            boost.y = 0
        } else if (boost.y < MOMENTUM_Y_CAP) {
            boost.y = MOMENTUM_Y_CAP
        }

        return boost
    }

    launchedBoostCheck() {
        const momentumBoost = this.momentumBoost()
        if (
            momentumBoost.lengthSquared() >= LAUNCHED_BOOST_CHECK_SPEED_SQARED &&
            this.speed.lengthSquared() >= LAUNCHED_JUMP_CHECK_SPEED_SQUARED
        ) {
            this.launched = true
            return true
        } else {
            this.launched = false
            return false
        }
    }

    handleCollisionWith(collider, dir: Vec2) {
        if (collider instanceof Spike) {
            const killFrom = (collider as Spike).killFrom

            if (killFrom === KillFrom.ALL) {
                this.squish()
            } else if (dir.x === 0) {
                if (dir.y === 1 && killFrom === KillFrom.TOP) {
                    this.squish()
                } else if (dir.y === -1 && killFrom === KillFrom.BOTTOM) {
                    this.squish()
                } else {
                    this.squish()
                }
            } else {
                if (dir.x === 1 && killFrom === KillFrom.TOP_BOTTOM_LEFT) {
                    this.squish()
                } else if (dir.x === -1 && killFrom === KillFrom.TOP_BOTTOM_RIGHT) {
                    this.squish()
                }
            }
        } else if (collider instanceof Death) {
            this.squish()
        } else if (collider instanceof Goal) {
            LevelManager.activeLevel.onComplete()
        }
    }

    onCollideH(collider, sign) {
        this.handleCollisionWith(collider, new Vec2(sign, 0))

        if (this.wallSpeedRententionTimer <= 0) {
            this.wallSpeedRetained = this.speed.x
            this.wallSpeedRententionTimer = WALL_SPEED_RENTENTION_TIME
        }

        this.speed.x = 0
    }

    onCollideV(collider, sign) {
        this.handleCollisionWith(collider, new Vec2(0, sign))

        if (this.speed.y < 0) {
            if (this.varJumpTimer < VAR_JUMP_TIME - CEILING_VAR_JUMP_GRACE) {
                this.varJumpTimer = 0
            }
        }

        this.speed.y = 0
    }

    isGrounded(): boolean {
        const down = Vec2.addTwo(this.position, new Vec2(0, 1))
        let collision = collideAt(LevelManager.activeLevel.solids, down, this.half)

        if (!collision.collided) {
            collision = collideOutsideAt(
                LevelManager.activeLevel.jumpThroughs,
                this.position,
                this.half,
                down
            )
        }

        if (!collision.collided) {
            collision = collideAt(LevelManager.activeLevel.grid, this, new Vec2(0, 1))
        }

        return collision.collided
    }

    render(context: CanvasRenderingContext2D) {
        if (this.moveDir !== 0) {
            this.facing = this.moveDir
        }

        const pos = this.position.clone()

        if (this.facing === 1) {
            pos.x = pos.x - this.half.x - 4
        } else {
            pos.x = pos.x - this.half.x
        }

        if (this.isGrounded()) {
            if (
                this.speed.x !== 0 &&
                collideAt(
                    LevelManager.activeLevel.solids,
                    Vec2.addTwo(this.position, new Vec2(this.facing, 0)),
                    this.half
                ).collided
            ) {
                if (this.facing === 1) {
                    this.sprite.play('IdleRight')
                } else {
                    this.sprite.play('IdleLeft')
                }
            } else if (this.speed.x < 0) {
                this.sprite.play('RunLeft')
            } else if (this.speed.x > 0) {
                this.sprite.play('RunRight')
            } else if (this.speed.x === 0) {
                if (this.facing === 1) {
                    this.sprite.play('IdleRight')
                } else {
                    this.sprite.play('IdleLeft')
                }
            }
        } else {
            if (this.wallSlideDir !== 0) {
                if (this.wallSlideDir === 1) {
                    this.sprite.play('WallSlideRight')
                } else {
                    this.sprite.play('WallSlideLeft')
                }
            } else {
                if (this.speed.y < 0) {
                    if (this.facing === 1) {
                        this.sprite.play('JumpRight')
                    } else {
                        this.sprite.play('JumpLeft')
                    }
                } else {
                    if (this.facing === 1) {
                        this.sprite.play('FallRight')
                    } else {
                        this.sprite.play('FallLeft')
                    }
                }
            }
        }

        this.sprite.render(context, this.position, new Vec2(this.half.x, this.half.y - 2))
        // this.drawAABB(context)
    }

    update(dt: number) {
        this.activeFrameInputs = []
        if (this.launchedBoostCheck()) {
            console.log('we launched bois')
        }
        if (this.speed.y >= 0) {
            this.grounded = this.isGrounded()
        } else {
            this.grounded = false
        }

        if (this.wallSlideDir !== 0) {
            this.wallSlideTimer = Math.max(this.wallSlideTimer - dt, 0)
            this.wallSlideDir = 0
        }

        if (this.wallBoostTimer > 0) {
            this.wallBoostTimer -= dt

            if (this.moveXAmount === this.wallBoostDir) {
                this.speed.x = WALL_JUMP_H_SPEED * this.moveXAmount
                this.wallBoostTimer = 0
            }
        }

        if (this.grounded) {
            this.jumpGraceTimer = JUMP_GRACE_TIME
            this.wallSlideTimer = WALL_SLIDE_TIME
            this.autoJump = false
        } else if (this.jumpGraceTimer > 0) {
            this.jumpGraceTimer -= dt
        }

        if (this.varJumpTimer > 0) {
            this.varJumpTimer -= dt
        }

        if (this.autoJumpTimer > 0) {
            if (this.autoJump) {
                this.autoJumpTimer -= dt

                if (this.autoJumpTimer <= 0) {
                    this.autoJump = false
                }
            } else {
                this.autoJumpTimer = 0
            }
        }

        if (this.forceMoveXTimer > 0) {
            this.forceMoveXTimer -= dt
            this.moveXAmount = this.forceMoveX
        } else {
            this.moveXAmount = this.moveDir
        }

        // Retain moving speed if there is no further collision ahead
        if (this.wallSpeedRententionTimer > 0) {
            if (Math.sign(this.speed.x) === -Math.sign(this.wallSpeedRetained)) {
                this.wallSpeedRententionTimer = 0
            } else if (
                !collideAt(
                    LevelManager.activeLevel.solids,
                    Vec2.addTwo(this.position, new Vec2(Math.sign(this.wallSpeedRetained), 0)),
                    this.half
                ).collided
            ) {
                this.speed.x = this.wallSpeedRetained
                this.wallSpeedRententionTimer = 0
            } else {
                this.wallSpeedRententionTimer -= dt
            }
        }

        this.normalUpdate(dt)

        if (
            !this.grounded &&
            this.speed.y <= 0 &&
            collideAt(LevelManager.activeLevel.jumpThroughs, this.position, this.half).collided
        ) {
            this.moveY(JUMP_THROUGH_ASSIST_SPEED * dt, () => {})
        }

        this.moveX(this.speed.x * dt, this.onCollideH)
        this.moveY(this.speed.y * dt, this.onCollideV)

        if (this.play) {
            this.replayInput()
        } else {
            this.recordInput()
        }
        // this.handleInput()
        this.sprite.update(dt)

        this.wasGrounded = this.grounded
        this.momentumSpeed.x = 0
        this.momentumSpeed.y = 0
    }

    normalUpdate(dt: number) {
        //Use momentum boost if we walked off a platform
        const momentumBoost = this.momentumBoost()
        if (momentumBoost.y < 0 && this.wasGrounded && !this.grounded && this.speed.y >= 0) {
            this.speed.y = momentumBoost.y
        }

        const mult = this.grounded ? 1 : AIR_MULT

        // H-movement
        if (Math.abs(this.speed.x) > MAX_RUN && Math.sign(this.speed.x) === this.moveXAmount) {
            this.speed.x = approach(
                this.speed.x,
                MAX_RUN * this.moveXAmount,
                RUN_REDUCE * mult * dt
            )
        } else {
            this.speed.x = approach(this.speed.x, MAX_RUN * this.moveXAmount, RUN_ACCEL * mult * dt)
        }

        // V-movement
        this.maxFall = approach(this.maxFall, MAX_FALL, FAST_MAX_ACCEL * dt)

        if (!this.grounded) {
            let max = this.maxFall

            if (this.moveXAmount === this.facing) {
                const wallPos = new Vec2(this.facing, 0)
                if (
                    (this.speed.y >= 0 &&
                        this.wallSlideTimer > 0 &&
                        collideAt(
                            LevelManager.activeLevel.solids,
                            Vec2.addTwo(this.position, wallPos),
                            this.half
                        ).collided) ||
                    collideAt(LevelManager.activeLevel.grid, this, wallPos).collided
                ) {
                    this.wallSlideDir = this.facing
                }

                if (this.wallSlideDir !== 0) {
                    max = lerp(
                        MAX_FALL,
                        WALL_SLIDE_START_MAX,
                        this.wallSlideTimer / WALL_SLIDE_TIME
                    )

                    if (this.wallSlideTimer / WALL_SLIDE_TIME > 0.65) {
                        // spawn wall sliding particles here
                    }
                }
            }

            const mult =
                Math.abs(this.speed.y) < HALF_GRAV_THRESHOLD &&
                (keyboard.check(JUMP) || this.autoJump)
                    ? 0.5
                    : 1

            this.speed.y = approach(this.speed.y, max, GRAVITY * mult * dt)
        }

        if (this.varJumpTimer > 0) {
            if (this.autoJump && !keyboard.check(JUMP)) {
                console.log('auto jumping')
            }
            if (this.autoJump || keyboard.check(JUMP)) {
                this.speed.y = Math.min(this.speed.y, this.varJumpSpeed)
            } else {
                this.varJumpTimer = 0
            }
        }

        if (this.teleportTimer > 0) {
            this.teleportTimer -= dt
        }
    }

    jump() {
        this.varJumpTimer = VAR_JUMP_TIME
        this.autoJumpTimer = AUTO_JUMP_TIME
        this.jumpGraceTimer = 0
        this.autoJump = false
        this.speed.x += JUMP_H_BOOST * this.moveXAmount
        this.speed.y = JUMP_SPEED
        this.speed = Vec2.addTwo(this.speed, this.momentumBoost())
        this.launchedBoostCheck()

        if (this.launched) {
            this.launchedSound.play()
        } else {
            this.jumpSound.play()
        }

        this.varJumpSpeed = this.speed.y
        this.wallSlideTimer = WALL_SLIDE_TIME
        this.wallBoostTimer = 0
    }

    wallJumpCheck(dir: number) {
        const wallDist = new Vec2(dir * WALL_JUMP_CHECK_DIST, 0)
        return (
            collideAt(
                LevelManager.activeLevel.solids,
                Vec2.addTwo(this.position, wallDist),
                this.half
            ).collided || collideAt(LevelManager.activeLevel.grid, this, wallDist).collided
        )
    }

    wallJump(dir: number) {
        this.jumpGraceTimer = 0
        this.varJumpTimer = VAR_JUMP_TIME
        this.wallSlideTimer = WALL_SLIDE_TIME
        this.wallBoostTimer = 0
        this.autoJump = false

        if (this.moveXAmount !== 0) {
            this.forceMoveX = dir
            this.forceMoveXTimer = WALL_JUMP_FORCE_TIME
        }

        // in Celeste's player class dir is not supplied but that means the check only works to the right hand side.
        // we multiply by -1 because the direction passed into walljump is the opposite of what the player is facing.
        // so we are reverting this and check again
        const wallDist = new Vec2(dir * -1 * WALL_JUMP_CHECK_DIST, 0)
        //Get momentum of the wall we jumped off of
        if (this.momentumSpeed.x === 0 && this.momentumSpeed.y === 0) {
            const wall = collideAt(
                LevelManager.activeLevel.solids,
                Vec2.addTwo(this.position, wallDist),
                this.half
            ).collider as Solid

            if (wall !== null) {
                this.momentumSpeed = wall.speed.clone()
            }
        }

        this.speed.x = WALL_JUMP_H_SPEED * dir
        this.speed.y = JUMP_SPEED
        this.speed = Vec2.addTwo(this.speed, this.momentumBoost())

        this.launchedBoostCheck()

        if (this.launched) {
            this.launchedSound.play()
        } else {
            this.jumpSound.play()
        }

        this.varJumpSpeed = this.speed.y
    }

    recordInput() {
        keyboard.update()

        if (keyboard.pressed(LEFT)) {
            this.activeFrameInputs.push('pressed_left')
        } else if (keyboard.released(LEFT)) {
            this.activeFrameInputs.push('released_left')
            if (keyboard.check(RIGHT)) {
                this.activeFrameInputs.push('check_right')
            } else {
                this.activeFrameInputs.push('check_left')
            }
        }

        if (keyboard.pressed(RIGHT)) {
            this.activeFrameInputs.push('pressed_right')
        } else if (keyboard.released(RIGHT)) {
            this.activeFrameInputs.push('released_right')
            if (keyboard.check(LEFT)) {
                this.activeFrameInputs.push('check_left')
            } else {
                this.activeFrameInputs.push('check_right')
            }
        }

        if (keyboard.check(LEFT) || keyboard.check(RIGHT)) {
            this.stepSound.play()
        }

        if (keyboard.pressed(JUMP)) {
            this.activeFrameInputs.push('pressed_jump')
        }

        this.queue.push(this.activeFrameInputs)
    }

    replayInput() {
        const frame = this.queue.shift()

        if (!frame) {
            return
        }

        let action = frame.shift()
        if (action === 'pressed_left') {
            this.moveDir = -1
        } else if (action === 'released_left') {
            action = frame.shift()
            if (action === 'check_right') {
                this.moveDir = 1
            } else if (action === 'check_left') {
                this.moveDir = 0
            }
        }

        if (action === 'pressed_right') {
            this.moveDir = 1
        } else if (action === 'released_right') {
            action = frame.shift()
            if (action === 'check_left') {
                this.moveDir = -1
            } else if (action === 'check_right') {
                this.moveDir = 0
            }
        }

        if (action === 'pressed_jump') {
            if (this.jumpGraceTimer > 0) {
                this.jump()
            } else {
                if (this.wallJumpCheck(1)) {
                    this.wallJump(-1)
                } else if (this.wallJumpCheck(-1)) {
                    this.wallJump(1)
                }
            }
        }
    }

    // handleInput() {
    //     keyboard.update()

    //     if (keyboard.pressed(LEFT)) {
    //         this.moveDir = -1
    //     } else if (keyboard.released(LEFT)) {
    //         if (keyboard.check(RIGHT)) {
    //             this.moveDir = 1
    //         } else {
    //             this.moveDir = 0
    //         }
    //     }

    //     if (keyboard.pressed(RIGHT)) {
    //         this.moveDir = 1
    //     } else if (keyboard.released(RIGHT)) {
    //         if (keyboard.check(LEFT)) {
    //             this.moveDir = -1
    //         } else {
    //             this.moveDir = 0
    //         }
    //     }

    //     if (keyboard.pressed(JUMP)) {
    //         if (this.jumpGraceTimer > 0) {
    //             this.jump()
    //         } else {
    //             if (this.wallJumpCheck(1)) {
    //                 this.wallJump(-1)
    //             } else if (this.wallJumpCheck(-1)) {
    //                 this.wallJump(1)
    //             }
    //         }
    //     }

    //     if (keyboard.pressed(TELEPORT)) {
    //         this.teleport()
    //     }
    // }

    squish() {
        this.deathSound.play()
        LevelManager.reload()
    }
}

export default Player
