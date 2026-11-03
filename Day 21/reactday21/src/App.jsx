import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/101">User 101</Link>
        <Link to="/users/205">User 205</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/users/:id" element={<User />} />
      </Routes>

    </div>
  );
}

export default App;