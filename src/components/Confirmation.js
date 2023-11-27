import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./Background";

function ListedItems({ result }) {
  return Object.entries(result).map(([key, value]) => {
    const amount = value.length > 0 ? value.length + " x " : "";
    const price = value[0].cost * value.length;

    return (
      <tr>
        <td key={key + amount} style={{ textAlign: "right" }}>
          {amount}
        </td>
        <td key={key} style={{ textAlign: "left" }}>
          {key}
        </td>
        <td key={key + price} style={{ textAlign: "right" }}>
          {price} kr
        </td>
      </tr>
    );
  });
}

function ConfirmationText({ meals }) {
  const result = sortItems(meals);
  return (
    <section
      className="startText"
      style={{
        maxheight: "fitcontent",
        margin: "5vh",
        padding: "2em",
        maxWidth: "20em",
        backgroundColor: "rgba(255,255,255,0.5)",
        fontSize: "21px",
        zIndex: 1,
        backdropFilter: "blur(4px)",
        textAlign: "center",
      }}
    >
      <h2>Tack för din beställning!</h2>

      <h4>Det här är din order:</h4>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tbody>
            <ListedItems result={result} />
            <tr>
              <td></td>
              <td></td>
              <td style={{ textAlign: "right", borderTop: "1px solid" }}>
                {getTotal(meals)} kr
              </td>
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

export default function Confirmation(meals) {
  meals = [
    {
      title: "Kycklingspett",
      description: "Detta är gott pga. nötter",
      containsNuts: true,
      containsEggs: false,
      containsGluten: false,
      type: "Huvudrätt",
      cost: 100,
      mealImage:
        "https://cdn.pixabay.com/photo/2018/08/14/07/16/satay-chicken-3604856_960_720.jpg",
    },
    {
      title: "Kycklingspett",
      description: "Detta är gott pga. nötter",
      containsNuts: true,
      containsEggs: false,
      containsGluten: false,
      type: "Huvudrätt",
      cost: 100,
      mealImage:
        "https://cdn.pixabay.com/photo/2018/08/14/07/16/satay-chicken-3604856_960_720.jpg",
    },
    {
      title: "Ugnsrostad potatis",
      description: "Det är liksom potatis, vad mer behöver du veta?",
      containsNuts: false,
      containsEggs: false,
      containsGluten: false,
      type: "Tillbehör",
      cost: 50,
      mealImage:
        "https://cdn.pixabay.com/photo/2018/01/04/11/47/food-3060473_960_720.jpg",
    },
    {
      title: "Mineralvatten",
      description: "Citrus och mynta är nice",
      containsNuts: false,
      containsEggs: false,
      containsGluten: false,
      type: "Dryck",
      cost: 15,
      mealImage:
        "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
    },
  ];

  return (
    <ContentWrapper>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ConfirmationText meals={meals} />
      </div>
      <BackgroundCover />
    </ContentWrapper>
  );
}

function sortItems(meals) {
  meals.sort((a, b) => {
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
  return Object.groupBy(meals, ({ title }) => title);
}

function getTotal(meals) {
  let totalSum = 0;
  meals.forEach((item) => {
    totalSum += item.cost;
  });
  return totalSum;
}
