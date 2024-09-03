import "./HamburgerMenu.css";

export const HamburgerMenu = ({ active, setActive }) => {
  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      className={`hamburger-button ${active ? "active" : ""}`}
    >
      <span className="hamburger-line top"></span>
      <span className="hamburger-line middle"></span>
      <span className="hamburger-line bottom"></span>
    </button>
  );
};
