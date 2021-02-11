import React from "react";
import MainComponent from "./components/MainComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import mystore from "./redux/store";
function App() {
  return (
    <Provider store={mystore}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
