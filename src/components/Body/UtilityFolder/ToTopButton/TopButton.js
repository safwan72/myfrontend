import React from "react";
import "./style.css";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopButton() {
  const totopfun = () => {
    var rootElement = document.documentElement;
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button id="totopbtn" className="totopbtn" onClick={totopfun}>
        <FontAwesomeIcon icon={faHandPointUp} size="3x" />
      </button>
    </div>
  );
}
