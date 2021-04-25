const gameBoard = document.getElementById("game-board");
const boxCollection = gameBoard.querySelectorAll("span");
const winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let oMarked = true;
const gridArray = [];

for(const box of boxCollection){
  box.addEventListener("click", plotMark);
}

function plotMark(e){
  const clickedBox = e.target

  if(clickedBox.innerText !== ".")
  {
    return;
  }

  if(oMarked){
    clickedBox.innerText = "X";
    clickedBox.classList.add("cross");
    oMarked = !oMarked;
  }else {
    clickedBox.innerText = "O";
    clickedBox.classList.add("circle");
    oMarked = !oMarked;
  }

  setTimeout(checkWinner, 50);
}

function checkWinner(){
  let winner = null;
  const boardData = [];
  for(const box of boxCollection){
    boardData.push(box.innerText);
  }

  for(condition of winConditions){
    if(boardData[condition[0]] === boardData[condition[1]] && boardData[condition[0]] === boardData[condition[2]]){
      winner = boardData[condition[0]];
      break;
    }
  }
  showWinner(winner ? winner : boardData.includes(".") ? null : 'T');
}

function showWinner(mark){
  if(mark === "." || mark === null) return;
  if(mark !== 'T'){
    alert(mark + " has won!");
    reset();
  }else {
    alert("Cats Game!");
    reset();
  }
}

function reset(){
  for(const box of boxCollection){
    box.innerText = ".";
    box.classList.remove("cross");
    box.classList.remove("circle");

    oMarked = true;
  }
}