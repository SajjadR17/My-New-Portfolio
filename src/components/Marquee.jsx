import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "../styles/marquee.css";

function Marquee() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.to(".track", {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: "none",
      });
    },
    { scope: root },
  );

  return (
    <div class="marquee" ref={root} aria-hidden="true">
      <div class="track">
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
        <span>Tailwind</span> <span>HTML</span>
        <span>CSS</span>
        <span>Vite</span>
        <span>AI</span>
        <span>TypeScript</span>
        <span>React</span>
      </div>
    </div>
  );
}

export default Marquee;
