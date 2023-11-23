export default function Confirmation( meals ) {
    meals = [
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

    meals.sort((a, b) => a.type - b.type);  //sorterar på titel
    meals.sort((a, b) => {
        const nameA = a.type.toUpperCase(); // ignore upper and lowercase
        const nameB = b.type.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        
        // names must be equal
        return 0;
      });

    console.log(meals);

    const result = Object.groupBy(meals, ({ title }) => title);

    console.log(result);

    function ConfirmationText() {
        return (
        <section className="startText" style={{ maxheight: "fitcontent", margin: "5vh", padding: "2em", maxWidth: "20em", 
        backgroundColor: "rgba(255,255,255,0.5)", fontSize: "21px", zIndex: 1, backdropFilter: "blur(4px)",
        textAlign: "center" }}>
            <h2>Tack för din beställning!</h2>

            <h4>Det här är din order:</h4>

            <div style={{display: "flex", justifyContent: "center"}}>
                <table>
                    {Object.entries(result).map(([key, value]) => {
                        const amount = value.length > 0 ? value.length + " x " : "";
                        return (
                            <tr>
                                <td style={{ textAlign: "right" }}>{amount}</td>
                                <td style={{ textAlign: "left" }}>{key}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>

            <p>En bekräftelse och kvitto kommer att skickas till
            "din angivna mail" eller "ditt angivna nummer"
            </p>
        </section>
        )
    }

    return (
        <div id="startWrapper" style={{ 
            position: "relative",
            backgroundImage: 'url(/img/start_bg.jpg)',
            backgroundAttachment: "fixed", 
            backgroundSize: "cover",
            width: "100vw",
            minHeight: "100vh",
            overflowY: "auto",    // Allow vertical scrolling when needed
            }}>     
            <div style={{ display: "flex", flex: 1, flexGrow: 1, justifyContent: "center", alignContent: "center"}}>
                <ConfirmationText />
            </div>
            <div style={{
                position: "fixed", /* Sit on top of the page content */
                width: "100%", /* Full width (cover the whole page) */
                height: "100vh", /* Full height (cover the whole page) */
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zindex: 2, 
                overflowY: "auto",
                backgroundColor: "rgba(255,255,255,0.2)" }}>
            </div>
        </div>
    )
}