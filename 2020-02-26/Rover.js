class Rover {
    constructor(){
        this.x = 0
        this.y = 0
        this.direction = "N"
        this.cardinalPoints = ['N', 'E', 'S', 'W']
    }
    getPosition(){
        return `${this.x}:${this.y}:${this.direction}`
    }

    turnLeft(){
        let currentDirectionIndex = this.cardinalPoints.indexOf(this.direction)
        let newDirectionIndex = currentDirectionIndex - 1
        if(newDirectionIndex === -1) {
            newDirectionIndex = 3
        }
        const newDirection = this.cardinalPoints[newDirectionIndex]
        this.direction = newDirection
    }
    turnRight(){
        let currentDirectionIndex = this.cardinalPoints.indexOf(this.direction)
        let newDirectionIndex = currentDirectionIndex + 1
        if(newDirectionIndex === 4) {
            newDirectionIndex = 0
        }
        const newDirection = this.cardinalPoints[newDirectionIndex]
        this.direction = newDirection
    }
    move(commands){
        for(let command of commands) {
            if(command === 'M') {
                this.y = 1
            } else if(command === "L") {
                this.turnLeft()
            } else if(command == 'R') {
                this.turnRight()
            }
        }
    }
}
module.exports=Rover