import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ mealData, changeMealCounter, confirmOrder }) => {
  // Hantera sidomenyns syndlighet
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [firstItemAdded, setFirstItemAdded] = useState(false);
  const [itemStyle, setItemStyle] = useState({});

  useEffect(() => {
    if (isSidebarOpen) {
      console.log("nu öppnar vi");
      setItemStyle({
        padding: "15px 15px 15px 15px",
        width: "300px",
        transition: " width 0.7s ease-in-out"
    });
   } else {
    console.log("nu stänger vi");
      setItemStyle({
        padding: "15px 0px 15px 0px",
        width: "0px",
        transition: "width 0.7s ease-in-out"
    });
  }
  }, [isSidebarOpen]);

  // Funktion för att ändra synligheten
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Används när mealData ändras för första gången
    if (firstItemAdded == false && mealData.some((item) => item.count > 0)) {
      setSidebarOpen(true);
      setFirstItemAdded(true);
    }
    if (!mealData.some((item) => item.count > 0)) {
      setSidebarOpen(false);
      setFirstItemAdded(false);
    }
  }, [mealData]);

  return (
    // Navigationsfältet
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="">
          <img src={"/icons/leftlogo.png"} alt="topleftlogo"></img>
          
        </Link>
      </div>

      <ul className="navbar-links-to-right">
        <li className="menuelink">
          <Link to="/menu">Meny</Link>
        </li>
        <li className="contactlink">
          <Link to="/contact">Kontakt</Link>
        </li>
        <li className="cartbutton" onClick={toggleSidebar} tabIndex={0}>
          <TiShoppingCart />
        </li>
      </ul>

      {/* Visas om isSidebarOpen är true */}
      {true && (
        <Sidebar
          show={isSidebarOpen}
          mealData={mealData}
          changeMealCounter={changeMealCounter}
          confirmOrder={confirmOrder}
          toggleSidebar={toggleSidebar}
          style={itemStyle}
        />
      )}
    </nav>
  );
};
export default Navbar;
