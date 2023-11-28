import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./BackgroundCover";
import React, { useState, useEffect } from "react";

function ListedItems({ result }) {
  return result.map((item) => {
    const amount = item.count > 0 ? item.count + " x " : "";
    const price = item.price * item.count;

    return (
      <tr key={item.title}>
        <td style={{ textAlign: "right" }}>{amount}</td>
        <td style={{ textAlign: "left" }}>{item.title}</td>
        <td style={{ textAlign: "right" }}>{price} kr</td>
      </tr>
    );
  });
}

function ConfirmationText({ mealData }) {
  // var shortList = [];
  // mealData.forEach((item) => {
  //   item.count > 0 && shortList.push(item);
  // });
  // const result = sortItems(shortList);

  const shortList = mealData ? mealData.filter((item) => item.count > 0) : [];
  const result = sortItems(shortList);

  return (
    <section className="confirmationMessage">
      <h2>Tack för din beställning!</h2>

      <h4>Det här är din order:</h4>

      <div className="tableContainer">
        <table>
          <tbody>
            <ListedItems result={result} />
            <tr>
              <td></td>
              <td></td>
              <td id="sumCell">{getTotal(mealData)} kr</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        En bekräftelse och kvitto kommer att skickas till "din angivna mail"
        eller "ditt angivna nummer"
      </p>
    </section>
  );
}

export default function Confirmation({ location }) {
  const confirmedItems = location?.state?.confirmedItems || [];
  // const mealData = confirmedItems;

  // const [mealData, setMealData] = useState([]);

  // useEffect(() => {
  //   // Update mealData when confirmedItems prop changes
  //   setMealData(confirmedItems);
  // }, [confirmedItems]);

  // mealData = [
  //   {
  //     title: "Kycklingspett",
  //     description: "Detta är gott pga. nötter",
  //     containsNuts: true,
  //     containsEggs: false,
  //     containsGluten: false,
  //     type: "Huvudrätt",
  //     price: 100,
  //     count: 2,
  //     mealImage:
  //       "https://cdn.pixabay.com/photo/2018/08/14/07/16/satay-chicken-3604856_960_720.jpg",
  //   },
  //   {
  //     title: "Ugnsrostad potatis",
  //     description: "Det är liksom potatis, vad mer behöver du veta?",
  //     containsNuts: false,
  //     containsEggs: false,
  //     containsGluten: false,
  //     type: "Tillbehör",
  //     price: 50,
  //     count: 1,
  //     mealImage:
  //       "https://cdn.pixabay.com/photo/2018/01/04/11/47/food-3060473_960_720.jpg",
  //   },
  //   {
  //     title: "Kebabspett",
  //     description: "Sams favorit",
  //     price: 99,
  //     containsNuts: false,
  //     containsEggs: false,
  //     containsGluten: true,
  //     type: "Huvudrätt",
  //     count: 0,
  //     mealImage:
  //       "https://cdn.pixabay.com/photo/2018/05/03/05/19/skewer-3370443_960_720.jpg",
  //   },
  //   {
  //     title: "Grillbrickan",
  //     description: "Den tar aldrig slut... aldrig!",
  //     price: 99,
  //     containsNuts: false,
  //     containsEggs: true,
  //     containsGluten: true,
  //     type: "Huvudrätt",
  //     count: 1,
  //     mealImage:
  //       "https://cdn.pixabay.com/photo/2017/01/15/14/26/barbeque-1981640_960_720.jpg",
  //   },
  //   {
  //     title: "Mineralvatten",
  //     description: "Citrus och mynta är nice",
  //     containsNuts: false,
  //     containsEggs: false,
  //     containsGluten: false,
  //     type: "Dryck",
  //     price: 15,
  //     count: 3,
  //     mealImage:
  //       "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
  //   },
  // ];

  return (
    <div id="confirmation">
      <ContentWrapper>
        <div className="confirmationAlign">
          <ConfirmationText mealData={confirmedItems} />
        </div>
        <BackgroundCover />
      </ContentWrapper>
    </div>
  );
}

function sortItems(result) {
  result.sort((a, b) => {
    const typeA = a.type.toUpperCase();
    const typeB = b.type.toUpperCase();
    if (typeA < typeB) {
      return -1; //A är "innan" B, flytta ner i listan.
    }
    if (typeA > typeB) {
      return 1; //Upp i listan.
    }
    return 0; //Om inget av ovan så är de lika.
  });
  return result;
}

function getTotal(mealData) {
  let totalSum = 0;
  // mealData.forEach((item) => {
  //   totalSum += item.price;
  // });

  if (mealData && mealData.length > 0) {
    mealData.forEach((item) => {
      totalSum += item.price;
    });
  }
  return totalSum;
}
