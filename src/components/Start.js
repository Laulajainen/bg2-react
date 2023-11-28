import React from "react";
import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./BackgroundCover";
import startParagraphs from "./StartParagraphs";  //Lyfter in inpsirationstext om restaurangen.

export default function Start() {

  const videoBGPaths = [  //Pathing till bakgrundsvideo.
    "/video/krabbkok.mp4", "/video/spett_closeup.mp4", "/video/spett_eld.mp4"
  ];

  function Video() {
    let randomPath = Math.floor(Math.random() * 3); //Väljer bakgrundfilm på slump.
    return (
      <div className="videoContainer" >
        <video autoPlay muted loop id="backgroundVideo">
          <source src={videoBGPaths[randomPath]} type="video/mp4" />  {/*Slumpad path.*/}
          Din webbläsare stödjer inte video.
        </video>
      </div>
    );
  }

  function TextSection() {  //Här bakas paragrafer från inspo-texten ut i components. 
    return startParagraphs.map((text, index) => {   
      const position = index % 2 === 0 ? "flex-start" : "flex-end"; {/* Varannan vänster/höger */}
      return (
        <div className="textBlockHolder" key={index} 
        style={{ display: "flex", justifyContent: position }}>  {/* Dynamisk positionering, därför lämnad utanför css.*/}
          <p className="startTextBlock">{text}</p>
        </div>
      );
    });
  }

  return (
    <div id="start">
      <ContentWrapper>
        <Video />
        <div id="startTextWrapper">
          <TextSection />
        </div>
        <BackgroundCover />
      </ContentWrapper>
      </div>
  );
}