export default function Start() {
    const textContent = (
        <p className="startText" style={{ maxWidth: "40em" }}>
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

    return (
        <div id="startTextWrapper" style={{ paddingTop: "80vh"}}>
            {textArray.map((textParagraph, index) => {
                position = index % 2 === 0 ? "left" : "right";
                return (
                    <div key={index} style={{ display: "flex", justifyContent: position, padding: "15em"}}>
                        {textParagraph}
                    </div>
                );
            })}
        </div>
    )
}