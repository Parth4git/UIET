import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../.././assets/logo.png";

const navbar = () => {
  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""} `}>
      <img src={logo} className="logo" alt="logo"></img>
      <ul className="list">
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Admission</li>
        <li>Gallery</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default navbar;
