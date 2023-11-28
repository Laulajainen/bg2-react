import React from "react";
import MealButtons from "./MealButtons";
// Det här är kundkorgen som renderas när en måltid är lagd i kundkorg samt att kundkorgsknappen är klickad.
export default function Foodcart({ mealData, changeMealCounter }) {
  return (
    <div id="meals">
      {mealData.map((meal, index) => {
        if (meal.count > 0)
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
