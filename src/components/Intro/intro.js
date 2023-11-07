import React from "react";
import "./intro.css";
import bg from "../../assets/introImage.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireMe.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Pratibha</span>
          <br /> Frontend Engineer
        </span>
        <p className="introPara">
          As a Frontend Developer, my primary responsibility involves crafting
          and maintaining interactive user interfaces using React and JavaScript
          within a collaborative team environment. I contribute to the
          development of web applications, implementing new features, optimizing
          performance, and ensuring an intuitive user experience. Daily tasks
          encompass utilizing React and JavaScript to enhance UI, collaborating
          with team members to maintain and improve existing features, and
          employing tools like Node.js, Enzyme, and Jest for effective testing
          and codebase robustness.
        </p>

        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behaviour: "smooth" });
            }}
          >
            <img src={btnImg} alt="" className="btnImg"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="ProfileImage" className="bg" />
    </section>
  );
}

export default Intro;
