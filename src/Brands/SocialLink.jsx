import { Link } from "react-router-dom";
import { useRef } from "react";
export default function SocialLink({ logo, title, delay }) {
  const divRef = useRef(null);
  function handleMouseEnter() {
    const div = divRef.current;
    div.style.backgroundColor = "rgb(59,59,59)";
    console.log(div.children);
    div.children[0].style.color = "white";
    div.children[1].style.color = "white";
  }
  function handleMouseLeave() {
    const div = divRef.current;
    div.style.backgroundColor = "white";
    div.children[0].style.color = "rgb(59,59,59)";
    div.children[1].style.color = "rgb(59,59,59)";
  }
  return (
    <>
      <Link className="socialLink" to="/#brands">
        <div
          style={{ animationDelay: delay }}
          ref={divRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logo}
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
}
