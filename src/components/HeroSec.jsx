import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/heroSec.css";
import { BsCopy } from "react-icons/bs";
import toast from "react-hot-toast";
import { useIranTime } from "../hooks/useTime";

gsap.registerPlugin(useGSAP);

const maskStyle = {
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "top",
  paddingBottom: "0.08em",
};
const innerStyle = { display: "inline-block" };
const codeLineStyle = { display: "block", whiteSpace: "pre" };

function HeroSec() {
  const root = useRef(null);
  const time = useIranTime();
  const CODE_LINES = [
    "const Dev = {",
    '  name: "Sajjad Roohandeh",',
    '  role: "Frontend Developer",',
    '  stack: ["React", "TypeScript"],',
    '  focus: "UI & accessibility",',
    '  location: "Tehran",',
    `  localTime: "${time}",`,
    "};",
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power4.out", clearProps: "opacity,transform" },
          })
          .from(".hero .line > span", {
            yPercent: 110,
            duration: 1,
            stagger: 0.14,
          })
          .from(".hero-sub", { y: 24, opacity: 0, duration: 0.6 }, "-=0.5")
          .from(
            ".hero-cta .btn",
            { y: 24, opacity: 0, duration: 0.5, stagger: 0.1 },
            "-=0.4",
          )
          .from(
            ".win",
            { y: 40, rotate: 3, opacity: 0, duration: 0.7 },
            "-=0.7",
          )
          .from(
            ".cl",
            { opacity: 0, x: -12, duration: 0.3, stagger: 0.1, ease: "none" },
            "-=0.3",
          )
          .from(
            ".badge",
            { scale: 0, rotate: -20, duration: 0.6, ease: "back.out(2.4)" },
            "-=0.2",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const copyCode = async () => {
    const text = `const Dev = {
  name: "Sajjad Roohandeh",
  role: "Frontend Developer",
  stack: ["React", "TypeScript"],
  focus: "UI & accessibility",
  location: "Tehran",
  localTime: "${time}",
};`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy. Please try again.");
    }
  };

  return (
    <section className="hero container" ref={root}>
      <h1 aria-label="Sajjad Roohandeh">
        <span className="line" style={maskStyle} aria-hidden="true">
          <span style={innerStyle}>Sajjad</span>
        </span>{" "}
        <span className="line" style={maskStyle} aria-hidden="true">
          <span style={innerStyle}>Roohandeh</span>
        </span>
      </h1>
      <div className="hero-row">
        <div>
          <p className="hero-sub">
            Frontend developer with 1 years of experience building modern,
            responsive web applications with React and TypeScript, focusing on
            clean code, scalable architecture, and intuitive user experiences.
          </p>
          <div className="hero-cta">
            <a className="btn solid" href="#projects-sec">
              See my work
            </a>
            <a className="btn" href="#contact-sec">
              Get in touch
            </a>
          </div>
        </div>
        <div className="win-wrap">
          <p className="badge">
            <span className="dot"></span>Open to work
          </p>
          <div className="win" aria-hidden="true">
            <div className="win-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>sajjad.ts</span>
              <BsCopy size={12} onClick={copyCode} className="copy-code" />
            </div>
            <pre>
              <code>
                {CODE_LINES.map((line) => (
                  <span className="cl" style={codeLineStyle} key={line}>
                    {line}
                  </span>
                ))}
                <div className="caret"></div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
