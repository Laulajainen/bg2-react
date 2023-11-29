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
        {true ? (
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