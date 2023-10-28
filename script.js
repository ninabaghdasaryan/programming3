var socket = io()
var side =  20, m = 40, n =40;
var matrix = []

// let button = document.getElementById("button")
// button.addEventListener("click", changeColor)

function changeColor(){
    if (colors.green === "green"){
        colors = {
        green: "grey",
        yellow: "white",
        black: "pink",
        red: "blue",
        blue: "yellow",
        pink: "purple",

    }
}
else if (colors.green === "white"){
    colors = {
        green: "green",
        yellow: "yellow",
        black: "black",
        red: "red",
        blue: "blue",
        pink: "pink", 
    }
}
}

let color = {
    green: "grey",
    yellow: "white",
    black: "pink",
    red: "blue",
    blue: "yellow",
    pink: "purple", 
}





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
                fill(color.green);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(color.yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(color.black)
            }
            else if (matrix[y][x] == 4) {
                fill(color.red)
            }
            else if (matrix[y][x] == 5) {
                fill(color.blue)
            }
            else if (matrix[y][x] == 6) {
                fill(color.pink)
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