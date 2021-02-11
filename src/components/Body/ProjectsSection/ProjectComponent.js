import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const ProjectComponent = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);
  return (
    <a href={props.projectUrl} target="blank">
      <div
        className="portfoilomainpics"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay="800"
      >
        <img
          src={props.projectImage}
          className="rigimg"
          alt={props.projectName}
        />
        <div className="portfolio-overlay">
          <p className="portfolioname">{props.projectName}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectComponent;
