import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./BackgroundCover";
import React, { useState, useEffect } from "react";

export default function Confirmation({ confirmedItems }) {

  confirmedItems = sortItems();

  return (
    <div id="confirmation">
      <ContentWrapper>
        <div className="confirmationAlign">
          <ConfirmationText />
        </div>
        <BackgroundCover />
      </ContentWrapper>
    </div>
  );

  function ConfirmationText() {

    return (
      <section className="confirmationMessage">
        <h2>Tack för din beställning!</h2>

        <h4>Det här är din order:</h4>

        <div className="tableContainer">
          <table>
            <tbody>
              <ListedItems />
              <tr>
                <td></td>
                <td></td>
                <td id="sumCell">{getTotal(confirmedItems)} kr</td>
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

  function ListedItems() {
    return confirmedItems.map((item) => {
      const amount = item.count > 1 ? item.count + " x " : "";
      const totalPrice = item.price * item.count;

      return (
        <tr key={item.title}>
          <td style={{ textAlign: "right" }}>{amount}</td>
          <td style={{ textAlign: "left" }}>{item.title}</td>
          <td style={{ textAlign: "right" }}>{totalPrice} kr</td>
        </tr>
      );
    });
  }

  function sortItems() {
    confirmedItems = confirmedItems.filter((item) => item.count > 0);
    confirmedItems.sort((a, b) => {
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

    return confirmedItems;
  }

  function getTotal() {
    let totalSum = 0;

    confirmedItems.forEach((item) => {
      totalSum += item.price * item.count;
    })
    return totalSum;
  }
}


