import React, { Component } from "react";

class BasicInfo extends Component {
  render() {
    let hidden = true;
    if (this.props.infoArray.length > 1) {
      hidden = false;
    }

    return (
      <div className="basicRender">
        <label>BASIC INFORMATION</label>
        <br />
        <br />
        <label>{this.props.infoArray[0]}</label>
        <br />
        <label>{this.props.infoArray[1]}</label>
        <br />
        <label>{this.props.infoArray[2]}</label>
        <br />
        <button hidden={hidden} onClick={this.props.edit}>
          Edit
        </button>
      </div>
    );
  }
}

export default BasicInfo;
