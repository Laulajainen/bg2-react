import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Foodcart from "../FoodCart";

export default function Sidebar({ show, mealData, changeMealCounter }) {
  const navigate = useNavigate();

  // kontrollerna om det finns objekt i kundvagnen
  const hasItems = mealData.some((item) => item.count > 0);

  const handleConfirm = () => {
    const confirmedItems = mealData.filter((item) => item.count > 0);

    // navigera till bekräftelsesidan
    navigate("/confirmation", { state: { confirmedItems } });
  };

  // struktur för sidofältet
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
