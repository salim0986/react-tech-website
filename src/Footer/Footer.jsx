import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-one">
        <h3>TechyStar</h3>
        <p>&copy;all rights reserved</p>
      </div>
      <div className="footer-two">
        <h3>Follow us</h3>
        <Link to="https://www.youtube.com/" target="blank">
          Youtube
        </Link>
        <Link to="https://www.instagram.com/" target="blank">
          Instagram
        </Link>
        <Link to="https://github.com/salim0986" target="blank">
          Github
        </Link>
      </div>
    </footer>
  );
}
