import "../styles/aboutMe.css";

function AboutMe() {
  return (
    <div className="about-sec" id="about">
      <div className="sec-header">
        <h2 className="sec-title">About Me</h2>
        <div className="header-border"></div>
      </div>
      <div className="about">
        <div className="about-me">
          <p>
            I am Sajjad, a 17-year-old self-taught Front-End Developer from
            Iran. My journey started with a curiosity for how the web works,
            which quickly turned into a passion for building clean, modern, and
            user-friendly digital experiences.
          </p>
          <p>
            Currently deep-diving into the React ecosystem. My mission is to
            evolve into a Full-Stack Architect, turning complex ideas into
            scalable, high-performance web applications.
          </p>
          <div className="stat-row mono">
            <div className="stat">
              <span className="stat-value">1</span>
              <span className="stat-title">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-title">Projects completed</span>
            </div>
            <div className="stat">
              <span className="stat-value"></span>
              <span className="stat-title"></span>
            </div>
          </div>
        </div>
        <div className="about-sec-right">
          <div className="info-card mono">
            <div className="info">
              <span className="info-title">Location</span>
              <span className="info-value">Tehran, IR</span>
            </div>
            <div className="info">
              <span className="info-title">Experience</span>
              <span className="info-value">1 year</span>
            </div>
            <div className="info">
              <span className="info-title">Focus</span>
              <span className="info-value">Web & Product</span>
            </div>
            <div className="info">
              <span className="info-title">Freelance</span>
              <span className="info-value">Available</span>
            </div>
            <div className="info">
              <span className="info-title">Email</span>
              <span className="info-value">Roohandehsredi6@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
