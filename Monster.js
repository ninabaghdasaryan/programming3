// monster-ը ուտում է dinosaur-ին
var LivingCreature = require('./livingCreature')
let random = require("./random");
module.exports = class Monster extends LivingCreature{
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
            let newm = new Monster(newCell[0], newCell[1], this.index);
            monsterArr.push(newm);
            matrix[newCell[1]][newCell[0]] = 5;

        }
    }

    move() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {
        let dinosaurCells = this.chooseCell(4);
        let newCell = random(dinosaurCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in dinosaurArr) {
                if (dinosaurArr[i].x == newX && dinosaurArr[i].y == newY) {
                    dinosaurArr.splice(i, 1);
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
        for (let i in monsterArr) {
            if (this.x == monsterArr[i].x && this.y == monsterArr[i].y) {
                monsterArr.splice(i, 1);
                break;
            }
        }
    }
}