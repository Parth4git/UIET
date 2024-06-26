import React from "react";
import "./about.css";
import Uietcampus from "../.././assets/uiet-full-campus.jpg";

const about = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={Uietcampus} alt="Campus"></img>
      </div>
      <div className="about-content">
        <h3>“A PLACE TO LEARN AND GROW”</h3>
        <p>
          UIET is a flagship institution of CSJM University and is located in
          the 264-acre sprawling, lush green campus of university. The institute
          offers six B. Tech courses in five branches of engineering – Chemical
          Engineering, Computer Science and Engineering, Electronics &
          Communication Engineering, Information technology, and Mechanical
          Engineering. Apart from B. Tech courses, UIET also offers Bachelors
          and Masters courses in Computer Application, PG Diploma courses and
          Vocational courses.
        </p>
      </div>
    </div>
  );
};

export default about;
