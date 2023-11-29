import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ mealData, changeMealCounter }) => {
  // State för sidofältets synlighet
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Funktion för att ändra synligheten
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Struktur för navbar
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
        />
      )}
    </nav>
  );
};
export default Navbar;
