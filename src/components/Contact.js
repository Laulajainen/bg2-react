import ContentWrapper from "./BackgroundComponents/ContentWrapper";
import BackgroundCover from "./BackgroundComponents/BackgroundCover";

//Information om denna vy
const text = (
  <h6 className="contact-content">
    {" "}
    Kontakta oss för bokning av catering, bröllop eller svensexa{" "}
  </h6>
);
const text1 = <h6 className="contact-content"> Telefon: +46726412894 </h6>;
const text2 = <h6 className="contact-content"> Mejl: boka@bistro.net </h6>;

const text3 = (
  <h6 className="contact-content">
    {" "}
    Vill du bli vår nya kollega? Hör av dig till jobb@bistro.net{" "}
  </h6>
);

//Länk till Google-maps karta
const url =
  "https://www.google.com/maps/place/TUC+Sweden+Link%C3%B6ping/@58.4344701,15.5954871,17z/data=!4m6!3m5!1s0x46596f7bebd18f03:0xc3553c64a8fe49f5!8m2!3d58.4345026!4d15.5968695!16s%2Fg%2F11fz7nlnff?entry=ttu";

//Komponent för karta och adress, klickar man på någon av dessa skickas man till google.maps
function Maps() {
  return (
    <div className="click-maps">
      <div className="contact-content">
        {" "}
        <img src="./images/map.JPG" alt="map" onClick={() => window.open(url, "_blank")} />
        <div>
          <h6 onClick={() => window.open(url, "_blank")} style={{ cursor: "pointer" }}>
            Tucgatan 1
          </h6>
          <h6 onClick={() => window.open(url, "_blank")} style={{ cursor: "pointer" }}>
            565 37 Linköping
          </h6>
        </div>{" "}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div id="contact">
      <ContentWrapper>
        <div className="contact_info">
          <div className="contact-container">
            <h1>Kontakt</h1>
            <div className="contact_one">
              <div style={{ display: "flex", justifyContent: "center" }}>{text}</div>
              <div className="contact_two">
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
    </div>
  );
}
