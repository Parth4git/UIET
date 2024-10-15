import React from "react";
import "./courses.css";
import Bca from "../.././assets/bca.jpg";
import Btech from "../.././assets/btech.jpg";
import Mtech from "../.././assets/mtech.jpg";
import Mca from "../.././assets/mca.jpg";
import Fashion from "../.././assets/fashion.jpg";

const courses = () => {
  return (
    <div className="project">
      <div className="project-container">
        <img src={Btech} alt="Btech"></img>
        <h2>B TECH</h2>
      </div>
      <div className="project-container">
        <img src={Bca} alt="BCA"></img>
        <h2>BCA</h2>
      </div>
      <div className="project-container">
        <img src={Mca} alt="MCA"></img>
        <h2>MCA</h2>
      </div>
      <div className="project-container">
        <img src={Fashion} alt="Fashion Technology"></img>
        <h2>Fashion Technology</h2>
      </div>
      <div className="project-container">
        <img src={Mtech} alt="M TECH"></img>
        <h2>M TECH</h2>
      </div>
    </div>
  );
};

export default courses;
