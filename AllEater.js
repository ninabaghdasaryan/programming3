var LivingCreature = require('./livingCreature')
let random = require("./random");
module.exports = class AllEater extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 3;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)

    }

    mul() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let newm = new AllEater(newCell[0], newCell[1], this.index);
            alleaterArr.push(newm);
            matrix[newCell[1]][newCell[0]] = 6;

        }
    }

    move() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {
        let monsterCells = this.chooseCell(5);
        let newCell = random(monsterCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in monsterArr) {
                if (monsterArr[i].x == newX && monsterArr[i].y == newY) {
                    monsterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 9) {
                this.mul();
            }
        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in alleaterArr) {
            if (this.x == alleaterArr[i].x && this.y == alleaterArr[i].y) {
                alleaterArr.splice(i, 1);
                break;
            }
        }
    }
}