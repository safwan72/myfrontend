import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import "./ModalProject.css";
const ModalProject = (props) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Modal isOpen={props.openmodal} style={{ backgroundColor: "black" }}>
        <h3 className="mt-5 mb-3 text-center ">{props.project.projectName}</h3>
        <ModalBody style={{ color: "#b3aead", fontWeight: "600" }}>
          {props.project.projectDescription}
        </ModalBody>
        <div className="container modalbtnclas">
          <a
            href={props.project.projectUrl}
            target="blank"
            className="btn btnvisit"
          >
            Visit Project
          </a>
          <Button
            color="secondary"
            className="btnclose"
            onClick={props.tooglebtn}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProject;
