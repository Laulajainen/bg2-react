import { React, useState } from "react";
import MealButtons from "./MealButtons";

const MealContent = ({ meals }) => {
  const [counter, setCounter] = useState(meals.count);
  meals.count = counter;
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className="mealBoxes">
      <h3>{meals.title}</h3>
      <img
        className="mealImages"
        src={meals.mealImage}
        alt={"Bild på " + meals.title}
      />
      <p>{meals.description}</p>
      <h4 className="mealPrices">{meals.price + "kr"}</h4>
      <div className="buttonContainer">
        <MealButtons meals={meals} />
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <span className="counter__output">{meals.count}</span>
        <button className="control__btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};
export default MealContent;
