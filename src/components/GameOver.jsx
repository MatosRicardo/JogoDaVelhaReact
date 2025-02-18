export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Fim de jogo!</h2>
      {winner && <p>{winner} Venceu!</p>}
      {!winner && <p>Jogo empatado!</p>}
      <p>
        <button onClick={onRestart}>Reiniciar!</button>
      </p>
    </div>
  );
}
