import { useNavigate } from "react-router-dom";

import "./Sidebar.css";
import Foodcart from "../FoodCart";
import { useState } from "react";

export default function Sidebar({ show, mealData, changeMealCounter }) {
  const navigate = useNavigate();
  const hasItems = mealData.some((item) => item.count > 0);

  const handleConfirm = () => {
    const confirmedItems = mealData.filter((item) => item.count > 0);
    console.log("Confirmed Items:", confirmedItems);
    navigate("/confirmation", { state: { confirmedItems } });

    // setMeals([]);
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
