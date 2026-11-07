import "../styles/uses.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Uses() {
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
            },
          })
          .fromTo(
            ".uses-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(
            ".uses-card",
            { scale: 1.06, opacity: 0, duration: 0.45, ease: "back.out(1.6)" },
            "-=0.4",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="uses-sec" ref={root}>
      <div class="uses container">
        <h2 className="uses-title">Uses</h2>
        <dl class="uses-card card">
          <div>
            <dt>Editor</dt>
            <dd>VS Code</dd>
          </div>
          <div>
            <dt>Terminal</dt>
            <dd>Linux Terminal</dd>
          </div>
          <div>
            <dt>Browser</dt>
            <dd>Firefox &amp; Chrome</dd>
          </div>
          <div>
            <dt>Design</dt>
            <dd>Figma</dd>
          </div>
          <div>
            <dt>Fonts</dt>
            <dd>JetBrains Mono</dd>
          </div>
          <div>
            <dt>Theme</dt>
            <dd>Dark - Monokai Pro</dd>
          </div>
          <div>
            <dt>Hardware</dt>
            <dd>HP EliteBook 745 G5</dd>
          </div>
          <div>
            <dt>Extras</dt>
            <dd>QCY T13 ANC Earbuds</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Uses;
