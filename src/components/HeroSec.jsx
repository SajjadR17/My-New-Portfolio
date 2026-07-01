import "../styles/heroSec.css";

function HeroSec() {
  return (
    <div className="hero-sec" id="home">
      <div className="hero-left">
        <span className="hi-span mono">Hi, I'm Sajjad Roohandeh</span>
        <h1>Frontend Developer</h1>
        <p>
          I build modern, responsive and user-friendly web applications using
          React & JavaScript. Passionate about creating clean interfaces and
          delivering great user experiences.
        </p>
        <div className="hero-btns">
          <a href="#projects">
            <button className="hero-view-projects-btn">View My Work</button>
          </a>
          <a href="#contact">
            <button className="hero-contact-btn">Get In Touch</button>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-header-circle"></div>
            <div className="terminal-header-circle"></div>
            <div className="terminal-header-circle"></div>
          </div>
          <div className="terminal-codes">
            <span className="terminal-code">
              <span className="const-code">const </span>dev = {`{`}
            </span>
            <span className="terminal-code p">
              name : <span className="str-code">"Sajjad Roohandeh"</span>,
            </span>
            <span className="terminal-code p">
              role : <span className="str-code">"Frontend developer"</span>,
            </span>
            <span className="terminal-code p">
              age : <span className="num-code">17</span>
            </span>
            <span className="terminal-code p">
              status : <span className="str-code">"Creating projects"</span>
            </span>
            <span className="terminal-code">{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
