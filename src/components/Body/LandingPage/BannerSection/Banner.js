import React, { useEffect } from "react";
import "./Banner.css";
import MainImage from "../../../../images/Ali.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      offset: 200,
      delay: 800,
    });
  }, []);
  return (
    <header className="banner">
      <div className="container">
        <div className="row align-items-md-center justify-content-md-center">
          <div className="col-md-12 col-lg-6" data-aos="fade-up-left">
            <img
              src={MainImage}
              alt="Safwan"
              className="img-responsive rounded mx-auto d-block"
              width="100%"
              title="Md. Ibne Safwan Ali"
            />
          </div>
          <div className="col-md-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <div className="bannertext">
              <h1 data-aos="flip-up">
                <span> Howdy! </span>I'm <br /> Safwan
              </h1>
              <h3 className="my-3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString("I Design And Develop Websites ")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("React And Django Developer")
                      .start();
                  }}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
