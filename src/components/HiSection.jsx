import linkedinIcon from "../assets/linkedin.webp";
import githubIcon from "../assets/github.webp";
import instagramIcon from "../assets/instagram.webp";
import whatsappIcon from "../assets/whatsapp.png";
import heroImg from "../assets/Me.webp";

function HiSection() {
  return (
    <div id="profile" className="profile">
      <div className="profile-about">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          Hi, I'm
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="2000" id="name">
          Sajjad Roohandeh
        </h1>
        <br />
        <h3 data-aos="fade-up" data-aos-duration="2000" id="developer">
          Front-End Developer
        </h3>
        <br />
        <h5 data-aos="fade-up" data-aos-duration="2000">
          I'm Sajjad Roohandeh from Iran. I'm 17 years of age. A self-taught
          front-end developer, passionate about building clean, modern website
        </h5>
        <br />
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="contact-icons"
        >
          <a href="https://www.linkedin.com/in/sajjad-roohandeh-6306a7388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="https://github.com/SajjadR17">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/Web_sajjad?igsh=MXFmbm5ldXRsY3Awdw==">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="https://wa.me/989014081164?text+Hi%20Sajjad.%20I%20Visited%20Your%20Portfolio">
            <img src={whatsappIcon} alt="" />
          </a>
        </div>
      </div>
      <div className="profile-img">
        <img data-aos="fade-up" data-aos-duration="2000" src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default HiSection;
