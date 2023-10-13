import SocialLink from "./SocialLink";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle,
} from "react-icons/ai";
import "./Brands.css";
export default function Brands() {
  return (
    <section id="brand">
      <div className="brand">
        <h2>Brands</h2>
        <ul className="brandList">
          <li className="brandListItem">
            <SocialLink
              delay={"0s"}
              logo={<AiFillAmazonCircle className="logo" size={"3.5rem"} />}
              title="Amazon"
            />
          </li>
          <li className="brandListItem">
            <SocialLink
              delay={"0.2s"}
              logo={<AiFillYoutube className="logo" size={"3.5rem"} />}
              title="Youtube"
            />
          </li>
          <li className="brandListItem">
            <SocialLink
              delay={"0.4s"}
              logo={<AiFillInstagram className="logo" size={"3.5rem"} />}
              title="Instagram"
            />
          </li>
          <li className="brandListItem">
            <SocialLink
              delay={"0.6s"}
              logo={<AiFillGoogleCircle className="logo" size={"3.5rem"} />}
              title="Google"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
