import React, { Component } from "react";
import "./Projects.css";
import * as actions from "../../../redux/actioncreator";
import { connect } from "react-redux";
import ProjectComponent from "./ProjectComponent";
import Spinner from "../UtilityFolder/Spinner/Spinner";
import ProjectCategorizer from "./ProjectCategorizer";
import ModalProject from "./ModalProject/ModalProject";
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    projectsloading: state.projectsloading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectsloader: () => dispatch(actions.projectsloader()),
  };
};

class Projects extends Component {
  state = {
    filteredProjects: [],
    selectedproject: [],
    modalOpen: false,
  };

  componentDidMount() {
    document.title = "Safwan | Projects";
    this.props.projectsloader();
    this.setState({
      filteredProjects: this.props.projects,
    });
  }
  openmodalclick = (project) => {
    this.setState({
      selectedproject: project,
      modalOpen: !this.state.modalOpen,
    });
  };
  tooglebtn = () => {
    this.setState({
      modalOpen: false,
    });
  };
  handleclick = (e) => {
    this.setState({
      filteredProjects: this.props.projects,
    });

    const myprojects = this.props.projects.filter(
      (project) => project.category === e.target.innerText
    );
    this.setState({
      filteredProjects: myprojects,
    });

    if (e.target.innerText === "All") {
      this.setState({
        ...this.state,
        filteredProjects: this.props.projects,
      });
    }
  };
  render() {
    let projects = null,
      modalproject = null;
    if (this.props.projectsloading) {
      projects = <Spinner />;
    }

    if (this.state.selectedproject.length !== 0 && this.state.modalOpen) {
      modalproject = (
        <ModalProject
          project={this.state.selectedproject}
          openmodal={this.state.modalOpen}
          tooglebtn={this.tooglebtn}
        />
      );
    }

    if (this.props.projects.length !== 0) {
      projects = this.state.filteredProjects.map((item) => {
        return (
          <ProjectComponent
            {...item}
            key={item.id}
            openmodalclick={this.openmodalclick}
          />
        );
      });
    }
    return (
      <div className="portfolio">
        <h1 className="mb-5 text-center projectext">Projects</h1>
        <ProjectCategorizer handleclick={this.handleclick} />
        <div className="container">
          <div className="portfoliomainsection">{projects}</div>
          <div className='container'>
          {modalproject}
          </div>

        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
