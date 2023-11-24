import React from "react";
import MealContent from "./MealContent";
const MealsTable = ({ props }) => {
  const mealBoxes = [];
  props.meals.forEach((props) => {
    mealBoxes.push(<MealContent props={props.meals} key={props.title} />);
  });
  return <div id="meals">{mealBoxes}</div>;
};

function FoodCart(props) {
  return <MealsTable props={props} />;
}

export default FoodCart;
