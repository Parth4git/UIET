import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-heading">WELCOME TO UIET</h1>
        <p className="hero-para">
          The Institute is forging ahead to create engineers, scientists and
          professionals. I hope that UIET will grow in the future towards
          becoming one of the leading engineering institutes in the country.
        </p>
        <button className="hero-btn">Know More</button>
      </div>
    </div>
  );
};

export default hero;
