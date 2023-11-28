import "./Sidebar.css";
import Foodcart from "../FoodCart";

export default function Sidebar({ show, mealData, changeMealCounter }) {
  return (
    <div className="sidebar">
      <h1>Kundkorg</h1>
      <div className="sidebar-foodcart">
        {show ? (
          <Foodcart mealData={mealData} changeMealCounter={changeMealCounter} />
        ) : null}
      </div>
    </div>
  );
}
