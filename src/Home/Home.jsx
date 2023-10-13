import About from "../About/About";
import "./Home.css";
import assist from "../assets/assist.png";
import Brands from "../Brands/Brands";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section id="home">
        <div className="homeText">
          <h1 className="homeHeading">TechyStar</h1>
          <p className="homePara">Solution to all your problems</p>
        </div>
      </section>
      <section className="assist">
        <div>
          <img className="assistant" src={assist} alt="engineer png image" />
        </div>
        <p className="assistPara">
          We are your one and only solution to the tech problems you face every
          day. We are leading tech company whose aim is to increase the problem
          solving ability in children.
        </p>
      </section>
      <About />
      <Brands />
      <Outlet />
    </>
  );
}
