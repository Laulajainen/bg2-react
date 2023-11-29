import { React } from "react";
import MealButtons from "./MealButtons";
import ContentWrapper from "./BackgroundComponents/ContentWrapper";
import BackgroundCover from "./BackgroundComponents/BackgroundCover";
//Den här komponenten söker fram varenda rätt i våran lista av rätter och returnerar objekt med
// titel på rätt, bild, beskrivning, eventuella allergener, pris och knapparna för att välja antal.
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
                    className="allergyContent"
                    src={"/icons/nuts.jpg"}
                    alt="Innehåller nötter"
                    title="Innehåller nötter"
                  />
                )}
                {meal.containsEggs && (
                  <img
                    className="allergyContent"
                    src={"/icons/eggs.jpg"}
                    alt="Innehåller ägg"
                    title="Innehåller ägg"
                  />
                )}
                {meal.containsGluten && (
                  <img
                    className="allergyContent"
                    src={"/icons/gluten.jpg"}
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
