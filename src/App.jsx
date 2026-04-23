import { useState } from "react";
import Dice from "./Dice";
import "./App.css";

function App() {
  const [num, setNum] = useState(1);

  function rollDice() {
    const random = Math.floor(Math.random() * 6) + 1;
    setNum(random);
  }

  return (
    <div className="container">
      <h1>My Dice 🎲</h1>

      <Dice num={num} />

      <button onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;