
import { useState } from "react";
import "./App.css";
function App() {
  // Task 1: Controlled text input
  const [name, setName] = useState("");

  // Task 2: Multiple inputs managed by one state object
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isStudent: false,
    course: "",
  });

  // Task 3: Form validation
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle changes to Task 2 inputs
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.fullName.trim() === "") {
      setError("Full name is required!");
      setSuccess("");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Email is required!");
      setSuccess("");
      return;
    }

    if (formData.course === "") {
      setError("Please select a course!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted successfully!"); 

    console.log("Submitted data:", formData);
  }

  return (
    <div className="container">
      <h1>Day 16: React Forms</h1>

      
      <section>
        <h2>Task 1</h2>

        <label htmlFor="name">Enter your name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <p>Your name is: {name}</p>
      </section>

      
      <section>
        <h2>Task 2 & 3</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>
            <input
              type="checkbox"
              name="isStudent"
              checked={formData.isStudent}
              onChange={handleChange}
            />
            I am a student
          </label>

          <label htmlFor="course">Select a course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">-- Choose a course --</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>

          <button type="submit">Submit Form</button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </section>

      <section>
        <h2>Form Data Preview</h2>
        <p>Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Student: {formData.isStudent ? "Yes" : "No"}</p>
        <p>Course: {formData.course || "Not selected"}</p>
      </section>
    </div>
  );
}

export default App;
