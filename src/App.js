import "./App.css";
import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import FoodCart from "./components/FoodCart";
const App = () => (
  <div>
    <Navbar />
    <MealObjects />
    <FoodCart />
    <Footer />
  </div>
);

export default App;
