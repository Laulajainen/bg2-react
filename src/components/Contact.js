import GoogleMap from "./Maps";

const text = (
  <h6
    className="contact-content"
    style={{
      width: "100vh",
      margin: "10vh",
      padding: "2em",
      maxWidth: "40em",
      backgroundColor: "rgba(255,255,255,0.5)",
      fontSize: "21px",
      zIndex: 1,
      backdropFilter: "blur(4px)",
    }}
  >
    {" "}
    Kontakta oss för bokning av catering, bröllop eller svensexa{" "}
  </h6>
);
const text1 = (
  <h6
    className="contact-content"
    style={{
      width: "40vh",
      margin: "10vh",
      padding: "2em",
      maxWidth: "40em",
      backgroundColor: "rgba(255,255,255,0.5)",
      fontSize: "21px",
      zIndex: 1,
      backdropFilter: "blur(4px)",
    }}
  >
    {" "}
    Telefon: +46726412894{" "}
  </h6>
);
const text2 = (
  <h6
    className="contact-content"
    style={{
      width: "40vh",
      margin: "10vh",
      padding: "2em",
      maxWidth: "40em",
      backgroundColor: "rgba(255,255,255,0.5)",
      fontSize: "21px",
      zIndex: 1,
      backdropFilter: "blur(4px)",
    }}
  >
    {" "}
    Mejl: boka@bistro.net{" "}
  </h6>
);
const text3 = (
  <h6 className="contact-content">
    {" "}
    Vill du bli vår nya kollega? Hör av dig till jobb@bistro.net{" "}
  </h6>
);

export default function Contact() {
  return (
    <>
      <div
        className="app__bg app__wrapper"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          backgroundImage: "url(/assets/bgcontact.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="app__wrapper_info">
          <div
            style={{
              width: "150vh",
              margin: "5vh",
              padding: "2em",
              maxWidth: "40em",
              backgroundColor: "rgba(255,255,255,0.5)",
              fontSize: "21px",
              zIndex: 1,
              backdropFilter: "blur(4px)",
            }}
          >
            <h1>Kontakt</h1>
            <div className="app__wrapper_one">{text}</div>
            <div
              className="app__wrapper_one"
              style={{ display: "flex", flexDirection: "row" }}
            >
              {text1}
              {text2}
            </div>
            <div
              style={{
                width: "100vh",
                margin: "10vh",
                padding: "2em",
                maxWidth: "40em",
                backgroundColor: "rgba(255,255,255,0.5)",
                fontSize: "21px",
                zIndex: 1,
                backdropFilter: "blur(4px)",
              }}
            >
              <div id="googleMapss" className="maps">
                MAPS
              </div>
            </div>
            <div className="app__wrapper_one">{text3}</div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed" /* Sit on top of the page content */,
          width: "100%" /* Full width (cover the whole page) */,
          height: "100%" /* Full height (cover the whole page) */,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zindex: 2,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      ></div>
    </>
  );
}
