import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="reserved-text">
        © 2026 Sajjad Roohandeh — All rights reserved.
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/SajjadR17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/web_sajjad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Instagram</span>
        </a>

        <a
          href="https://t.me/SAJJAD_R17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Telegram</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sajjad-roohandeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
