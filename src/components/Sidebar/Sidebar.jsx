import "./Sidebar.css";
import Foodcart from "../FoodCart";
import { useState } from "react";

export default function Sidebar({ show, mealData, changeMealCounter }) {
  const hasItems = mealData.some((item) => item.count > 0);

  const handleConfirm = () => {
    // Add your logic for handling confirmation here
    console.log("Confirm button clicked!");
  };

  return (
    <div className="sidebar">
      <h1>Kundkorg</h1>
      <div className="sidebar-foodcart">
        {show ? (
          <Foodcart mealData={mealData} changeMealCounter={changeMealCounter} />
        ) : null}
      </div>
      {hasItems && (
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Order
        </button>
      )}
    </div>
  );
}
