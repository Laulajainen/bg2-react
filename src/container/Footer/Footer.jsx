import React from "react";
//import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Kontakta Oss</h1>
        <p className="p__opensans">Tucgatan 1, Linköping, 565 37, Sverige</p>
        <p className="p__opensans">+46726412894</p>
      </div>

      <div className="footer-links_work">
        <h1 className="app__footer-headtext">Öppettider</h1>
        <p> Måndag-Fredag:</p>
        <p> 09:00 - 19:00</p>
        <p> Lördag-Söndag:</p>
        <p>11:00 - 22:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">&copy;2023 Bistro.Net</p>
    </div>
  </div>
);
export default Footer;
