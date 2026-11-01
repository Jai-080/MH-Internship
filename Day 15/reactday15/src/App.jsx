import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Practice JavaScript" },
    { id: 3, name: "Build a project" },
  ]);

  const [nextId, setNextId] = useState(4);
  const [taskName, setTaskName] = useState("");

  function addTask() {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: nextId,
      name: taskName,
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
    setTaskName("");
  }

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;