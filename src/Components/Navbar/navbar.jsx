import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to toggle mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" alt="logo" />
      {isMobile ? (
        <>
          {/* Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className={`list ${menuOpen ? "menu-open" : ""}`}>
              <li>
                <Link to="hero" smooth={true} offset={0} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="project" smooth={true} offset={-260} duration={500}>
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="about-container"
                  smooth={true}
                  offset={-260}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="admission" smooth={true} offset={-260} duration={500}>
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  to="department"
                  smooth={true}
                  offset={-260}
                  duration={500}
                >
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
          )}
        </>
      ) : (
        /* Navigation List for Large Screens */
        <ul className="list">
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} offset={-260} duration={500}>
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="about-container"
              smooth={true}
              offset={-260}
              duration={500}
            >
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
      )}
    </nav>
  );
};

export default Navbar;
