
import { useState } from "react";
import Child from "./Child";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h1>Day 12: Props and State</h1>

      <Child
        name="Jai"
        onIncrease={increaseCounter}
      />

      <h2>Counter: {count}</h2>

      <button onClick={increaseCounter}>
        Increase from Parent
      </button>
    </div>
  );
}

export default App;
