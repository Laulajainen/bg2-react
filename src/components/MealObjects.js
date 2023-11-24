import { React } from "react";
import MealContent from "./MealContent";

const MealsTable = ({ meals }) => {
  const mealBoxes = [];
  meals.forEach((meals) => {
    mealBoxes.push(<MealContent meals={meals} key={meals.title} />);
  });
  return <div id="meals">{mealBoxes}</div>;
};

const MealObjects = ({ meals }) => {
  return <MealsTable meals={meals} />;
};
export default MealObjects;
