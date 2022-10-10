const cells = document.querySelectorAll(".cell") ;
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector ( "#restartBtn");
const winConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", "",]
let current player = "O"
let running = false; 

InitilizeGame=();
function InitilizeGame(){
    cells.forEach(cell=> .addEventistener("click"))
    restartBtn.addEventistener("click", restartGame);
    statusText.textContent = `${currentPlayer} 's turn`;
    let running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" ||!running) {
        return;

    }
    updateCell(this, cellIndex)
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer(){
        cell.textContent = currentPlayer;
    }

}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer} 's turn`;
}


function checkWinner(){
    let roundWon = false;
    //forloop used here 
    for(let i = 0; i < winConditions.length; i++)
    //stroing each condition with a temporary variable 
    //iterating over all the options within the indicies. it will keep going to the next set of ndicies to check if it wins  lines 5-13 
    const condition= winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    if (cellA == "" || cellB == "" || cellC == "");{
        continue;
    } 
    if(cellA == cellB && cellB == cellC){
        rendomWon = true;
        break;

    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running= false;
        else if (options.includes("")){
            statusText.textContent = `Draw!`;
            running = false;

        }
        else{
            changePlayer();

        }
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "",];
    statusText.textContent = `${currentPlayer}'s turn`;
    cell.forEach(cell => cell.statustextContent = "");
    running = true;


}
