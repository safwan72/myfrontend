import React from "react";
import "./about.css";
const AboutPageComponent = () => {
  return (
    <div className="about-us my-5" id="about">
      <div className="container">
        <h1 className="mt-5 mb-3">About Me</h1>
        <div className="container about-text">
          <p>
            Hello I am Md. Ibne Safwan Ali.
            <br />I am a Student and Currently Pursuing my Degree on
            ICE(Information and Communication Engineering) from Bangladesh
            University Of Professionals.
          </p>
          <p>
            I am an enthusiastic learner and eager to learn new things. I feel
            Interested to design and build Websites.
            <br /> The Technologies that I use for these are{" "}
            <strong>HTML, CSS, JavaScript, React, Django, MySQL. </strong>
            Currently I am focusing on building websites using Django and React.
          </p>
          <p>
            I have been working on this web design and development side for a
            year now and hoping to discover a lot more as I go on. I Hope To
            Learn New Things Everyday and Deliver my best to whichever project
            iam working on.
          </p>
        </div>
        <div className="map">
          <h4 className="my-4">Location </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4251093880766!2d90.35138324907726!3d23.7678717443236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a18d44cef7%3A0x63f83440d27381a!2sShekhertek%20Electric!5e0!3m2!1sen!2sbd!4v1611604499336!5m2!1sen!2sbd"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex="0"
            title="Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default AboutPageComponent;
