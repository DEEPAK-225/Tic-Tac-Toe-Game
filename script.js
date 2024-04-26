document.addEventListener("DOMContentLoaded", ()=>{
const gameBody = document.getElementById("gameBody");
const scoreBoard = document.getElementById("scoreBoard");
const gameStatus = document.getElementById("gameStatus");
const winner = document.getElementById("Winner");
const playAgainBtn = document.getElementById("playAgainBtn");
const notifyTurn = document.getElementById("notifyTurn");
gameBody.setAttribute("data", "1");

playAgainBtn.addEventListener("click", ()=>{
    // Reload the current page
     location.reload();

})

let turn = false , count = 0 ;
let arr = Array(9).fill(undefined);
gameBody.addEventListener("click", f=(e)=>{
    console.log(e.target);
let cell = e.target;
let cellNumber = cell.getAttribute("data-cell");
// console.log(cellNumber);
console.log(arr[1]); 
if (turn == false && cell.getAttribute("data") != 1){
    cell.setAttribute("data", "1");
    cell.textContent = "X";
    arr[cellNumber] = "X";
    notifyTurn.textContent = "O Turn";
    if(WinningConditions("X")){
        resultPopup("X");
    }

console.log(WinningConditions("X"));
    count ++;
    turn = true;
    if(count == 9 && !WinningConditions("X") ) {
        resultPopup("D");
        

    }
}
else if(cell.getAttribute("data") != 1) {
    cell.setAttribute("data", "1");
    cell.textContent = "O";
    arr[cellNumber] = "O";
    notifyTurn.textContent = "X Turn"
    if(WinningConditions("O")){
        resultPopup("O");
    }

    turn = false;
    count ++;
}
// console.log(arr);
// console.log(count);
});
function resultPopup(char){
    if(char=="D"){
        gameStatus.textContent = "Game Draw";
        winner.textContent = '';
        
    }
    else{
        gameStatus.textContent = "Game Over";
        winner.textContent = `${char}-Win`;
    }
        gameBody.removeEventListener("click", f);
        scoreBoard.style.zIndex = '10';
        notifyTurn.textContent = "";
}
function changeStyle(a,b, c){
    console.log(a+b+c);
    document.getElementById(`cell${a}`).classList.add("winned-cell");
    document.getElementById(`cell${b}`).classList.add("winned-cell");
    document.getElementById(`cell${c}`).classList.add("winned-cell");
}

function WinningConditions(char){
    // console.log(char);
    
    if(arr[1]==char && arr[2]==char && arr[3]==char){
        changeStyle(1,2,3);
        return true;
        
    }
    else if(arr[4]==char && arr[5]==char && arr[6]==char){
        changeStyle(4,5,6);
        return true;
    }
    else if(arr[7]==char && arr[8]==char && arr[9]==char){
        changeStyle(7,8,9);
        return true;
    }
    else if(arr[1]==char && arr[4]==char && arr[7]==char){
        changeStyle(1,4,7);
        return true;
    }
    else if(arr[2]==char && arr[5]==char && arr[8]==char){
        changeStyle(2,5,8);
        return true;
    }
    else if(arr[3]==char && arr[6]==char && arr[9]==char){
        changeStyle(3,6,9);
        return true;
    }
    else if(arr[1]==char && arr[5]==char && arr[9]==char){
        changeStyle(1,5,9);
        return true;

    }
    else if(arr[3]==char && arr[5]==char && arr[7]==char){
        changeStyle(3,5,7);
        return true;
    }
    
}    
});