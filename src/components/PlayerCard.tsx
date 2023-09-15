import React from 'react'
import PlayerOne from '@/models/PlayerOne'
import PlayerTwo from '@/models/PlayerTwo'



function PlayerCard() {
  return (
    <div className="Player-Card">
      {typeof PlayerOne.name === 'string' && 
       typeof PlayerTwo.name === 'string' ?
        <>
          <div className="text player player-one">{PlayerOne.name}</div>
          <p>vs.</p>
          <div className="text player player-two">{PlayerTwo.name}</div> 
        </> :
          <p>No Players Found</p>} 
     
  
    </div>
  )
}

export default PlayerCard;
