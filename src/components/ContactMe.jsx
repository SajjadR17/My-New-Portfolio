import { useEffect, useState } from "react";
import "../styles/contactMe.css";

function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mdkpbzow", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      e.target.reset();
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <div className="contact-sec" id="contact">
        <div className="sec-header">
          <h2 className="sec-title">Contact</h2>
          <div className="header-border"></div>
        </div>
        <div className="cantact-form">
          <div className="contact-me-desc">
            <h2 className="laptop">Let's build something great together.</h2>
            <h2 className="mobile">Get in touch</h2>
            <p>
              Have a project in mind or just want to say hi? My inbox is always
              open. I usually reply within a day.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="contact-me-form">
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
            <button className="submit-btn">Send message</button>
          </form>
        </div>
      </div>
      <div
        onClick={() => setShowModal(false)}
        className={`overlay ${showModal ? "active" : null}`}
      ></div>
      {showModal && (
        <div className="modal">
          <h4>Your message has been sent successfully. Thank you!</h4>
          <button onClick={() => setShowModal(false)} className="ok-btn">
            Ok
          </button>
        </div>
      )}
    </>
  );
}

export default ContactMe;
