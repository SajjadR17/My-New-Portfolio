import menuHiIcon from "../assets/menu-hi.png";
import menuSkillIcon from "../assets/menu-skill.png";
import menuProjectIcon from "../assets/menu-project.png";
import menuAboutIcon from "../assets/menu-about.png";
import menuContactIcon from "../assets/menu-contact.png";
import menuCvIcon from "../assets/menu-resume.png";
import menuCvLink from "../assets/Sajjad-Roohandeh-Resume.pdf";

function Header() {
  function menuControl() {
    const menu = document.querySelector(".menu-items");
    const nav = document.querySelector(".sajjad-nav");
    menu.classList.toggle("menu-items-display");
    nav.classList.toggle("nav-after-menu");
  }

  return (
    <header>
      <nav className="sajjad-nav">
        <div className="brand">
          <div className="brand-logo">
            <img src="/favicon.ico" alt="" />
            <span className="logo">Sajjad</span>
            <span className="accent">Dev</span>
          </div>
          <div className="quick-link">
            <a href="#profile">
              <span>Hi</span>
            </a>
            <a href="#skill">
              <span>Skills</span>
            </a>
            <a href="#projects">
              <span>Projects</span>
            </a>
            <a href="#about">
              <span>About</span>
            </a>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="resume">
          <a href="src/assets/Sajjad-Roohandeh-Resume.pdf" download="">
            <button className="resume-btn">Resume</button>
          </a>
          <button className="menu-btn" onClick={menuControl}>
            Menu
          </button>
        </div>
      </nav>
      <div className="menu-items">
        <div className="menu-item">
          <a href="#profile">
            <span>Hi section</span>
          </a>
          <img src={menuHiIcon} alt="" />
        </div>
        <div className="menu-item">
          <a href="#skill">
            <span>Skills section</span>
          </a>
          <img src={menuSkillIcon} alt="" />
        </div>
        <div className="menu-item">
          <a href="#projects">
            <span>Projects section</span>
          </a>
          <img src={menuProjectIcon} alt="" />
        </div>
        <div className="menu-item">
          <a href="#about">
            <span>About section</span>
          </a>
          <img src={menuAboutIcon} alt="" />
        </div>
        <div className="menu-item">
          <a href="#contact">
            <span>Contact section</span>
          </a>
          <img src={menuContactIcon} alt="" />
        </div>
        <div className="menu-item">
          <a href={menuCvLink} download="">
            <span>Download CV</span>
          </a>
          <img src={menuCvIcon} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
