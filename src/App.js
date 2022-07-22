import "./App.css";
import GamePage from "./GamePage";

function App() {
  const objects = [
    { id: 1, title: "Rock" },
    { id: 2, title: "Paper" },
    { id: 3, title: "Scissor" },
  ];
  return (
    <div className="App">
      <GamePage objects={objects} rounds={5} />
    </div>
  );
}

export default App;
