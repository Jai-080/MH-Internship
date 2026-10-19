import "./Child.css"
function Child({ name, onIncrease }) {
  return (
    <div className="child-container">
      <h2>Hello, {name}!</h2>
      <p>This is the child component.</p>

      <button onClick={onIncrease}>
        Increase from Child
      </button>
    </div>
  );
}

export default Child;
