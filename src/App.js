import React, { useState } from "react";
import BasicInfo from "./components/basicInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/app.css";

function App() {
  const [info, setInfo] = useState([1, 2, 3]);

  const [schoolInfo, setSchoolInfo] = useState([1, 2, 3]);

  const [workInfo, setWorkInfo] = useState([1, 2, 3, 4, 5]);

  const [formValue, setFormValue] = useState({
    email: "",
    fullName: "",
    number: "",
    schoolName: "",
    study: "",
    completionDate: "",
    companyName: "",
    title: "",
    tasks: "",
    startDate: "",
    finishDate: "",
    id: 1,
  });

  const {
    email,
    fullName,
    number,
    schoolName,
    study,
    completionDate,
    companyName,
    title,
    tasks,
    startDate,
    finishDate,
  } = formValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  /*
  const handleChange = (e) => {
    setFormValue({
      [e.target.name]: { text: e.target.value },
    });
  };
*/
  const onSubmitBasic = (e) => {
    e.preventDefault();
    setInfo(info.length = 0);
    setInfo(info.concat(formValue.fullName, formValue.email, formValue.number));
    setFormValue({ fullName: "" });
    setFormValue({ email: "" });
    setFormValue({ number: "" });
    document.getElementById("basicInfoForm").hidden = true;
  };

  const onSubmitEducation = (e) => {
    e.preventDefault();
    setSchoolInfo((schoolInfo.length = 0));
    setSchoolInfo(schoolInfo.concat(schoolName, study, completionDate));
    setFormValue({ schoolName: "" });
    setFormValue({ study: "" });
    setFormValue({ completionDate: "" });
    document.getElementById("educationForm").hidden = true;
  };

  const onSubmitWork = (e) => {
    e.preventDefault();
    setWorkInfo((workInfo.length = 0));
    setWorkInfo(
      workInfo.concat(companyName, title, tasks, startDate, finishDate)
    );
    setFormValue({ companyName: "" });
    setFormValue({ title: "" });
    setFormValue({ tasks: "" });
    setFormValue({ startDate: "" });
    setFormValue({ finishDate: "" });
    document.getElementById("workForm").hidden = true;
  };

  const onEditBasic = () => {
    document.getElementById("basicInfoForm").hidden = false;
  };

  const onEditEducation = () => {
    document.getElementById("educationForm").hidden = false;
  };

  const onEditWork = () => {
    document.getElementById("workForm").hidden = false;
  };

  return (
    <div className="container">
      <div className="basicInfoForm" id="basicInfoForm">
        <form onSubmit={onSubmitBasic}>
          <div>
            <label htmlFor="nameInput">Name:</label>
          </div>

          <input
            onChange={handleChange}
            value={fullName || ""}
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
            onChange={handleChange}
            value={email || ""}
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
            onChange={handleChange}
            value={number || ""}
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
        <form onSubmit={onSubmitEducation}>
          <div>
            <label htmlFor="schoolInput">Name of School:</label>
          </div>
          <input
            onChange={handleChange}
            value={schoolName || ""}
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
            onChange={handleChange}
            value={study || ""}
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
            onChange={handleChange}
            value={completionDate || ""}
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
        <form onSubmit={onSubmitWork}>
          <div>
            <label htmlFor="companyInput">Name of Company:</label>
          </div>
          <input
            onChange={handleChange}
            value={companyName || ""}
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
            onChange={handleChange}
            value={title || ""}
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
            onChange={handleChange}
            value={tasks || ""}
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
            onChange={handleChange}
            value={startDate || ""}
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
            onChange={handleChange}
            value={finishDate || ""}
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
      <BasicInfo infoArray={info} edit={onEditBasic} />
      <Education infoArray={schoolInfo} edit={onEditEducation} />
      <Experience infoArray={workInfo} edit={onEditWork} />
    </div>
  );
}
export default App;
