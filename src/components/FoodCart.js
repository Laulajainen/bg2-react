import React from "react";
import MealButtons from "./MealButtons";

export default function Foodcart({ mealData, changeMealCounter }) {
  return (
    <div id="meals">
      {mealData.map((meal, index) => {
        return (
          <div key={index} className="mealBoxes">
            <h3>{meal.title}</h3>
            <h4 className="mealPrices">{meal.price + "kr"}</h4>
            <div className="buttonContainer">
              <MealButtons
                index={index}
                mealsCount={meal.count}
                changeMealCounter={changeMealCounter}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
