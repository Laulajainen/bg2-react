import Foodcart from "../FoodCart";

export default function Sidebar({ show, mealData, changeMealCounter, confirmOrder, toggleSidebar, style }) {
  const hasItems = mealData.some((item) => item.count > 0);

  const handleConfirm = () => {
    toggleSidebar();
    confirmOrder();
  };

  return (
    <div className="sidebar" style={style}>
      <h1>Kundkorg</h1>
      <div className="sidebar-foodcart">
        <Foodcart mealData={mealData} changeMealCounter={changeMealCounter} />
      </div>
      {hasItems && (
        <button className="confirm-button" onClick={handleConfirm}>
          Konfirmera köp
        </button>
      )}
    </div>
  );
}