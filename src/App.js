import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Meny" element={<Menue />} />
          <Route path="Kontakt" element={<Contact />} />
          <Route path="Kundkorg" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
