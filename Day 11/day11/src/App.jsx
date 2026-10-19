
import "./App.css";

function App() {
  const name = "Jai";
  const regno = 23619211;
  const dept = "B.tech CSE AIML";
  const a = 10;
  const b = 5;

  const subjects = [
    "Java",
    "Python",
    "Data Structures",
    "Machine Learning",
    "Web Development",
    "Artificial Intelligence"
  ];

  return (
    <div className="container">
      <h1 className="heading">Hello, {name}!</h1>

      <p className="details">Register number: {regno}</p>
      <p className="details">Department: {dept}</p>

      <p style={{ color: "orange", fontWeight: "bold" }}>
        Sum of {a} and {b} is {a + b}
      </p>

      <h2 className="heading">My Subjects</h2>

      <ul className="subject-list">
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
