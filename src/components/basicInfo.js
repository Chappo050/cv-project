import React, { Component } from "react";

class BasicInfo extends Component {
  render() {


    return (
      <div>
        <label>{this.props.infoArray[0]}</label>
        <br />
        <label>{this.props.infoArray[1]}</label>
        <br />
        <label>{this.props.infoArray[2]}</label>
      </div>
    );
  }
}

export default BasicInfo;
