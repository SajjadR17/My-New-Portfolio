import "../styles/now.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Now() {
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
            ".now-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(
            ".now-card",
            { scale: 1.06, opacity: 0, duration: 0.45, ease: "back.out(1.6)" },
            "-=0.4",
          )
          .from(
            ".updated",
            { y: 24, opacity: 0, duration: 0.6, stagger: 0.15 },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="now-sec" ref={root}>
      <div className="now container">
        <h2 className="now-title">Now</h2>
        <ul className="now-card card">
          <li>
            <h4>Learning</h4>
            <span>Advanced TypeScript patterns and Supabase.</span>
          </li>
          <li>
            <h4>Building</h4>
            <span>
              Lingora, an English-learning platform with online class
              booking.
            </span>
          </li>
          <li>
            <h4>Reading</h4>
            <span>Refactoring UI, and a lot of web.dev articles.</span>
          </li>
          <li>
            <h4>Listening</h4>
            <span>
              Indie, alternative, and chill music. From Lana Del Rey to Arctic
              Monkeys.
            </span>
          </li>
        </ul>
        <p className="updated">Last updated: November 2026</p>
      </div>
    </section>
  );
}

export default Now;
