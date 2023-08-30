import React from 'react'
import Player, {Marker} from '../types/Player'
export const PlayerOne: Player = {
    name: 'player 1',
    marker: 'X',
}

export const PlayerTwo: Player = {
      name: 'player 2',
      marker: 'Y'
  } 
function Players() {
  return (
    
    <div className="Title-Card">
      {typeof PlayerOne.name === 'string' && 
       typeof PlayerTwo.name === 'string' ?
        <>
          <div>{PlayerOne.name}</div>
          <p>vs.</p>
          <div>{PlayerTwo.name}</div> 
        </> :
          <p>No Players Found</p>} 
     
  
    </div>
  )
}

export default Players
