import CurrentProps from "@/types/props/CurrentProps";
import Player from "@/types/Player";

function Current({player, winner}: CurrentProps) {
  return (
    <div className="sub-container turn-container">
      {
      typeof player === 'object' && typeof player.name === 'string' ?
      <p className="text turn playing">Hey, {player.name} Its your turn!</p> :
      <p className="text turn paused">Paused</p>
      }
      {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
    </div>
  )
}

export default Current;
