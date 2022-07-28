import React from "react";

function Experience(props) {
    let hidden = true;
    if (props.infoArray.length > 1) {
      hidden = false;
    }

    return (
      <div className="workRender">
        <label>EXPERIENCE</label>
        <br />
        <br />
        <label>{props.infoArray[0]}</label>
        <br />
        <label>{props.infoArray[1]}</label>
        <br />
        <label>{props.infoArray[2]}</label>
        <br />
        <label>{props.infoArray[3]}</label>
        <br />
        <label>{props.infoArray[4]}</label>
        <br />
        <button hidden={hidden} onClick={props.edit}>
          Edit
        </button>
      </div>
    );
  }
export default Experience;
