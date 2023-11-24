import { React } from "react";
import MealButtons from "./MealButtons";

export default function MealsObjects({ meals }) {
  return (
    <div id="meals">
      {meals.map((meals, index) => {
        return (
          <div key={index} id={meals.title} className="mealBoxes">
            <h3>{meals.title}</h3>
            <img className="mealImages" src={meals.mealImage} alt={"Bild på " + meals.title} />
            <p>{meals.description}</p>
            <h4 className="mealPrices">{meals.price + "kr"}</h4>
            <div className="buttonContainer">
              <MealButtons mealsCount={meals.count} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
