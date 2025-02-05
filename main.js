let player1 = player(prompt("Enter player X name :"),"X")
let player2 = player(prompt("Enter player O name :"),"O")

let currentPlayer = player1

const gameboard = (function() {
  const board = [0,1,2,3,4,5,6,7,8]
  console.log(player1.mark)

  return {board,player}
})()

function player(player,mark) {
  const name = player
  let score = 0
  return {name, score, mark}
} 


const displaycontroller = (function(){
  const board = document.querySelector(".board")
  const player1Element = document.querySelector("#player1")
  const player2Element = document.querySelector("#player2")
  const score1 = document.querySelector("#score1")
  const score2 = document.querySelector("#score2")

  player1Element.textContent = player1.name
  player2Element.textContent = player2.name
  score1.textContent = player1.score
  score2.textContent = player2.score
 
  
  const play = function(e){
    e.target.textContent = currentPlayer.mark
    gameboard.board[Number(e.target.id)] = currentPlayer.mark
    if (currentPlayer == player1){
      currentPlayer= player2 
      console.log(currentPlayer)
    }
    else {
      currentPlayer= player1
    }
    playGame()
  }

  board.addEventListener("click", play)
  
  return {board,score1,score2}
})()


const gamefunc = (function (){
  
  const playerMark = function (mark){
    const markIndex = []

    gameboard.board.forEach(function (x, index){
      if (x == mark){
        markIndex.push(index)
      }
    })
    return markIndex
   }

  const makeCondition = function makeCondition(index,x,y,z){
    return index.includes(x) && index.includes(y) && index.includes(z)
  }

  const win = function (mark){
    const index = playerMark(mark)
    if (
       makeCondition(index,0,1,2)||
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

  
  const draw = function (){
    let draw = true
    for (let i=0; i<gameboard.board.length; i++){
      if (gameboard.board.includes(i)){
        draw = false
      }
    }
    return draw
  }

  return {win,draw}
})()

function playGame() {
 
  const resetGame = function (){
    gameboard.board = [0,1,2,3,4,5,6,7,8]

    for (const child of displaycontroller.board.children){
      child.textContent = ''
    }
    currentPlayer = player1
  }


  if (gamefunc.win("X") == true){
    player1.score++
    resetGame()
    score1.textContent = player1.score
    score2.textContent = player2.score
    console.log(gameboard.board , displaycontroller.board.children)
    alert(player1.name + " win")
  }
  else if (gamefunc.win("O") == true){
    player2.score++
    resetGame()
    score1.textContent = player1.score
    score2.textContent = player2.score
    alert(player2.name + " win")
  }
  else if (gamefunc.draw()){
    resetGame()
    alert("draw")
  }
}

