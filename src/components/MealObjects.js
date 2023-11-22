import { React, useState } from "react";
import FoodCart from "./FoodCart";
function MealContent({ meals }) {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className="mealBoxes">
      <h3>{meals.title}</h3>
      <img className="mealImages" src={meals.mealImage} alt="bild" />
      <p>{meals.description}</p>
      <div className="buttonContainer">
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

function ProgramTable({ meals }) {
  const rows = [];
  meals.forEach((meals) => {
    rows.push(<MealContent meals={meals} key={meals.title} />);
  });
  return <div id="meals">{rows}</div>;
}
function FilteredProgramTable({ meals }) {
  return (
    <div>
      <ProgramTable meals={meals}></ProgramTable>
    </div>
  );
}
const meals = [
  {
    title: "Laxen",
    description: "Död fisk",
    containsNuts: false,
    containsEggs: false,
    containsGluten: false,
    type: "Huvudrätt",
    mealImage: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
  },
  {
    title: "Kycklingspett",
    description: "Detta är gott pga. nötter",
    containsNuts: true,
    containsEggs: false,
    containsGluten: false,
    type: "Huvudrätt",
    mealImage: "https://cdn.pixabay.com/photo/2018/08/14/07/16/satay-chicken-3604856_960_720.jpg",
  },
  {
    title: "Ugnsrostad potatis",
    description: "Det är liksom potatis, vad mer behöver du veta?",
    containsNuts: false,
    containsEggs: false,
    containsGluten: false,
    type: "Tillbehör",
    mealImage: "https://cdn.pixabay.com/photo/2018/01/04/11/47/food-3060473_960_720.jpg",
  },
  {
    title: "Mineralvatten",
    description: "Citrus och mynta är nice",
    containsNuts: false,
    containsEggs: false,
    containsGluten: false,
    type: "Dryck",
    mealImage: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
  },
];
function MealObjects() {
  return <FilteredProgramTable meals={meals} />;
}

export default MealObjects;
