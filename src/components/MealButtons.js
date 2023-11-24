import { React, useState } from "react";
export default function MealButtons({ mealsCount }) {
  const [counter, setCounter] = useState(mealsCount);
  const increase = () => {
    setCounter((mealsCount) => mealsCount + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((mealsCount) => mealsCount - 1);
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
}
