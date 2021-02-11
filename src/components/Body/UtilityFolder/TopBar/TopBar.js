import React from "react";
import "./TopBar.css";
function TopBar({ scroll }) {
  return (
    <div id="progressBarContainer">
      <div
        id="progressBar"
        style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
      />
    </div>
  );
}

export default TopBar;
