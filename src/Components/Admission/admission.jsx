import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission">
      <h2 className="title">Admission Procedure </h2>
      <p className="para">
        Admission Procedure for B.Tech Courses based on the JEE (Mains) rank and
        through counseling carried out by CSJM University.
      </p>
      <p className="para">
        Admission Procedure for BCA and Vocational Programs Courses baesd on the
        basis of merit
      </p>
      <p className="para">
        Admission Procedure for MCA Course is done on the basis of merit earned
        through UPCET
      </p>
      <button className="btn"> Know More</button>
    </div>
  );
};

export default Admission;
