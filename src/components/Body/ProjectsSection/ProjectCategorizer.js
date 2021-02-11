import React from "react";
import "./Projects.css";
const ProjectCategorizer = (props) => {
  return (
    <div className="container">
      <div className="btncategroy">
        <button
          className="btn mr-2 mb-2 btn-lg"
          onClick={(e) => props.handleclick(e)}
        >
          All{" "}
        </button>
        <button
          className="btn mr-2 mb-2 btn-lg"
          onClick={(e) => props.handleclick(e)}
        >
          Basic HTML
        </button>
        <button
          className="btn mr-2 mb-2 btn-lg"
          onClick={(e) => props.handleclick(e)}
        >
          React (FireBase)
        </button>
        <button
          className="btn mr-2 mb-2 btn-lg"
          onClick={(e) => props.handleclick(e)}
        >
          Django
        </button>
        <button
          className="btn mr-2 mb-2 btn-lg"
          onClick={(e) => props.handleclick(e)}
        >
          React (Django)
        </button>
      </div>
    </div>
  );
};
export default ProjectCategorizer;
