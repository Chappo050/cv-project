import React, { Component } from "react";

class Experience extends Component {
  render() {


    return (
      <div>
        <label>{this.props.infoArray[0]}</label>
        <br />
        <label>{this.props.infoArray[1]}</label>
        <br />
        <label>{this.props.infoArray[2]}</label>
        <br />
        <label>{this.props.infoArray[3]}</label>
        <br />
        <label>{this.props.infoArray[4]}</label>
      </div>
    );
  }
}

export default Experience;
