import { React } from "react";
import MealButtons from "./MealButtons";
import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./Background";

export default function MealsObjects({ mealData, changeMealCounter }) {
  return (
    <ContentWrapper style={{ display: "flex", justifyContent: "center" }}>
      <div id="meals">
        {mealData.map((meal, index) => {
          return (
            <div key={index} id={meal.title} className="mealBoxes">
              <h3>{meal.title}</h3>
              <img
                className="mealImages"
                src={meal.mealImage}
                alt={"Bild på " + meal.title}
              />
              <p>{meal.description}</p>
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
      <BackgroundCover />
    </ContentWrapper>
  );
}
