import { React, useState } from "react";
import MealContent from "./MealContent";
import meals from "./MealsList";

function MealsTable({ meals }) {
  const rows = [];
  meals.forEach((meals) => {
    rows.push(<MealContent meals={meals} key={meals.title} />);
  });
  return <div id="meals">{rows}</div>;
}

function MealObjects() {
  return <MealsTable meals={meals} />;
}
export default MealObjects;
