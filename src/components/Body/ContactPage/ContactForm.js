import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import Error from "./Error";
import { connect } from "react-redux";
import * as actions from "../../../redux/actioncreator";
import Spinner from "../UtilityFolder/Spinner/Spinner";

const mapstatetoprops = (state) => {
  return {
    contactloader: state.contactloader,
    contactfailedmsg: state.contactfailedmsg,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    contactsubmit: (values) => dispatch(actions.contactsubmitter(values)),
    resetmsg: (val) => dispatch(actions.submitmessage(val)),
  };
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must Have More Than One Characters")
    .max(255, "Not More Than 255 Characters...")
    .required("You Must Enter Your Name"),
  email: Yup.string()
    .email("Must Enter A Valid Email Address")
    .required("You Must Enter Your Valid Email Address"),
  phoneNumber: Yup.number()
    .min(11, "Must Be 11 Numbers")
    .required("Please Enter Your Number... Cannot Be Blank"),
  textMessage: Yup.string()
    .max(255, "Must Not Be More Than 255 Characters")
    .required("Send Your Message To Me"),
});

class ContactForm extends Component {
  componentDidMount() {
    this.props.resetmsg(null);
  }
  render() {
    let error = null,
      show = null;
    if (this.props.contactfailedmsg !== null) {
      error = (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{this.props.contactfailedmsg}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              this.props.handledissmiss();
            }}
          ></button>
        </div>
      );
    }

    if (this.props.contactloader) {
      show = <Spinner />;
    } else {
      show = (
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            textMessage: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const vals = {
              contactemail: values.email,
              contactname: values.name,
              contactnumber: values.phoneNumber,
              contactmessage: values.textMessage,
            };
            this.props.contactsubmit(vals);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="mt-3 py-5" onSubmit={handleSubmit}>
              <div className="input-div">
                <div className="input-icons">
                  <FontAwesomeIcon icon={faAt} className="icon" />
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                </div>
                <div className="errorclasscont">
                  <Error touched={touched.email} message={errors.email} />
                </div>
              </div>
              <div className="input-div">
                <div className="input-icons">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="errorclasscont">
                  <Error touched={touched.name} message={errors.name} />
                </div>
              </div>

              <div className="input-div">
                <div className="input-icons">
                  <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                  <input
                    className="input-field"
                    type="number"
                    name="phoneNumber"
                    autoComplete="off"
                    placeholder="Enter Your Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="errorclasscont">
                  <Error
                    touched={touched.phoneNumber}
                    message={errors.phoneNumber}
                  />
                </div>
              </div>
              <div className="input-div">
                <div className="input-icons">
                  <FontAwesomeIcon icon={faEnvelope} className="iconmessage" />
                  <textarea
                    className="input-field"
                    type="text"
                    name="textMessage"
                    placeholder="Enter Your Message"
                    value={values.textMessage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                </div>
                <div className="errorclasscont">
                  <Error
                    touched={touched.textMessage}
                    message={errors.textMessage}
                  />
                </div>
              </div>

              <div className="container text-center mt-5 btn-cont">
                <button
                  type="submit"
                  className="btn btn-lg mx-auto submitbtn"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      );
    }
    return (
      <>
        {error}
        <div>{show}</div>
      </>
    );
  }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(ContactForm);
