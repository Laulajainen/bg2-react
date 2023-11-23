import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import FoodCart from "./components/FoodCart";
import Start from "./components/Start";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {
          <Routes>
            <Route path="" element={<Start />} />
            <Route path="/menu" element={<MealObjects />} />
            {/* <Route path="Kontakt" element={<Contact />} /> */}
            {/* <Route path="Kundkorg" element={<FoodCart />} /> */}
          </Routes>
        }
      </div>
      <Footer />
    </>
  );
};

export default App;
