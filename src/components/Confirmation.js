export default function Confirmation() {
    function ConfirmationText() {
        return (
        <section className="startText" style={{ maxheight: "fitcontent", margin: "5vh", padding: "2em", maxWidth: "20em", 
        backgroundColor: "rgba(255,255,255,0.5)", fontSize: "21px", zIndex: 1, backdropFilter: "blur(4px)",
        textAlign: "center" }}>
            <h2>Tack för din beställning!</h2>

            <h4>Det här är din order:</h4>

            <ul style={{width: "15em"}}>
                <li>Mycket ost x 2</li>
                <li>Extra bananer</li>
                <li>Kebabspett x 6</li>
                <li>Troca-cola x 4</li>
            </ul> 

            <p>En bekräftelse och kvitto kommer att skickas till
            "din angivna mail" eller "ditt angivna nummer"
            </p>
        </section>
        )
    }

    return (
        <div id="startWrapper" style={{ 
            backgroundImage: 'url(/img/start_bg.jpg)',
            backgroundAttachment: "fixed", 
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh"}}>     
            <div style={{ heihgt: "100%", display: "flex", justifyContent: "center", alignContent: "center"}}>
                <ConfirmationText />
            </div>
            <div style={{
                position: "fixed", /* Sit on top of the page content */
                width: "100%", /* Full width (cover the whole page) */
                height: "100%", /* Full height (cover the whole page) */
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zindex: 2, 
                backgroundColor: "rgba(255,255,255,0.2)" }}>
            </div>
        </div>
    )
}

