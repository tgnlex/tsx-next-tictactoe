import Square from '@/types/props/SquareProps';
import {useState} from 'react'

function Square({value, onClick, winner}: Square) { 
  
 if(!value){ 
  return <button disabled={Boolean(winner)} onClick={onClick} className="square square-off">#</button>
 } else {
  return <button disabled className={`square square-on square_${value.toLocaleLowerCase}"`}>
    {value}
  </button>
 }
}


export default Square;
