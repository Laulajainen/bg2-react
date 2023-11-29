import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ mealData, changeMealCounter, confirmOrder }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [firstItemAdded, setFirstItemAdded] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => { // This will be triggered when mealData changes for the first time
    if (firstItemAdded == false) {
      setSidebarOpen(true);
      setFirstItemAdded(true);
    }
  }, [mealData]);

  return (
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
