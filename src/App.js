import React, { Component } from "react";
import basicInfo from "./components/basicInfo";
import Education from "./components/education";
import Experience from "./components/experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: { text: "", id: 0 },
      email: { text: "", id: 0 },
      number: { text: "", id: 0 },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: { text: e.target.value },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      fullName: { text: "" },
      email: { text: "" },
      number: { text: "" },
    });
  };

  render() {
    const { fullName, email, number } = this.state;
    return (
      <div>
        <div>
          <form>
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
      </div>
    );
  }
}

export default App;
