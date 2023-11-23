import React from "react";
import MealContent from "./MealContent";
import meals from "./MealsList";
function MealsTable({ meals }) {
  const rows = [];
  meals.forEach((meals) => {
    rows.push(<MealContent meals={meals} key={meals.title} />);
  });
  return <div id="meals">{rows}</div>;
}

function FoodCart() {
  return <MealsTable meals={meals} />;
}
// const FoodCart = (props) => {
//   return (
//     <div className="cartContainer">
//       <h4>Kundkorg</h4>
//       <table Classname="cartList">Tabellen</table>
//       <p></p>
//     </div>
//   );
// };
export default FoodCart;
