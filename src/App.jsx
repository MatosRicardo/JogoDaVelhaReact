import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Jogador 1" symbol="X" />
            <Player name="Jogador 2" symbol="O" />
          </ol>
        </div>
      </main>
      ;
    </>
  );
}

export default App;
