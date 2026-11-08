import { useRef, useState } from "react";
import {
  LuDownload,
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuSend,
} from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../styles/contactMe.css";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ContactMe() {
  const [sending, setSending] = useState(false);
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              once: true,
            },
            defaults: {
              ease: "power3.out",
              clearProps: "opacity,transform",
            },
          })
          .fromTo(
            ".contact-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(".lead", { y: 24, opacity: 0, duration: 0.6 }, "-=0.5")
          .from(
            ".form",
            { y: 40, rotate: 3, opacity: 0, duration: 0.7 },
            "-=0.7",
          )
          .from(
            ".social a",
            {
              scale: 0,
              rotate: -20,
              opacity: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "back.out(2)",
            },
            "-=0.5",
          )
          .from(".resume-btn", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2");
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const message = data?.errors?.map((err) => err.message).join(", ");
        throw new Error(message || "Request failed");
      }

      toast.success("Message sent!");
      form.reset();
    } catch (err) {
      toast.error(
        err.message && err.message !== "Request failed"
          ? err.message
          : "Couldn't send your message. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-sec" ref={root} className="contact">
      <div className="contact-grid container">
        <div>
          <h2 className="contact-title">Get in touch</h2>
          <p className="lead">
            Have a project, a role or just a question? Send a message and I'll
            reply within two days.
          </p>
          <ul className="social">
            <li>
              <a
                href="https://github.com/SajjadR17"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub size={19} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sajjad-roohandeh"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLinkedin size={19} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/web_sajjad"
                aria-label="Instagram"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuInstagram size={19} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/SAJJAD_R17"
                aria-label="Telegram"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuSend size={19} />
              </a>
            </li>
            <li>
              <a
                href="mailto:roohandehsredi6@gmail.com"
                aria-label="Mail"
                title="Mail"
              >
                <LuMail size={19} />
              </a>
            </li>
          </ul>
          <a className="resume-btn btn" download href="/Sajjad-Roohandeh.pdf">
            <LuDownload />
            Download resume
          </a>
        </div>
        <form
          className="card form"
          onSubmit={handleSubmit}
          id="contact-form"
          action="https://formspree.io/f/mdkpbzow"
          method="POST"
        >
          <h3>Send a message</h3>
          <label>
            Name
            <input
              type="text"
              name="name"
              spellCheck={false}
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              spellCheck={false}
              autoComplete="email"
              required
            />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn" disabled={sending} type="submit">
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
