import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const setLight = () => {
    setTheme("light");
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={setLight}>Light</button>
      <h2>
        COUNTER: {count} {count < 0 ? "NEGATIVE" : "POSITIVE"}
      </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseState;
