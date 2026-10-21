import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Practice JavaScript" },
    { id: 3, name: "Build a project" },
  ]);

  const [nextId, setNextId] = useState(4);

  function addTask() {
    const newTask = {
      id: nextId,
      name: `Task ${nextId}`,
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  }

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
 