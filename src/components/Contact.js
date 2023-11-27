import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./Background";

const text = (
  <h6
    className="contact-content"
    style={{
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
const map = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      margin: "10vw",
      padding: "2em",
      backgroundColor: "rgba(255,255,255,0.5)",
      fontSize: "21px",
      zIndex: 1,
      backdropFilter: "blur(4px)",
    }}
  >
    <h6 className="contact-content">
      {" "}
      <img src="./assets/map.JPG" style={{ width: "100%" }} />
      <div
        style={{
          padding: "5vh",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "21px",
        }}
      >
        <div>Tucgatan 1</div>
        <div>565 37 Linköping</div>
      </div>{" "}
    </h6>
  </div>
);
const text3 = (
  <h6 className="contact-content">
    {" "}
    Vill du bli vår nya kollega? Hör av dig till jobb@bistro.net{" "}
  </h6>
);

const url =
  "https://www.google.com/maps/place/TUC+Sweden+Link%C3%B6ping/@58.4344701,15.5954871,17z/data=!4m6!3m5!1s0x46596f7bebd18f03:0xc3553c64a8fe49f5!8m2!3d58.4345026!4d15.5968695!16s%2Fg%2F11fz7nlnff?entry=ttu";

function Maps() {
  return (
    <div>
      <div
        className="click-maps"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10vw",
          padding: "2em",
          backgroundColor: "rgba(255,255,255,0.5)",
          fontSize: "21px",
          zIndex: 1,
          backdropFilter: "blur(4px)",
        }}
      >
        <h6 className="contact-content">
          {" "}
          <img
            src="./assets/map.JPG"
            onClick={() => window.open(url, "_blank")}
            style={{ width: "100%", cursor: "pointer" }}
          />
          <div
            style={{
              padding: "5vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              fontSize: "21px",
            }}
          >
            <div
              onClick={() => window.open(url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              Tucgatan 1
            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              565 37 Linköping
            </div>
          </div>{" "}
        </h6>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <ContentWrapper>
        <div
          className="contact_info"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              fontSize: "21px",
              flexDirection: "column",
              zIndex: 1,
              backdropFilter: "blur(4px)",
              maxWidth: "100vw",
            }}
          >
            <h1>Kontakt</h1>
            <div
              className="contact_one"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "40em",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                {text}
              </div>
              <div
                className="contact_one"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {text1}
                {text2}
              </div>

              <Maps />
              {text3}
            </div>
          </div>
        </div>

        <BackgroundCover />
      </ContentWrapper>
    </>
  );
}
