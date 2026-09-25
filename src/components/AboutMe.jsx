import "../styles/aboutMe.css";

function AboutMe() {
  return (
    <section className="about-sec" id="about">
      <div className="sec-header">
        <h2 className="sec-title">About Me</h2>
        <div className="header-border"></div>
      </div>
      <div className="about">
        <div className="about-me">
          <p>
            I'm Sajjad, a Frontend Developer focused on building modern,
            scalable, and user-friendly web applications.
          </p>
          <p>
            I work primarily with React, TypeScript, and modern frontend
            technologies, with a strong focus on clean code, responsive
            interfaces, and maintainable architecture. I'm continuously
            expanding my skills to become a professional Frontend Engineer.
          </p>
          <div className="stat-row mono">
            <div className="stat">
              <span className="stat-value">1+</span>
              <span className="stat-title">Years Coding</span>
            </div>
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-title">Projects Built</span>
            </div>
          </div>
        </div>
        <div className="about-sec-right">
          <div className="info-card mono">
            <div className="info">
              <span className="info-title">Location</span>
              <span className="info-value">Iran</span>
            </div>
            <div className="info">
              <span className="info-title">Focus</span>
              <span className="info-value">Frontend Development</span>
            </div>
            <div className="info">
              <span className="info-title">Stack</span>
              <span className="info-value">React · TypeScript</span>
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
    </section>
  );
}

export default AboutMe;
