import { React, useState } from "react";
const MealButtons = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="buttonContainer">
      <button className="control__btn" onClick={decrease}>
        -
      </button>
      <span className="counter__output">{counter}</span>
      <button className="control__btn" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default MealButtons;
