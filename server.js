let random = require('./random')

var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

matrix = [];

sideX = 20;
sideY = 20;

side = 20;
grassArr = [];
characterCount = 5;
grassEaterArr = []
predatorArr = []
dinosaurArr = []
monsterArr = []
alleaterArr = []


var Grass = require('./grass')
var Dinosaur = require('./dinosaur')
var GrassEater = require('./grasseater')
var Monster = require('./monster')
var Predator = require('./predator')
var AllEater = require('./AllEater')

function createMatrix() {


    for (let i = 0; i < sideX; i++) {
        matrix.push([])
        for (let j = 0; j < sideY; j++) {
            matrix[i].push(0)
        }
    }

    function character(char, qantity) {
        for (let i = 0; i < qantity; i++) {
            var x = Math.floor(random(sideX));
            var y = Math.floor(random(sideY))
            matrix[x][y] = char;
        }
    }

    character(1, 400);
    character(2, 150);
    character(3, 1);
    character(4, 2);
    character(5, 20)
    character(6, 20)
  

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
                else if (matrix[y][x] == 6) {
                    var mons = new AllEater(x, y, 6)
                    alleaterArr.push(mons)
                }
            }
        }
    }

    createMatrix()

    function playgame() {
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
        for (var i in alleaterArr) {
            alleaterArr[i].eat();
        }


        io.emit('Matrix', matrix)
    }
    setInterval(function () {
        playgame()
    }, 1000)
