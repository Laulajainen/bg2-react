export default function ContentWrapper({ children }) {
  return (
    <div
      id="confirmtWrapper"
      style={{
        position: "relative",
        backgroundImage: "url(/img/start_bg.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto", // Allow vertical scrolling when needed
      }}
    >
      {children}
    </div>
  );
}
