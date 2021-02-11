import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          SAFWAN <span> Portfolio </span>{" "}
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="span-nav">Menu</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponent;
