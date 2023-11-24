import React from "react";
import meals from "./MealsList";
import MealButtons from "./MealButtons";
export default function Foodcart() {
  return (
    <div id="meals">
      {meals.map((meals, index) => {
        return (
          <div key={index} id={meals.title} className="mealBoxes">
            <h3>{meals.title}</h3>
            <h4 className="mealPrices">{meals.price + "kr"}</h4>
            <div className="buttonContainer">
              <MealButtons />
            </div>
          </div>
        );
      })}
    </div>
  );
}
