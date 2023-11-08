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
          
I am enthusiastic Frontend Engineer with a passion for crafting user-centric web apps. With strong people skills for seamless collaboration and committed to continuous learning and delivering impactful solutions .
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
