import React from "react";
import "./experience.css";
import wolfram from "../../assets/Wolfram.png";
import metadome from "../../assets/Metadome.png";

const Experience = () => {
  return (
    <section id="experience">
      <span className="experienceTitle">Work Experience</span>
      <span className="experienceDesc">What All I know......</span>
      <div className="experienceBars">
        <div className="experienceRow">
          <div className="experienceBar">
            <img src={wolfram} alt="Wolfram" className="experienceBarImg" />
            <div className="experienceBarText">
              <h2>Frontend Developer</h2>
              <div>
                <p class="alignleft">Wolfram Research</p>
                <p class="alignright">February 2023 – Present</p>
              </div>
            </div>
          </div>
          <div className="experienceBarDesc">
            <div className="experienceBarDescText">
              <ul>
                <li>
                  Developed and integrated "Shimmer UI" to optimize user
                  engagement and loading experience.
                </li>
                <li>
                  Engineered debouncing functionalities to streamline data
                  handling, significantly improving website performance.
                </li>
                <li>
                  Created numerous reusable components, optimizing development
                  efficiency and maintaining consistency in design and
                  functionality.
                </li>
                <li>
                  Utilized Material UI for website design, ensuring a modern and
                  intuitive user interface.
                </li>
                <li>Tech Stack: ReactJs, JavaScript, MUI, Typescript, HTML, CSS.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experienceRow">
          <div className="experienceBar">
            <img
              src={metadome}
              alt="Metadome.ai"
              className="experienceBarImg"
            />
            <div className="experienceBarText">
              <h2>Software Developer</h2>
              <div>
                <p class="alignleft">Metadome.ai</p>
                <p class="alignright">July 2022 – December 2022</p>
              </div>
            </div>
          </div>
          <div className="experienceBarDesc">
            <div className="experienceBarDescText">
              <ul>
                <li>
                Reduced initial loading time significantly by refactoring the codebase, employing bundle analyzers for optimization.
                </li>
                <li>
                Proficiently created multiple reusable components using React.js, enhancing development efficiency while ensuring consistent design throughout the application.
                </li>
                <li>Tech Stack: ReactJs, JavaScript, Typescript, HTML, CSS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
