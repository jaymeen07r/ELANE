import "./css/Navbar.css";
import logo from "./assets/icons/icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <span>ÉLANE</span>
      </a>

      <button className="explore-btn">
        <p>☰</p>
      </button>
    </nav>
  );
}

export default Navbar;
