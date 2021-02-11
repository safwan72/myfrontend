import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
const ContactPageComponent = (props) => {
  document.title = "Safwan | Feedback";
  const pushpage = () => {
    props.history.push("/home");
  };
  return (
    <div className="contactsection">
      <div className="container">
        <h1 className="my-5 text-center">Send Me A Message</h1>
        <ContactForm handledissmiss={pushpage} />
      </div>
    </div>
  );
};
export default ContactPageComponent;
