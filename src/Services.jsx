import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import adword from "./assets/adwords.jpg";
import facebook from "./assets/facebook.jpg";
import seo from "./assets/seo.jpg";
export default function Services() {
  return (
    <section id="services" style={{ width: "100vw" }}>
      <Carousel
        className="carousel"
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={adword} alt="Service 1" />
        </div>
        <div>
          <img src={facebook} alt="Service 2" />
        </div>
        <div>
          <img src={seo} alt="Service 3" />
        </div>
      </Carousel>
    </section>
  );
}
