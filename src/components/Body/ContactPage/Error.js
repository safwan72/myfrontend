import React from "react";
import "./Contact.css";
const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="errorclass">&nbsp;</div>;
  }
  if (message) {
    return <div className="errorclass">{message}</div>;
  }
  return <div className="validclass">All Good</div>;
};

export default Error;
