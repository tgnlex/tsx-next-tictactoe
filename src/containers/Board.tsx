import CurrentPlayer from '@/components/CurrentPlayer'

import Square from '@/components/Square'
import PlayerOne from '@/models/PlayerOne'
import PlayerTwo from '@/models/PlayerTwo'
import Marker from '@/types/Marker'
import Player from '@/types/Player'
import { useState } from 'react'

function Board() {
  const [squares, setSquares] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState<Player>()
  const [winner, setWinner] = useState<any>()
  const [currentMarker, setCurrentMarker] = useState<Marker>(
    Math.round(Math.random() * 1) === 1 ? PlayerOne.marker : PlayerTwo.marker
  )
  
    if (currentMarker === PlayerOne.marker) {
      setCurrentPlayer(PlayerOne)
    } else {
      if (currentMarker === PlayerTwo.marker){
         setCurrentPlayer(PlayerTwo)
      } else {
          console.log('Error: no current Player set.')
      }
    }
  

  function setSquareValue(index) { 
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentMarker;
      }
      return val;
    });
    setSquares(newData)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <div className="container">
      <div className="board-head">
      <CurrentPlayer currentPlayer={currentPlayer} />
      </div>
      <div className="board-main">
      {Array(9).fill(null).map((_, i) => {
        return <Square
          winner={winner}
          key={i}
          onClick={() => }
          value={squares[i]}
        />
      })}
      </div>
    </div>
  )
}
export default Board;
