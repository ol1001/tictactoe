/**
 * Created by ozzy on 11.03.2015.
 */
var shotCount = 1;
var matrix = [];
var animal = randAnimal();
var srcImg = "images/animals/" + animal + ".png";
var finish = false;

		 
function createBoard (n,m) {
    var body = document.body;

    var board = document.createElement('div');
    board.className = "board_position";

    var tbl = document.createElement('table');
    tbl.className = "game_table";

    for (var i=0; i<n; i++) {
        var row = tbl.insertRow();
        matrix[i] = row;
        for (var j=0; j<m; j++) {
            var cell = row.insertCell(j);
            cell.className = "td_cell";
            var cellImg = document.createElement('div');
            cellImg.className = "blank_cell";
            cell.appendChild(cellImg);
            cellImg.addEventListener("click", makeShot, false);
            matrix[i][j] =  cellImg;
        }
    }
    board.appendChild(tbl);
    body.appendChild(board);
}
createBoard(3,3);
function makeShot () {
    if (finish == false) {
        if (this.className == "blank_cell") {
            if (shotCount % 2 != 0) {
                this.className = "x_cell";
                var x = document.createTextNode("X");
                this.appendChild(x);
                shotCount++;
                checkWin();
            } else {
                this.className = "o_cell";
                var o = document.createTextNode("O");
                this.appendChild(o);
                shotCount++;
                checkWin();

            }
        }
    }
}

function checkWin () {
    checkRow() || checkCol() || checkDiag();
}

function checkEqual (c1, c2, c3) {
    if (c1 != "blank_cell" &&
        c1 == c2 &&
        c2 == c3) {
        addImg(c1);
        finish = true;
    }
}

function checkRow() {
    for (var i = 0; i < 3; i++) {
        checkEqual(matrix[i][0].className, matrix[i][1].className, matrix[i][2].className);
    }
}

function checkCol() {
    for (var j = 0; j < 3; j++) {
        checkEqual(matrix[0][j].className, matrix[1][j].className, matrix[2][j].className);
    }

}

function checkDiag() {
    checkEqual(matrix[0][0].className, matrix[1][1].className, matrix[2][2].className);
    checkEqual(matrix[0][2].className, matrix[1][1].className, matrix[2][0].className);
}

function addImg(element) {
    var win = document.getElementsByClassName(element);
    var cellStyle = "url(" + srcImg + ") no-repeat center/100px 100px";
    for (var i = 0; i < win.length; i++) {
        var text = win[i].childNodes[0];
        win[i].removeChild(text);
        win[i].style.background = cellStyle;
    }
}

function randAnimal() {
    var animals = [
        "cat", "frog", "koala", "leopard", "panda",
        "owl", "pug", "snow_leopard", "hedgehog",
        "black_leopard", "dachshund"
    ];
    var value = Math.floor((Math.random() * 11) + 0);
    return animals[value];
}

function sayHi (){
    var player1 = prompt("Please insert the name of player #1: ");
    var player2 = prompt("Please insert the name of player #2: ");
    return player1, player2;
}

function congratWinner (){
    //
}
function refreshGame() {
    //add button
    location.reload();
}