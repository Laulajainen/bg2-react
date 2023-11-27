import React, { useState, useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import BackgroundCover from "./Background";

export default function Start() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // function handleScroll() {
  //   const position = window.scrollY;
  //   console.log(position);
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const textContent = (
    <p
      className="startText"
      style={{
        margin: "5vh",
        padding: "2em",
        maxWidth: "40em",
        backgroundColor: "rgba(255,255,255,0.5)",
        fontSize: "21px",
        zIndex: 1,
        backdropFilter: "blur(4px)",
      }}
    >
      Consectetur officia nisi voluptate adipisicing cillum magna officia sint
      duis Lorem. Eu dolor nostrud aliqua ullamco ad Lorem. Reprehenderit fugiat
      incididunt mollit nostrud ullamco aliquip Lorem quis laboris in aute
      mollit. Cillum qui deserunt velit quis reprehenderit deserunt labore.
      Laboris officia esse officia culpa laboris Lorem Lorem laboris
      exercitation. Eit veniam culpa aute culpa sunt ad officia dolore aute
      reprehenderit non nostrud cillum. Consectetur officia nisi voluptate
      adipisicing cillum magna officia sint duis Lorem. Eu dolor nostrud aliqua
      ullamco ad Lorem. Reprehenderit fugiat incididunt mollit nostrud ullamco
      aliquip Lorem quis laboris in aute mollit. Cillum qui deserunt velit quis
      reprehenderit deserunt labore. Laboris officia esse officia culpa laboris
      Lorem Lorem laboris exercitation. Eit veniam culpa aute culpa sunt ad
      officia dolore aute reprehenderit non nostrud cillum.
    </p>
  );

  const textArray = [textContent, textContent, textContent];
  const videoBGPaths = [
    "/video/krabbkok.mp4",
    "/video/spett_closeup.mp4",
    "/video/spett_eld.mp4",
  ];

  function Video() {
    let randomPath = Math.floor(Math.random() * 3);
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
        >
          <source src={videoBGPaths[randomPath]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  function TextSection() {
    return textArray.map((textParagraph, index) => {
      const position = index % 2 === 0 ? "flex-start" : "flex-end";
      return (
        <div key={index} style={{ display: "flex", justifyContent: position }}>
          {textParagraph}
        </div>
      );
    });
  }

  return (
    <ContentWrapper>
      <Video />
      <div id="startTextWrapper">
        <TextSection />
      </div>

      <BackgroundCover />
    </ContentWrapper>
  );
}
