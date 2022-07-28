import React from "react";

function BasicInfo(props) {
    let hidden = true;
    if (props.infoArray.length > 1) {
      hidden = false;
    }
console.log(props.infoArray);

    return (
      <div className="basicRender">
        <label>BASIC INFORMATION</label>
        <br />
        <br />
        <label>{props.infoArray[0]}</label>
        <br />
        <label>{props.infoArray[1]}</label>
        <br />
        <label>{props.infoArray[2]}</label>
        <br />
        <button hidden={hidden} onClick={props.edit}>
          Edit
        </button>
      </div>
    );
  }

export default BasicInfo;
