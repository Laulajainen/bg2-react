import "./App.css";
import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import FoodCart from "./components/FoodCart";
import meals from "./components/MealsList";
const App = () => (
  <div>
    <Navbar />
    <MealObjects meals={meals} />
    <FoodCart meals={meals} />
    <Footer />
  </div>
);

export default App;
