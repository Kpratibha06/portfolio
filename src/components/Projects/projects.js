import React from "react";
import "./project.css";
import {LOGO_URL} from "../../assets/FoodFoster.js";

const Projects = () => {
  return (
    <section id="projects">
      <span className="experienceTitle">Projects</span>
      <span className="experienceDesc">What All I do in free time......</span>
      <div className="experienceBars">
        <div className="experienceRow">
          <div className="experienceBar">
            <img src={LOGO_URL} alt="Wolfram" className="experienceBarImg" />
            <div className="experienceBarText">
              <h2>Food Foster</h2>
              <div>
                <p class="alignleft">Food order app</p>
                <p class="alignright">August 2023 – Present</p>
              </div>
            </div>
          </div>
          <div className="experienceBarDesc">
            <div className="experienceBarDescText">
              <ul>
                <li>
                Created a food order app using live Swiggy API, incorporating Shimmer UI for enhanced user experience.
                </li>
                <li>
                Implemented dynamic routing and context hooks for seamless navigation and efficient data management.
                </li>
                <li>
                Optimized performance with lazy loading, ensuring faster load times and efficient resource utilization.
                </li>
                <li>
                Utilized Tailwind CSS for streamlined and responsive design, ensuring a modern and aesthetic interface.
                </li>
                <li>Tech Stack- React, Javascript, Redux, Tailwind, HTML.</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
};

export default Projects;
