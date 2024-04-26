document.addEventListener("DOMContentLoaded", ()=>{
const gameBody = document.getElementById("gameBody");
const scoreBoard = document.getElementById("scoreBoard");
const gameStatus = document.getElementById("gameStatus");
const winner = document.getElementById("Winner");
const playAgainBtn = document.getElementById("playAgainBtn");
const notifyTurn = document.getElementById("notifyTurn");

playAgainBtn.addEventListener("click", ()=>{
    // Reload the current page
     location.reload();

})

let turn = false , count = 0 ;
let arr = Array(9).fill(undefined);
gameBody.addEventListener("click", f=(e)=>{
let cell = e.target;
let cellNumber = cell.getAttribute("data-cell");
// console.log(cellNumber);
console.log(arr[1]); 
if (turn == false && cell.getAttribute("data") != 1){
    cell.setAttribute("data", "1");
    cell.textContent = "X";
    arr[cellNumber] = "X";
    notifyTurn.textContent = "O Turn";
    WinningConditions("X");
    count ++;
    turn = true;
    if(count == 9) {
        gameStatus.textContent = "Game Draw";
        winner.textContent = '';
        scoreBoard.style.zIndex = '10';

    }
}
else if(cell.getAttribute("data") != 1) {
    cell.setAttribute("data", "1");
    cell.textContent = "O";
    arr[cellNumber] = "O";
    notifyTurn.textContent = "X Turn"
    WinningConditions("O")
    turn = false;
    count ++;
}
// console.log(arr);
// console.log(count);
});
function WinningConditions(char){
    // console.log(char);
    if(arr[1]==char && arr[2]==char && arr[3]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell1").classList.add("winned-cell");
        document.getElementById("cell2").classList.add("winned-cell");
        document.getElementById("cell3").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
        
    }
    if(arr[4]==char && arr[5]==char && arr[6]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell4").classList.add("winned-cell");
        document.getElementById("cell5").classList.add("winned-cell");
        document.getElementById("cell6").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[7]==char && arr[8]==char && arr[9]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell7").classList.add("winned-cell");
        document.getElementById("cell8").classList.add("winned-cell");
        document.getElementById("cell9").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[1]==char && arr[4]==char && arr[7]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell1").classList.add("winned-cell");
        document.getElementById("cell4").classList.add("winned-cell");
        document.getElementById("cell7").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[2]==char && arr[5]==char && arr[8]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell2").classList.add("winned-cell");
        document.getElementById("cell5").classList.add("winned-cell");
        document.getElementById("cell8").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[3]==char && arr[6]==char && arr[9]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell3").classList.add("winned-cell");
        document.getElementById("cell6").classList.add("winned-cell");
        document.getElementById("cell9").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[1]==char && arr[5]==char && arr[9]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell1").classList.add("winned-cell");
        document.getElementById("cell5").classList.add("winned-cell");
        document.getElementById("cell9").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }
    if(arr[3]==char && arr[5]==char && arr[7]==char){
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`; 
        scoreBoard.style.zIndex = '10';
        document.getElementById("cell3").classList.add("winned-cell");
        document.getElementById("cell5").classList.add("winned-cell");
        document.getElementById("cell7").classList.add("winned-cell");
        gameBody.removeEventListener("click", f);
        notifyTurn.textContent = "";
    }

}


    
});