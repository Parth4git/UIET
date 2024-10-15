import React from "react";
import "./Gallery.css";
import gallery_1 from "../.././assets/gallery_1.jpeg";
import gallery_2 from "../.././assets/gallery_2.jpeg";
import gallery_3 from "../.././assets/gallery_3.jpeg";
import gallery_4 from "../.././assets/gallery_4.jpeg";
import gallery_5 from "../.././assets/gallery_5.jpg";
import gallery_6 from "../.././assets/gallery_6.jpeg";
import gallery_7 from "../.././assets/gallery_7.jpg";
import gallery_8 from "../.././assets/gallery_8.jpg";
import gallery_9 from "../.././assets/gallery_9.jpg";
import gallery_10 from "../.././assets/gallery_10.jpg";
import gallery_11 from "../.././assets/gallery_11.jpeg";
import gallery_12 from "../.././assets/gallery_12.jpeg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <div className="gallery-img">
          <img src={gallery_1} alt="gallery"></img>
          <img src={gallery_2} alt="gallery"></img>
          <img src={gallery_3} alt="gallery"></img>
          <img src={gallery_4} alt="gallery"></img>
          <img src={gallery_5} alt="gallery"></img>
          <img src={gallery_6} alt="gallery"></img>
          <img src={gallery_7} alt="gallery"></img>
          <img src={gallery_8} alt="gallery"></img>
          <img src={gallery_9} alt="gallery"></img>
          <img src={gallery_10} alt="gallery"></img>
          <img src={gallery_11} alt="gallery"></img>
          <img src={gallery_12} alt="gallery"></img>
        </div>
      </div>
      <button className="btn">See More</button>
    </div>
  );
};

export default Gallery;
