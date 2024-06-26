import React from "react";
import "./title.css";

const title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default title;
