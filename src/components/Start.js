export default function Start() {

    const textContent = (
        <p className="startText" style={{ margin: "15em", padding: "3em", maxWidth: "40em", backgroundColor: "rgba(255,255,255,0.5)" }}>
            Consectetur officia nisi voluptate adipisicing cillum magna officia sint duis Lorem.
            Eu dolor nostrud aliqua ullamco ad Lorem. Reprehenderit fugiat incididunt mollit nostrud ullamco aliquip
            Lorem quis laboris in aute mollit. Cillum qui deserunt velit quis reprehenderit deserunt labore. Laboris
            officia esse officia culpa laboris Lorem Lorem laboris exercitation. Eit veniam culpa aute culpa sunt ad
            officia dolore aute reprehenderit non nostrud cillum.
            Consectetur officia nisi voluptate adipisicing cillum magna officia sint duis Lorem.
            Eu dolor nostrud aliqua ullamco ad Lorem. Reprehenderit fugiat incididunt mollit nostrud ullamco aliquip
            Lorem quis laboris in aute mollit. Cillum qui deserunt velit quis reprehenderit deserunt labore. Laboris
            officia esse officia culpa laboris Lorem Lorem laboris exercitation. Eit veniam culpa aute culpa sunt ad
            officia dolore aute reprehenderit non nostrud cillum.
        </p>
    );

    const textArray = [textContent, textContent, textContent]
    let position = "right";

    function Video() {
        return (
          <div style={{ position: 'relative' }}>
            <video
              autoPlay
              muted
              loop
              id="backgroundVideo"
              style={{ width: '100%', objectFit: 'cover' }}
            >
              <source src="/video/krabbkok.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }

    return (
        <div id="startWrapper" style={{ backgroundImage: 'url(/img/start_bg.jpg)', backgroundAttachment: "fixed", backgroundSize: "cover" }}>
            <Video />
            <div id="startTextWrapper">
                {textArray.map((textParagraph, index) => {
                    const position = index % 2 === 0 ? "flex-start" : "flex-end";
                    return (
                        <div key={index} style={{ display: "flex", justifyContent: position }}>
                            {textParagraph}
                        </div>
                    );
                })}
            </div>         
        </div>
    )
}