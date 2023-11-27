//import styles from "../styles.css"
//import styles from "./subComponent.module.css"

export default function ContentWrapper({ children }) {
  return (
    <div
      className="wrapper"
      // style={{
      //   position: "relative",
      //   backgroundImage: "url(/img/start_bg.jpg)",
      //   backgroundAttachment: "fixed",
      //   backgroundSize: "cover",
      //   width: "100vw",
      //   minHeight: "100vh",
      //   overflowY: "auto", // Allow vertical scrolling when needed
      // }}
    >
      {children}
    </div>
  );
}
