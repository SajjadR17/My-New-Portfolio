import "../styles/skills.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Skills() {
  const root = useRef(null);

  const SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind",
    "Git",
    "Github",
    "Vite",
    "Supabase",
    "AI",
    "Linux",
  ];

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
            ".skills-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(
            ".skill-card",
            { y: 24, opacity: 0, duration: 0.2, stagger: 0.15 },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="skills-sec" ref={root}>
      <div className="skills container">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          {SKILLS.map((skill) => (
            <li className="skill-card card" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
