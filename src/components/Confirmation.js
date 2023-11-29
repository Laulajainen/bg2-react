import ContentWrapper from "./BackgroundComponents/ContentWrapper";
import BackgroundCover from "./BackgroundComponents/BackgroundCover";
import React from "react";

export default function Confirmation({ confirmedItems }) {
  confirmedItems = sortItems(); //Indata trimmas och sorteras efter typ (varmrätt, dryck, o.s.v.).

  return (
    <div id="confirmation">
      <ContentWrapper> {/* Standardwrapper. */}
        <div className="confirmationAlign">
          <ConfirmationText />
        </div>
        <BackgroundCover /> {/* Standardfilter på bakgrund. */}
      </ContentWrapper>
    </div>
  );

  function ConfirmationText() {
    {
      /* Textruta där köpet presenteras. */
    }

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
    {/* Stolpar upp objekt från arrayen in i tabellen. */}
    return confirmedItems.map((item) => {
      const amount = item.count > 1 ? item.count + " x " : ""; //Enstaka objekt av en typ skrivs utan "# x "
      const totalPrice = item.price * item.count; //Den aktuella radens totala kostnad. Ej totalen för hela köpet.

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
    //Trimmar och sorterar indata.
    confirmedItems = confirmedItems.filter((item) => item.count > 0); //Trimmar bort objekt som inte klickats i av användaren.
    confirmedItems.sort((a, b) => {
      //Kvarvarande array sorteras utefter typ av objekt. Varmrätt med varmrätt o.s.v.
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
    //Beräknar totalkostnad för ordern.
    let totalSum = 0;

    confirmedItems.forEach((item) => {
      totalSum += item.price * item.count; //(Priset) * (så många ex. av objektet som är tillagda).
    });
    return totalSum;
  }
}
