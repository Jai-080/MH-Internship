
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function handleClick() {
    console.log("Button was clicked!");
  }


  function handleChange(event) {
    setName(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Email:", email);
  }

  return (
    <div>
      <h1>Day 13: Event Handling</h1>


      <section>
        <h2>Task 1: Button Click</h2>
        <button onClick={handleClick}>
          Click Me
        </button>
      </section>

      <hr />


      <section>
        <h2>Task 2: Input Change</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <p>Your name is: {name}</p>
      </section>

      <hr />


      <section>
        <h2>Task 3: Form Submission</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
