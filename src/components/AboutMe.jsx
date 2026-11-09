import "../styles/aboutMe.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AboutMe() {
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
            ".about-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(
            ".about-text p",
            { y: 24, opacity: 0, duration: 0.6, stagger: 0.15 },
            "-=0.3",
          )
          .from(
            ".facts",
            { scale: 1.06, opacity: 0, duration: 0.45, ease: "back.out(1.6)" },
            "-=0.4",
          )
          .from(
            ".facts li",
            { x: -16, opacity: 0, duration: 0.4, stagger: 0.1 },
            "-=0.2",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="about-sec" ref={root} className="container">
      <h2 className="about-title">About</h2>
      <div className="about">
        <div className="about-text">
          <p>
            I'm Sajjad, an 18-year-old frontend developer based in Tehran,
            Iran. I build web applications with React and TypeScript, turning
            ideas into responsive, intuitive, and maintainable interfaces. I
            care about writing clean code, paying attention to details, and
            understanding how things work under the hood.
          </p>
          <p>
            I enjoy learning new technologies, exploring better ways to build
            for the web, and turning what I learn into real projects.
          </p>
        </div>
        <ul className="facts card">
          <li>
            <span>Based in</span>
            <b>Tehran</b>
          </li>
          <li>
            <span>Coding</span>
            <b>1 year</b>
          </li>
          <li>
            <span>Focus</span>
            <b>React, UI systems</b>
          </li>
          <li>
            <span>Languages</span>
            <b>English, Persian</b>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
