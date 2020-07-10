import Solid from './solid'
import Level from './level'
import { overlap } from './utils'

class JumpThrough extends Solid {
    moveX(amount: number) {
        this.xRemainder += amount
        let move = Math.round(this.xRemainder)

        if (move !== 0) {
            const riding = this.getAllRidingActors()
            const sign = Math.sign(move)
            this.xRemainder -= move

            while(move !== 0) {
                this.position.x += sign

                for (const actor of riding) {
                    actor.moveX(sign, null)
                }
            }

            move -= sign
        }
    }

    moveY(amount: number) {
        this.yRemainder += amount;
        let move = Math.round(this.yRemainder);
    
        if (move !== 0) {
          const riding = this.getAllRidingActors();
          const sign = Math.sign(move);
          this.yRemainder -= move;
          this.collidable = false;
    
          while (move !== 0) {
            this.position.y += sign;
    
            if (move > 0) {
              for (const actor of Level.actors) {
                if (overlap(this, actor)) {
                  // Push top
                  actor.moveY(sign, null);
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveY(sign, null);
                }
              }
            } else {
              for (const actor of Level.actors) {
                if (overlap(this, actor)) {
                  // Push bottom
                  actor.moveY((this.top() + sign) - actor.bottom(), null)
                } else if (riding.includes(actor)) {
                  // Carry
                  actor.moveY(sign, null);
                }
              }
            }
    
            move -= sign;
          }
    
          this.collidable = true;
        }
      }
}

export default JumpThrough