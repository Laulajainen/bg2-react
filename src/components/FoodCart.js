import React from "react";
import MealButtons from "./MealButtons";

export default function Foodcart({ mealData, changeMealCounter }) {
  return (
    <div id="meals">
      {mealData.map((meal, index) => {
        return (
          <div key={index} className="mealBoxes">
            <h3>{meal.title}</h3>
            <div className="allergyContainer">
              {meal.containsNuts && (
                <img
                  src={"/img/nuts.jpg"}
                  alt="Innehåller nötter"
                  title="Innehåller nötter"
                />
              )}
              {meal.containsEggs && (
                <img
                  src={"/img/eggs.jpg"}
                  alt="Innehåller ägg"
                  title="Innehåller ägg"
                />
              )}
              {meal.containsGluten && (
                <img
                  src={"/img/gluten.jpg"}
                  alt="Innehåller gluten"
                  title="Innehåller gluten"
                />
              )}
            </div>
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
