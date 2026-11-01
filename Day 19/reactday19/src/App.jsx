
import { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css";

function DeepChild() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>Deep Child Component</h2>
      <p>Current theme: {theme}</p>
      <p>Received the theme using useContext!</p>
    </div>
  );
}

function MiddleComponent() {
  return (
    <div>
      <h2>Middle Component</h2>
      <DeepChild />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Theme Switcher</h1>

        <p>Learn React useContext</p>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <MiddleComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
