import { BiMenu } from "react-icons/bi";
import "../styles/header.css";
import { useState } from "react";

function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <header>
      <nav className="mono">
        <div className="brand">
          <div className="brand-logo">
            <img src="/favicon.ico" alt="" />
            <h3 className="logo">Sajjad</h3>
            <span className="accent">Dev</span>
          </div>
        </div>
        <div className="nav-links">
          <span className="nav-link">
            <a href="#home">Home</a>
          </span>
          <span className="nav-link">
            <a href="#about">About</a>
          </span>
          <span className="nav-link">
            <a href="#skills">Skills</a>
          </span>
          <span className="nav-link">
            <a href="#projects">Projects</a>
          </span>
          <span className="nav-link">
            <a href="#contact">Contact</a>
          </span>
        </div>
        <div className="nav-right">
          <button className="resume-dl-btn">Resume</button>
          <button
            className="open-menu-btn"
            onClick={() => setMenuDisplay((prev) => !prev)}
          >
            <BiMenu size={25} />
          </button>
        </div>
      </nav>
      <div
        onClick={() => setMenuDisplay(false)}
        className={`overlay ${menuDisplay ? "active" : null}`}
      ></div>
      <div className={`mobile-menu mono ${menuDisplay ? "active" : null}`}>
        <div className="menu-header">
          <span className="menu-title">Menu</span>
          <button
            className="close-menu-btn"
            onClick={() => setMenuDisplay(false)}
          >
            ✖
          </button>
        </div>
        <div className="menu-btns">
          <a href="#home">
            <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
              Home
            </div>
          </a>
          <a href="#about">
            <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
              About
            </div>
          </a>
          <a href="#skills">
            <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
              Skills
            </div>
          </a>
          <a href="#projects">
            <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
              Projects
            </div>
          </a>
          <a href="#contact">
            <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
              Contact
            </div>
          </a>
          <div className="menu-btn" onClick={() => setMenuDisplay(false)}>
            <a href="" download={true}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
