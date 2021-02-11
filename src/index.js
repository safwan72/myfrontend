import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MainPageSpinner from "./components/Body/UtilityFolder/MainPageSpinner/MainPageSpinner";

ReactDOM.render(
  <>
    <MainPageSpinner />
  </>,
  document.getElementById("root")
);

function ready() {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("root")
  );
}

document.addEventListener("DOMContentLoaded", ready);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
