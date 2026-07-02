import "../styles/contactMe.css";

function ContactMe() {
  return (
    <div className="contact-sec" id="conatct">
      <div className="sec-header">
        <h2 className="sec-title">Contact</h2>
        <div className="header-border"></div>
      </div>
      <div className="cantact-form">
        <div className="contact-me-desc">
          <h2>Let's build something great together.</h2>
          <p>
            Have a project in mind or just want to say hi? My inbox is always
            open. I usually reply within a day.
          </p>
        </div>
        <form
          action="https://formspree.io/f/mdkpbzow"
          method="POST"
          className="contact-me-form"
        >
          <div className="input-container">
            <span>Name</span>
            <input
              type="text"
              required
              name="name"
              className="name-input"
              autoComplete="off"
              className="name-input"
            />
          </div>
          <div className="input-container">
            <span>Email</span>
            <input
              type="text"
              className="email-input"
              autocomplete="off"
              name="email"
              required
            />
          </div>
          <div className="input-container">
            <span>Message</span>
            <textarea
              type="text"
              className="message-input"
              autocomplete="off"
              name="message"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
