import "../styles/header.css";

function Header() {
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
