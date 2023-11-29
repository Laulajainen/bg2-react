import "./App.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import Start from "./components/Start";
import Contact from "./components/Contact";
import MealsList from "./components/MealsList";
import { Route, Routes, useNavigate } from "react-router-dom";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [mealData, setMealData] = useState(MealsList); //App är förälder till både kundkorg och menysidan, alltså lägger vi datan här.
  const [confirmedItems, setConfirmedItems] = useState([]);
  const navigate = useNavigate();

  function changeMealCounter(index, modifier) {
    setMealData((prevMealData) => {
      const tempMeals = [...prevMealData];
      tempMeals[index] = { ...tempMeals[index], count: tempMeals[index].count + modifier };
      return tempMeals;
    });
  }

  function confirmOrder() {
    setConfirmedItems(mealData.slice());
    setMealData(MealsList);
    navigate("/confirmation", { confirmedItems: { confirmedItems } });
  }

  return (
    <>
      <Navbar
        mealData={mealData}
        changeMealCounter={changeMealCounter}
        confirmOrder={confirmOrder}
      />

      <div className="container">
        {
          <Routes>
            <Route path="" element={<Start />} />
            <Route
              path="/menu"
              element={<MealObjects mealData={mealData} changeMealCounter={changeMealCounter} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/confirmation"
              element={<Confirmation confirmedItems={confirmedItems} />}
            />
          </Routes>
        }
      </div>
      <Footer />
    </>
  );
};
export default App;
