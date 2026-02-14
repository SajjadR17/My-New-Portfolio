import contactImg1 from "../assets/undraw_compose-email_s6kf.svg";
import contactImg2 from "../assets/undraw_social-notifications_zahe.svg";

function ContactSection() {
  return (
    <div id="contact" className="contact">
      <div className="contact-img">
        <img src={contactImg1} alt="" />
      </div>
      <form
        action="https://formspree.io/f/mdkpbzow"
        method="POST"
        className="cantact-form"
      >
        <h2>Get in touch</h2>
        <input
          type="text"
          required
          name="name"
          className="name-input"
          placeholder="Your Name"
          autocomplete="off"
        />
        <div className="name-error"></div>
        <input
          type="text"
          className="email-input"
          autocomplete="off"
          name="email"
          required
          placeholder=" Email"
        />
        <div className="email-error"></div>
        <input
          type="text"
          className="message-input"
          autocomplete="off"
          name="message"
          required
          id="message"
          placeholder=" Message"
        />
        <button type="submit" className="contact-btn">
          Submit
        </button>
      </form>
      <div className="contact-img2">
        <img src={contactImg2} alt="" />
      </div>
    </div>
  );
}

export default ContactSection;
