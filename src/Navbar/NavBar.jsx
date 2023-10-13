import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <h1 className="navLogo">TechyStar.</h1>
      <ul className="navList">
        <li className="navListItem">
          <HashLink className="navLink" smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li className="navListItem">
          <Link className="navLink" to="/contact">
            Contact
          </Link>
        </li>
        <li className="navListItem">
          <HashLink className="navLink" smooth to="/#about">
            About
          </HashLink>
        </li>
        <li className="navListItem">
          <HashLink className="navLink" smooth to="/#brand">
            Brands
          </HashLink>
        </li>
        <li className="navListItem">
          <Link className="navLink" to="/service">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}
