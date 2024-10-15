import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../.././assets/logo.png";
import { Link } from "react-scroll";

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
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} offset={-260} duration={500} Courses>
            Courses
          </Link>
        </li>
        <li>
          <Link to="about-container" smooth={true} offset={-260} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="admission" smooth={true} offset={-260} duration={500}>
            Admission
          </Link>
        </li>
        <li>
          <Link to="department" smooth={true} offset={-260} duration={500}>
            Department
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
