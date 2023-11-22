import React from "react";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={images.toplogo} alt="topleftlogo"></img>
      </div>

      <ul className="homelinkul">
        <li className="homelink">
          <a href="#home">Hem</a>
        </li>
      </ul>
      <ul className="navbar-links-to-right">
        <li className="menuelink">
          <a href="#menu">Meny</a>
        </li>
        <li className="contactlink">
          <a href="#contact">Kontakt</a>
        </li>
        <li className="cartlink">
          <a href="#cart">Kundkorg</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
