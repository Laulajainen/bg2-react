import React from "react";
import images from "../../constants/images";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ mealData, changeMealCounter, confirmOrder }) => {
  // Hantera sidomenyns syndlighet
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [firstItemAdded, setFirstItemAdded] = useState(false);

  // Funktion för att ändra synligheten
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Används när mealData ändras för första gången
    if (firstItemAdded == true) {
      setSidebarOpen(true);
      setFirstItemAdded(true);
    }
  }, [mealData]);

  return (
    // Navigationsfältet
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="">
          <img src={images.toplogo} alt="topleftlogo"></img>
        </Link>
      </div>

      <ul className="navbar-links-to-right">
        <li className="menuelink">
          <Link to="/menu">Meny</Link>
        </li>
        <li className="contactlink">
          <Link to="/contact">Kontakt</Link>
        </li>
        <li className="cartbutton" onClick={toggleSidebar}>
          <TiShoppingCart />
        </li>
      </ul>

      {/* Visas om isSidebarOpen är true */}
      {isSidebarOpen && (
        <Sidebar
          show={isSidebarOpen}
          mealData={mealData}
          changeMealCounter={changeMealCounter}
          confirmOrder={confirmOrder}
          toggleSidebar={toggleSidebar}
        />
      )}
    </nav>
  );
};
export default Navbar;
