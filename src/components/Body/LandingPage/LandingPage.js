import React from "react";
import Banner from "./BannerSection/Banner";
import AboutPageComponent from "../AboutPage/AboutPage";
const LandingPageComponent = () => {
  document.title = "Safwan | Home";

  return (
    <div>
      <Banner />
      <AboutPageComponent />
    </div>
  );
};
export default LandingPageComponent;
