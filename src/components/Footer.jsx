import githubIcon from "../assets/github.webp";
import linkedinIcon from "../assets/linkedin.webp";
import instagramIcon from "../assets/instagram.webp";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-about">
          <h2>SajjadR17</h2>
          <h5>Front-end Developer</h5>
          <h5>Computer science student</h5>
          <h5>Still learning</h5>
          <h5>Increasing projects</h5>
        </div>
        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          <a href="#profile">
            <h5>Hi section</h5>
          </a>
          <a href="#skill">
            <h5>Skills section</h5>
          </a>
          <a href="#projects">
            <h5>Projects section</h5>
          </a>
          <a href="#about">
            <h5>About section</h5>
          </a>
        </div>
        <div className="footer-links">
          <h2>Follow Me</h2>
          <div className="footer-github">
            <img src={githubIcon} alt="" />
            <a href="https://github.com/SajjadR17">
              <h5>Github</h5>
            </a>
          </div>
          <div className="footer-linkedin">
            <img src={linkedinIcon} alt="" />
            <a href="https://www.linkedin.com/in/sajjad-roohandeh-6306a7388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <h5>Linkedin</h5>
            </a>
          </div>
          <div className="footer-instagram">
            <img src={instagramIcon} alt="" />
            <a href="https://www.instagram.com/Web_sajjad?igsh=MXFmbm5ldXRsY3Awdw==">
              <h5>Instagram</h5>
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Let's Connect</h2>
          <h5>Have a project in mind?</h5>
          <a href="#contact">
            <h5>Contact me here</h5>
          </a>
        </div>
      </footer>
      <div className="copyright">
        <h4>SajjadR17 | All rights reserved . 2026 ©</h4>
      </div>
    </>
  );
}

export default Footer;
