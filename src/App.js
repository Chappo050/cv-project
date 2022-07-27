import React, { Component } from "react";
import BasicInfo from "./components/basicInfo";
import Education from "./components/education";
import Experience from "./components/experience";

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
    } = this.state;
    return (
      <div id="container">
        <div id="basicInfoForm">
          <form onSubmit={this.onSubmitBasic}>
            <label htmlFor="nameInput">Name:</label>
            <input
              onChange={this.handleChange}
              value={fullName.text}
              type="text"
              id="nameInput"
              name="fullName"
            />
            <br />
            <br />
            <label htmlFor="emailInput">Email:</label>
            <input
              onChange={this.handleChange}
              value={email.text}
              type="text"
              id="emailInput"
              name="email"
            />
            <br />
            <br />
            <label htmlFor="phoneInput">Phone Number:</label>
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
        <div id="educationForm">
          <form onSubmit={this.onSubmitEducation}>
            <label htmlFor="schoolInput">Name of School:</label>
            <input
              onChange={this.handleChange}
              value={schoolName.text}
              type="text"
              id="schoolInput"
              name="schoolName"
            />
            <br />
            <br />
            <label htmlFor="studyInput">Major:</label>
            <input
              onChange={this.handleChange}
              value={study.text}
              type="text"
              id="studyInput"
              name="study"
            />
            <br />
            <br />
            <label htmlFor="completionInput">Date of Completion:</label>
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

        <BasicInfo infoArray={info} />
        <Education infoArray={schoolInfo} />
      </div>
    );
  }
}

export default App;
