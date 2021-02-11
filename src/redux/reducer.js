import * as actions from "./actiontype";
const initstate = {
  projects: [],
  projectsloading: false,
  contactloader: false,
  contactfailedmsg: null,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case actions.PROJECTSLOADING:
      return {
        ...state,
        projectsloading: true,
        projects: [],
        contactfailedmsg: null,
      };
    case actions.PROJECTSLOADED:
      return {
        ...state,
        projectsloading: false,
        projects: action.payload,
        contactfailedmsg: null,
      };
    case actions.CONTACTSUBMITLOADER:
      return {
        ...state,
        contactloader: action.payload,
      };
    case actions.CONTACTSUBMITMESSAGE:
      return {
        ...state,
        contactfailedmsg: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
