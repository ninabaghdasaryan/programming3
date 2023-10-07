var matrix = [];

var side = 20;
var grassArr = [];
let characterCount = 5;
var grassEaterArr = []
var predatorArr = []
var dinosaurArr = []
var monsterArr = []
function setup() {
    MatrixGenerator();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y, 3)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                var dinos = new Dinosaur(x, y, 4)
                dinosaurArr.push(dinos)
            }
            else if (matrix[y][x] == 5) {
                var mons = new Monster(x, y, 5)
                monsterArr.push(mons)
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("black")
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) { 
        grassEaterArr[i].eat(); 
    }
    for (var i in predatorArr) { 
        predatorArr[i].eat(); 
    }
    for (var i in dinosaurArr) { 
        dinosaurArr[i].eat(); 
    }
    for (var i in monsterArr) { 
        monsterArr[i].eat(); 
    }
}

function MatrixGenerator() {
    for (var y = 0; y < side*2; ++y) {
        matrix[y] = [];
        for (var x = 0; x < side*2; ++x) {
            matrix[y][x] = Math.round(random(0, characterCount));
        }
    }
}

