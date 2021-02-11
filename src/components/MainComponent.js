import React, { useEffect, useState } from "react";
import BodyComponent from "./Body/BodyComponent";
import TopBar from "./Body/UtilityFolder/TopBar/TopBar";
import TopButton from "./Body/UtilityFolder/ToTopButton/TopButton";
import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import "./Header/nav.css";

const MainComponent = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolly = `${totalScroll / windowHeight}`;
      setScroll(scrolly);
      if (totalScroll > 250) {
        document.getElementById("totopbtn").style.display = "inline";
      } else {
        document.getElementById("totopbtn").style.display = "none";
      }
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div>
      <HeaderComponent />
      <TopBar scroll={scroll} />
      <BodyComponent />
      <TopButton />
      <FooterComponent />
    </div>
  );
};
export default MainComponent;
