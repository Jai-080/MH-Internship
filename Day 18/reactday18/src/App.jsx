import { useState, useEffect } from "react";
import "./App.css";

// Separate Timer component
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("Timer running");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped: component unmounted");
    };
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [showTimer, setShowTimer] = useState(true);

  // Task 1: Update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Task 2: Fetch data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <h1>Day 18: useEffect</h1>

      <section>
        <h2>Task 1: Document Title</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
        <p>Check your browser tab title!</p>
      </section>

      <section>
        <h2>Task 2: Fetch API Data</h2>
        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.slice(0, 5).map((user) => (
              <li key={user.id}>
                {user.name} — {user.email}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Task 3: Mounting and Unmounting</h2>

        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "Hide Timer" : "Show Timer"}
        </button>

        {showTimer && <Timer />}
      </section>
    </div>
  );
}

export default App;