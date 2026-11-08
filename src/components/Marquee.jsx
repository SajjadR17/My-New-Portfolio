import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "../styles/marquee.css";

function Marquee() {
  const root = useRef(null);
  const tween = useRef(null);

  useGSAP(
    () => {
      tween.current = gsap.to(".track", {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: root },
  );

  return (
    <div
      className="marquee"
      onMouseEnter={() => tween.current?.pause()}
      onMouseLeave={() => tween.current?.resume()}
      ref={root}
      aria-hidden="true"
    >
      <div className="track">
        <div className="group">
          <span>HTML</span>
          <span>CSS</span>
          <span>AI</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Supabase</span>
          <span>Firebase</span>
          <span>Git</span>
          <span>Github</span>
          <span>Tailwind</span>
          <span>Linux</span>
        </div>
        <div className="group">
          <span>HTML</span>
          <span>CSS</span>
          <span>AI</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Supabase</span>
          <span>Firebase</span>
          <span>Git</span>
          <span>Github</span>
          <span>Tailwind</span>
          <span>Linux</span>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
