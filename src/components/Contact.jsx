import images from "../constants/images";

const text = (
  <h6 className="contact-content" style={{ width: "100vh" }}>
    {" "}
    Kontakta oss för bokning av catering, bröllop eller svensexa{" "}
  </h6>
);
const text1 = (
  <h6 className="contact-content" style={{ width: "100vh" }}>
    {" "}
    Telefon: +46726412894 Mejl: boka@bistro.net{" "}
  </h6>
);
const text2 = (
  <h6 className="contact-content" style={{ width: "100vh" }}>
    {" "}
    Vill du bli vår nya kollega? Hör av sig till jobb@bistro.net{" "}
  </h6>
);

function BackGroundImage() {
  return (
    <>
      <div
        className="Contact_image"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={images.logo}
          alt="topleftlogo"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            opacity: "40%",
          }}
        ></img>
      </div>
    </>
  );
}

export default function Contact() {
  return (
    <>
      <div className="app__bg app__wrapper" style={{ display: "flex" }}>
        <div className="app__wrapper_info">
          <h1>Kontakt</h1>
          <div style={{ display: "flex" }}>
            <div className="app__wrapper_one">{text}</div>
            <div className="app__wrapper_one">{text1}</div>
          </div>
          <div className="app__wrapper_one">{text2}</div>
        </div>
        {/* <BackGroundImage /> */}
      </div>
    </>
  );
}
