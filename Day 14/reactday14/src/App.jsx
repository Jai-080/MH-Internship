
import { useState } from "react";
import "./App.css";


function WelcomeMessage() {
  return <h3>Welcome back!</h3>;
}

function LoginMessage() {
  return <h3>Please log in first.</h3>;
}

function App() {
  
  let isLoggedIn = true;
  let userComponent;

  if (isLoggedIn) {
    userComponent = <WelcomeMessage />;
  } else {
    userComponent = <LoginMessage />;
  }

  
  const [showMessage, setShowMessage] = useState(false);

  
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <h1>Day 14: Conditional Rendering</h1>

      <hr />

      <h2>Task 1: If Statement</h2>
      {userComponent}

      <hr />

      <h2>Task 2: Logical && Operator</h2>

      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>This message is conditionally displayed!</p>}

      <hr />

      <h2>Task 3: Ternary Operator</h2>

      <p>
        {isSubscribed
          ? "You are subscribed!"
          : "You are not subscribed."}
      </p>

      <button onClick={() => setIsSubscribed(!isSubscribed)}>
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

export default App;
