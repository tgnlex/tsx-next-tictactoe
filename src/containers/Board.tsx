// Import react hooks
import { useState, useEffect } from 'react';
// components
import Current from '@/components/Current';
import Square from '@/components/Square';
// data models
import PlayerOne from '@/models/PlayerOne';
import PlayerTwo from '@/models/PlayerTwo';
// types
import CurrentPlayer from '@/types/CurrentPlayer';
import Player from '@/types/Player';

function calculateWinner(squares: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState<Player>()
  const [winner, setWinner] = useState<any>()
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(
    Math.round(Math.random() * 1) === 1 ? PlayerOne.marker : PlayerTwo.marker
  )
  

  //tethersPlayer state to current marker state
  if (currentPlayer === PlayerOne.marker) {
      setPlayer(PlayerOne)
    } else {
      if (currentPlayer === PlayerTwo.marker){
         setPlayer(PlayerTwo)
      } else {
          console.log('Error: no current Player set.')
      }
    }
  
  function reset(){
    setSquares(Array(9).fill(null))
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O")
  }
  function setSquareValue(index: number) { 
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData)
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X" )
  }
  
  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });
  return (
    <div className="container">
      <div className="board-header">
      <Current player={currentPlayer} winner={''} />
      {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
      {winner && winner === "BOTH" && (
        <p>Congrats you both win!</p>
      )}
      </div>
      <div className="grid board main">
      {Array(9)
      .fill(null)
      .map((_, i) => {
        return <Square
          winner={winner}
          key={i}
          onClick={() => setSquareValue(i)}
          value={squares[i]}
        />
      })}
      </div>
    </div>
  )
}
export default Board;
