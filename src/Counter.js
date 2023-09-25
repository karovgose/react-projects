import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrementCounter}>
        -
      </button>
      <span className="counter-value">{counter}</span>
      <button className="counter-button" onClick={incrementCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
