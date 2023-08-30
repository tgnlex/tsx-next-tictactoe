import Player from "@/types/Player";
type currentPlayerProps = {
  currentPlayer: Player | undefined;
}
function CurrentPlayer({currentPlayer}: currentPlayerProps) {
  return (
    <div>
      {
      typeof currentPlayer === 'object' && typeof currentPlayer.name === 'string' ?
      <p>Hey, {currentPlayer.name} Its your turn!</p> :
      <p>Paused</p>
      }
    </div>
  )
}

export default CurrentPlayer;
