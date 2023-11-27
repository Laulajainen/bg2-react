import { React } from "react";
import MealButtons from "./MealButtons";
import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./Background";

export default function MealsObjects({ mealData, changeMealCounter }) {
  return (
    <ContentWrapper>
      <div id="meals">
        {mealData.map((meal, index) => {
          return (
            <div key={index} className="mealBoxes">
              <h3>{meal.title}</h3>
              <img
                className="mealImages"
                src={meal.mealImage}
                alt={"Bild på " + meal.title}
              />
              <p>{meal.description}</p>
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
      <BackgroundCover />
    </ContentWrapper>
  );
}
