import { LuCopyright } from "react-icons/lu";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span>
          <LuCopyright /> {new Date().getFullYear()} Sajjad Roohandeh.
        </span>
        <span>Built by hand with React and GSAP.</span>
      </div>
    </footer>
  );
}

export default Footer;
