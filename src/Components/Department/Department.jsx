import React from "react";
import "./Department.css";
import department_1 from "../../assets/department_1.png";
import department_2 from "../../assets/department_2.png";
import department_3 from "../../assets/department_3.png";
import department_4 from "../../assets/department_4.png";
import department_5 from "../../assets/department_5.png";
import department_6 from "../../assets/department_6.png";

const Department = () => {
  return (
    <div className="department">
      <div className="department-img">
        <div className="department-card">
          <img src={department_1} alt="icon"></img>
          <p>Computer Science and Engineering</p>
        </div>
        <div className="department-card">
          <img src={department_2} alt="icon"></img>
          <p>Computer Science in Artifical Intelligence</p>
        </div>
        <div className="department-card">
          <img src={department_3} alt="icon"></img>
          <p>Electronics and Communication Engineering</p>
        </div>
        <div className="department-card">
          <img src={department_4} alt="icon"></img>
          <p>Computer Application</p>
        </div>
        <div className="department-card">
          <img src={department_5} alt="icon"></img>
          <p>Chemical Engineering</p>
        </div>
        <div className="department-card">
          <img src={department_6} alt="icon"></img>
          <p>Mechnical Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Department;
