import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { TiShoppingCart } from "react-icons/ti";

import { Link } from "react-router-dom";
import { useState } from "react";
import Foodcart from "../FoodCart";

const Navbar = ({ mealData, changeMealCounter }) => {
  function CartButton({ mealData, changeMealCounter }) {
    const [show, setShow] = useState(true);

    return (
      <div>
        <button className="cartbutton" onClick={() => setShow(!show)}>
          <TiShoppingCart />
        </button>
        {show ? (
          <Foodcart mealData={mealData} changeMealCounter={changeMealCounter} />
        ) : null}
      </div>
    );
  }

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
        <CartButton
          className="cartbutton"
          mealData={mealData}
          changeMealCounter={changeMealCounter}
        ></CartButton>
      </ul>
    </nav>
  );
};

export default Navbar;
