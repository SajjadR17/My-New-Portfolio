import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects-sec" id="projects">
      <div className="sec-header">
        <h2 className="sec-title">Projects</h2>
        <div className="header-border"></div>
      </div>
      <div className="projects">
        <ProjectCard
          pName="Weatherly"
          pDesc="A modern weather application that provides real-time weather data and forecasts using the OpenWeatherMap API. Built with React with a responsive interface and dynamic weather-based content."
          pTechs={["React", "JavaScript", "REST API"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/weather-app.git",
            },
            {
              name: "Demo",
              link: "https://weatherly-app-sr.vercel.app/",
            },
          ]}
        />
        <ProjectCard
          pName="Calculator"
          pDesc="A responsive calculator application built with React and JavaScript. It supports essential arithmetic operations with a focus on clean UI, accurate calculations, and a smooth user experience."
          pTechs={["React", "JavaScript"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/calculator-app.git",
            },
            {
              name: "Demo",
              link: "https://calculator-app-sr.vercel.app/",
            },
          ]}
        />
        <ProjectCard
          pName="Ink & Field"
          pDesc="A modern blog platform where users can explore and manage blog content. Includes user authentication and cloud data management using Firebase and Firestore."
          pTechs={["React", "JavaScript", "Firebase"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/blog-app.git",
            },
            {
              name: "Demo",
              link: "https://ink-field-blog-app.vercel.app/",
            },
          ]}
        />
        <ProjectCard
          pName="Nightline AI"
          pDesc="An AI-powered chat application featuring conversational history, multiple AI models, web search, image generation, and personalized user context."
          pTechs={["React", "JavaScript", "Groq", "Firebase"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/ai-chat-app.git",
            },
            {
              name: "Demo",
              link: "https://nightline-ai.vercel.app/",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
