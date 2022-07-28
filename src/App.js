import React, { Component } from "react";
import BasicInfo from "./components/basicInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/app.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: [],
      fullName: { text: "", id: 0 },
      email: { text: "", id: 0 },
      number: { text: "", id: 0 },

      schoolInfo: [],
      schoolName: { text: "", id: 0 },
      study: { text: "", id: 0 },
      completionDate: { text: "", id: 0 },

      workInfo: [],
      companyName: { text: "", id: 0 },
      title: { text: "", id: 0 },
      tasks: { text: "", id: 0 },
      startDate: { text: "", id: 0 },
      finishDate: { text: "", id: 0 },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: { text: e.target.value },
    });
  };

  onSubmitBasic = (e) => {
    e.preventDefault();
    this.setState({
      info:
        ((this.state.info.length = 0),
        this.state.info.concat(
          this.state.fullName.text,
          this.state.email.text,
          this.state.number.text
        )),
      fullName: { text: "" },
      email: { text: "" },
      number: { text: "" },
    });
    document.getElementById("basicInfoForm").hidden = true;
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      schoolInfo:
        ((this.state.schoolInfo.length = 0),
        this.state.schoolInfo.concat(
          this.state.schoolName.text,
          this.state.study.text,
          this.state.completionDate.text
        )),
      schoolName: { text: "" },
      study: { text: "" },
      completionDate: { text: "" },
    });
    document.getElementById("educationForm").hidden = true;
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      workInfo:
        ((this.state.workInfo.length = 0),
        this.state.workInfo.concat(
          this.state.companyName.text,
          this.state.title.text,
          this.state.tasks.text,
          this.state.startDate.text,
          this.state.finishDate.text
        )),
      companyName: { text: "" },
      title: { text: "" },
      tasks: { text: "" },
      startDate: { text: "" },
      finishDate: { text: "" },
    });
    document.getElementById("workForm").hidden = true;
  };

  onEditBasic = () => {
    document.getElementById("basicInfoForm").hidden = false;
  };

  onEditEducation = () => {
    document.getElementById("educationForm").hidden = false;
  };

  onEditWork = () => {
    document.getElementById("workForm").hidden = false;
  };

  render() {
    const {
      fullName,
      email,
      number,
      info,
      schoolInfo,
      schoolName,
      study,
      completionDate,
      workInfo,
      companyName,
      title,
      tasks,
      startDate,
      finishDate,
    } = this.state;
    return (
      <div className="container">
        <div className="basicInfoForm" id="basicInfoForm">
          <form onSubmit={this.onSubmitBasic}>
            <div>
              <label htmlFor="nameInput">Name:</label>
            </div>

            <input
              onChange={this.handleChange}
              value={fullName.text}
              type="text"
              id="nameInput"
              name="fullName"
            />
            <br />
            <br />
            <div>
              <label htmlFor="emailInput">Email:</label>
            </div>

            <input
              onChange={this.handleChange}
              value={email.text}
              type="text"
              id="emailInput"
              name="email"
            />
            <br />
            <br />
            <div>
              <label htmlFor="phoneInput">Phone Number:</label>
            </div>

            <input
              onChange={this.handleChange}
              value={number.text}
              type="text"
              id="phoneInput"
              name="number"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="educationForm" id="educationForm">
          <form onSubmit={this.onSubmitEducation}>
            <div>
              <label htmlFor="schoolInput">Name of School:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={schoolName.text}
              type="text"
              id="schoolInput"
              name="schoolName"
            />
            <br />
            <br />
            <div>
              <label htmlFor="studyInput">Major:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={study.text}
              type="text"
              id="studyInput"
              name="study"
            />
            <br />
            <br />
            <div>
              <label htmlFor="completionInput">Date of Completion:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={completionDate.text}
              type="text"
              id="completionInput"
              name="completionDate"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="workForm" id="workForm">
          <form onSubmit={this.onSubmitWork}>
            <div>
              <label htmlFor="companyInput">Name of Company:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={companyName.text}
              type="text"
              id="companyInput"
              name="companyName"
            />
            <br />
            <br />
            <div>
              <label htmlFor="titleInput">Position Title:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={title.text}
              type="text"
              id="titleInput"
              name="title"
            />
            <br />
            <br />
            <div>
              <label htmlFor="tasksInput">Tasks:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={tasks.text}
              type="text"
              id="tasksInput"
              name="tasks"
            />
            <br />
            <br />
            <div>
              <label htmlFor="startDateInput">Start Date:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={startDate.text}
              type="text"
              id="startDateInput"
              name="startDate"
            />
            <br />
            <br />
            <div>
              <label htmlFor="finishDateInput">Finish Date:</label>
            </div>
            <input
              onChange={this.handleChange}
              value={finishDate.text}
              type="text"
              id="finishDateInput"
              name="finishDate"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <BasicInfo infoArray={info} edit={this.onEditBasic} />
        <Education infoArray={schoolInfo} edit={this.onEditEducation} />
        <Experience infoArray={workInfo} edit={this.onEditWork} />
      
      </div>
    );
  }
}

export default App;
