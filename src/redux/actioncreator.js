import Axios from "axios";
import * as actions from "./actiontype";

export const projectsloading = () => {
  return {
    type: actions.PROJECTSLOADING,
  };
};

export const projectsloadsuccess = (projects) => {
  return {
    type: actions.PROJECTSLOADED,
    payload: projects,
  };
};

export const projectsloader = () => (dispatch) => {
  dispatch(projectsloading());
  Axios.get(`${process.env.REACT_APP_PROJECTURL}`)
    .then((response) => {
      dispatch(projectsloadsuccess(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const submitter = (msg) => {
  return {
    type: actions.CONTACTSUBMITLOADER,
    payload: msg,
  };
};

export const submitmessage = (msg) => {
  return {
    type: actions.CONTACTSUBMITMESSAGE,
    payload: msg,
  };
};

export const contactsubmitter = (values) => (dispatch) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch(submitter(true));

  Axios.post(`${process.env.REACT_APP_CONTACTURL}`, values, header)
    .then((response) => {
      dispatch(submitter(false));
      dispatch(submitmessage("Thanks For Submitting Your FeedBack"));
    })
    .catch((err) => {
      dispatch(submitter(false));
      dispatch(submitmessage(`${err.response}`));
      console.log();
    });
};
