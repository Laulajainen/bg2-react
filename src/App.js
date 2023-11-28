import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import Start from "./components/Start";
import Contact from "./components/Contact";
import Meals from "./components/MealsList";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [mealData, setMealData] = useState(Meals); //App är förälder till både kundkorg och menysidan, alltså lägger vi datan här.

  function changeMealCounter(index, modifier) {
    //Funktionen tar emot aktuellt objekts index samt +1 eller -1.
    var tempMeals = mealData.slice();
    tempMeals[index].count += modifier; //Vi kommer åt korrekt objekt via index.
    setMealData(tempMeals);
  }

  return (
    <>
      <Navbar mealData={mealData} changeMealCounter={changeMealCounter} />

      <div className="container">
        {
          <Routes>
            <Route path="" element={<Start />} />
            <Route
              path="/menu"
              element={
                <MealObjects
                  mealData={mealData}
                  changeMealCounter={changeMealCounter}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        }
      </div>
      <Footer />
    </>
  );
};
export default App;
