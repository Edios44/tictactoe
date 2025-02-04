const game = (function (player) {
  const board = [ "x","x","o",
            "o","o","o",
            "x","x","o"]
  return {board}
})();


function getMarks(mark){
  const markIndex = []

  game.board.forEach(function (x, index){
    if (x == mark){
      markIndex.push(index)
    }
  })
  return markIndex
  }

function drawCondition (){
  let draw = true
  for (let i=0; i<game.board.length; i++){
    if (game.board.includes(i)){
      draw = false
    }
  }
  return draw
}

function makeCondition(index,x,y,z){
  return index.includes(x) && index.includes(y) && index.includes(z)
}

function winCondition(mark){
  const index = getMarks(mark)
  if (makeCondition(index,0,1,2)||
      makeCondition(index,3,4,5)||
      makeCondition(index,6,7,8)||
      makeCondition(index,0,3,6)||
      makeCondition(index,1,4,7)||
      makeCondition(index,2,5,8)||
      makeCondition(index,0,4,8)||
      makeCondition(index,2,4,6))
  {

    return true
  }
}


function gameResult(){
  if (winCondition("x") == true){
    alert("x wins")
  }
  else if (winCondition("o") == true){
    alert("o wins")
  }
  else if ( drawCondition()){
    alert("draw")
  }
}


function playGame(mark){
  gameResult() 
}
playGame()

function input(){
  let number = prompt("enter a number! Vacant numbers:" , gameBoard.board)
}
