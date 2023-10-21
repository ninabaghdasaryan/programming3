var socket = io()
var side =  20, m = 40, n =40;
var matrix = []


// var matrix = [];

// var side = 20;
// var grassArr = [];
// let characterCount = 5;
// var grassEaterArr = []
// var predatorArr = []
// var dinosaurArr = []
// var monsterArr = []
function setup() {
    
    createCanvas(m * side,n * side);
    background('#acacac');
    frameRate(5);
}


function draw(m) {
matrix = m
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
}

// function MatrixGenerator() {
//     for (var y = 0; y < side*2; ++y) {
//         matrix[y] = [];
//         for (var x = 0; x < side*2; ++x) {
//             matrix[y][x] = Math.round(random(0, characterCount));
//         }
//     }
// }



socket.on('Matrix', (m)=>{
matrix = m
})

socket.on('Matrix', (m)=>{
    draw(m) 
    })