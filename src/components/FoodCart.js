import React from "react";
import MealButtons from "./MealButtons";
export default function Foodcart(props) {
  return (
    <div id="meals">
      {props.meals.map((props, index) => {
        return (
          <div key={index} id={props.title} className="mealBoxes">
            <h3>{props.title}</h3>
            <h4 className="mealPrices">{props.price + "kr"}</h4>
            <div className="buttonContainer">
              <MealButtons mealsCount={props.count} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
