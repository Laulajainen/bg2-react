import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { TiShoppingCart } from "react-icons/ti";

import { Link } from "react-router-dom";
import { useState } from "react";
import Foodcart from "../FoodCart";
function CartButton({ mealData, changeMealCounter }) {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} component
      </button>
      {show ? (
        <Foodcart mealData={mealData} changeMealCounter={changeMealCounter} />
      ) : null}
    </div>
  );
}
const Navbar = ({ mealData, changeMealCounter }) => {
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
        <CartButton mealData={mealData} changeMealCounter={changeMealCounter} />
      </ul>
    </nav>
  );
};

export default Navbar;
