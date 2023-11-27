import { React, useState } from "react";

export default function MealButtons({ index, mealsCount, changeMealCounter }) {
  // const [counter, setCounter] = useState(mealsCount);
  const increase = () => {
    // setCounter((mealsCount) => mealsCount + 1);
    changeMealCounter(index, +1);
  };

  const decrease = () => {
    if (mealsCount > 0) {
      // setCounter((mealsCount) => mealsCount - 1);
      changeMealCounter(index, -1);
    }
  };
  return (
    <div className="buttonContainer">
      <button className="control__btn" onClick={decrease}>
        -
      </button>
      <span className="counter__output">{mealsCount}</span>
      {/* <span className="counter__output">{counter}</span> */}
      <button className="control__btn" onClick={increase}>
        +
      </button>
    </div>
  );
}
