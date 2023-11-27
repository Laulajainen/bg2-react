import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import MealObjects from "./components/MealObjects";
import FoodCart from "./components/FoodCart";
import Start from "./components/Start";
<<<<<<< HEAD
import Contact from "./components/Contact";
=======
import Meals from "./components/MealsList";
>>>>>>> master

import { Route, Routes } from "react-router-dom";

const App = () => {

const [mealData, setMealData] = useState(Meals);  //App är förälder till både kundkorg och menysidan, alltså lägger vi datan här.

function changeMealCounter (index, modifier) {   //Funktionen tar emot aktuellt objekts index samt +1 eller -1.
  var tempMeals = mealData.slice();
  tempMeals[index].count += modifier; //Vi kommer åt korrekt objekt via index.
  setMealData(tempMeals);
}

  return (
    <>
      <Navbar />
      <FoodCart mealData={mealData} changeMealCounter={changeMealCounter}/> {/*Data och funktion går iväg*/}
      <div className="container">
        {
          <Routes>
            <Route path="" element={<Start />} />
<<<<<<< HEAD
            <Route path="/menu" element={<MealObjects />} />
            <Route path="/contact" element={<Contact />} />
=======
            <Route path="/menu" element={<MealObjects mealData={mealData} changeMealCounter={changeMealCounter}/>} /> 
            {/* <Route path="Kontakt" element={<Contact />} /> */}
>>>>>>> master
            {/* <Route path="Kundkorg" element={<FoodCart />} /> */}
          </Routes>
        }
      </div>
      <Footer />
    </>
  );
};
export default App;
