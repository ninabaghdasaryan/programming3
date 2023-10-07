// dinosaur-ը ուտում է predator-ին
class dinosaur {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    mul() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let newp = new dinosaur(newCell[0], newCell[1], this.index);
            dinosaurArr.push(newp);
            matrix[newCell[1]][newCell[0]] = 4;

        }
    }

    move() {
        let emptyCells = this.chooseCell(2);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {
        let grassCells = this.chooseCell(3);
        let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in predatorArr) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1);
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
        for (let i in dinosaurArr) {
            if (this.x == dinosaurArr[i].x && this.y == dinosaurArr[i].y) {
            dinosaurArr.splice(i, 1);
                break;
            }
        }
    }
}