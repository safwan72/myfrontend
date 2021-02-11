import React from "react";
import "./Progressbar.css";

const Progressbar = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 2000);

  return (
    <div className="progressbar">
      <div className="progress-done" style={style}></div>
    </div>
  );
};
export default Progressbar;
