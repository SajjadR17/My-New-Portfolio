import "../styles/projects.css";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Projects() {
  const root = useRef(null);

  const PROJECTS = [
    {
      title: "Weatherly",
      description:
        "A modern weather application that provides real-time weather and forecasts using the OpenWeatherMap API. Built with React with a responsive interface and dynamic updates.",
      tags: ["React", "JS", "REST API"],
      sourceUrl: "https://github.com/SajjadR17/weather-app",
      demoUrl: "https://weatherly-app-sr.vercel.app",
    },
    {
      title: "Lingoora",
      description:
        "An online English-learning platform that connects students with language teachers. It features teacher discovery, online class booking, and a seamless learning experience.",
      tags: ["React", "TS", "In-Progress"],
      sourceUrl: "https://github.com/SajjadR17",
      demoUrl: "https://lingoora.vercel.app",
    },
    {
      title: "Ink & Field",
      description:
        "A modern blog platform where users can explore and manage blog content. Includes user authentication and cloud data management using Firebase and Firestore.",
      tags: ["React", "JS", "Firebase"],
      sourceUrl: "https://github.com/SajjadR17/blog-app",
      demoUrl: "https://ink-field-blog-app.vercel.app",
    },
    {
      title: "Nightline AI",
      description:
        "An AI-powered chat application featuring conversational history, multiple AI models, web search, image generation, and personalized user context.",
      tags: ["React", "JS", "Groq", "Firebase"],
      sourceUrl: "https://github.com/SajjadR17/ai-chat-app",
      demoUrl: "https://nightline-ai.vercel.app",
    },
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
            ".projects-title",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
          )
          .from(
            ".project",
            { scale: 1.06, opacity: 0, duration: 0.45, ease: "back.out(1.6)" },
            "-=0.4",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="projects-sec" ref={root}>
      <div className="projects container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              name={project.title}
              tags={project.tags}
              description={project.description}
              demoLink={project.demoUrl}
              codesLink={project.sourceUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
