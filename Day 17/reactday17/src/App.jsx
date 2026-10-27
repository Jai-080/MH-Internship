import "./App.css";
import { useState } from "react";

function App() {
  // Task 1: Update a specific property in an object
  const [student, setStudent] = useState({
    name: "Jai",
    age: 20,
    department: "CSE AIML",
  });

  function updateAge() {
    setStudent((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  }

  // Task 2: Increment a counter using functional update
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  // Task 3: Toggle boolean state between true and false
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn((prev) => !prev);
  }

  return (
  <div className="container">
    <h1>Day 17 — React useState</h1>
    <p className="subtitle">
      State Management
    </p>

    <div className="cards">
      <section className="card">
        <h2>Task 1: Object State</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <button onClick={updateAge}>Increase Age</button>
      </section>

      <section className="card">
        <h2>Task 2: Counter</h2>
        <p className="value">{counter}</p>
        <button onClick={increment}>Increment Counter</button>
      </section>

      <section className="card">
        <h2>Task 3: Toggle Switch</h2>
        <p className={`status ${isOn ? "on" : "off"}`}>
          {isOn ? "● ON" : "● OFF"}
        </p>
        <button onClick={toggleSwitch}>
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </section>
    </div>
  </div>
);
}
export default App;
