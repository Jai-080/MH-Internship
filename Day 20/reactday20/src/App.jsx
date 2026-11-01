
import "./App.css";

import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

function App() {

  // Task 1: Fetch users from API
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Task 2: Store name in localStorage
  const [name, setName] = useLocalStorage("name", "");
  function clearStorage() {
  localStorage.clear();
  window.location.reload();
}

  // Task 3: Get browser window dimensions
  const size = useWindowSize();

  return (
    <div>

      {/* Task 1: useFetch */}
      <h1>Custom Hooks Practice</h1>

      <section>
        <h2>1. Fetch Users</h2>

        {loading && <p>Loading users...</p>}

        {error && <p>Error: {error}</p>}

        {data && data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </section>

      <hr />

      {/* Task 2: useLocalStorage */}
      <section>
        <h2>2. Local Storage</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h3>Hello, {name}!</h3>

        <button onClick={() => setName("")}>
          Clear Name
        </button>
        
        <button onClick={clearStorage}>
          Clear All Storage
        </button>
      </section>

      <hr />

      {/* Task 3: useWindowSize */}
      <section>
        <h2>3. Window Size</h2>

        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>

        <h3>
          {size.width < 768 ? "Mobile View" : "Desktop View"}
        </h3>
      </section>

    </div>
  );
}

export default App;
