import React from "react";
import "./admisssion.css";
import Btechlogo from "../.././assets/b-tech-logo.png";
import Bcalogo from "../.././assets/bca-logo.webp";
import Mcalogo from "../.././assets/MCA-logo.png";

const admission = () => {
  return (
    <div className="adm">
      <div className="admission-contain">
        <div className="admission">
          <div className="admission-container">
            <img src={Bcalogo} alt="Admission"></img>
            <p className="para">
              Admission Procedure for BCA Courses baesd on the basis of{" "}
              <span>merit</span>
            </p>
          </div>
          <div className="admission-container">
            <img src={Btechlogo} alt="Admission"></img>
            <p className="para">
              Admission Procedure for B.Tech Courses is done on based on the{" "}
              <span>JEE (Mains) rank</span>
            </p>
          </div>
          <div className="admission-container">
            <img src={Mcalogo} alt="Admission"></img>
            <p className="para">
              Admission Procedure for MCA Course is done on the basis of merit
              earned through <span>UPCET</span>
            </p>
          </div>
        </div>
      </div>
      <button className="btn-adm"> Know More</button>
    </div>
  );
};

export default admission;
