import "./App.css";
import GamePage from "./GamePage";

function App() {
  const objects = ["Rock", "Paper", "Scissors"];
  return (
    <div className="App">
      <GamePage objects={objects} rounds={5} />
    </div>
  );
}

export default App;
