import { React } from "react";
// Den här komponenten tar in index, mealsCount som är antalet till kundkorgen och changeMealCounter
// för att ändra värdet i kundkorgen med hjälp av knapparna som den returnerar till mealObjects.
export default function MealButtons({ index, mealsCount, changeMealCounter }) {
  const increase = () => {
    changeMealCounter(index, +1);
  };

  const decrease = () => {
    if (mealsCount > 0) {
      changeMealCounter(index, -1);
    }
  };
  return (
    <div className="buttonContainer">
      <button className="control__btn" style={{ cursor: "pointer" }} onClick={decrease}>
        -
      </button>
      <span className="counter__output">{mealsCount}</span>
      <button className="control__btn" style={{ cursor: "pointer" }} onClick={increase}>
        +
      </button>
    </div>
  );
}
