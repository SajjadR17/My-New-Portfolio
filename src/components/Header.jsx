import { useEffect, useRef, useState } from "react";
import "../styles/header.css";

const LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Now", "#now"],
  ["Uses", "#uses"],
  ["Contact", "#contact"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!headerRef.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef}>
      <nav className="container" aria-label="Main">
        <a className="logo" href="#top">
          SR.
        </a>
        <button
          ref={burgerRef}
          className="burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          title={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>
        {menuOpen && (
          <ul id="menu" className={menuOpen ? "open" : ""}>
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
