import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects-sec" id="projects">
      <div className="sec-header">
        <h2 className="sec-title">Projects</h2>
        <div className="header-border"></div>
      </div>
      <div className="projects">
        <ProjectCard
          pName="Weatherly"
          pDesc="A modern weather application that provides real-time weather forecasts using the OpenWeatherMap API. Built with React, featuring a clean, responsive interface and dynamic weather updates."
          pTechs={["React", "JS", "OWM API"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/weather-app.git",
            },
            { name: "Demo", link: "https://weatherly-app-sr.vercel.app/" },
          ]}
        />
        <ProjectCard
          pName="Calculator"
          pDesc="A responsive calculator application with a clean and intuitive user interface. Supports all basic arithmetic operations while focusing on accuracy, performance, and user experience."
          pTechs={["React", "JS"]}
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
          pDesc="A modern blog platform where users can explore posts with authentication powered by Firebase and Firestore."
          pTechs={["React", "JS", "Firebase", "Firestore"]}
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
          pName="Nightline Ai"
          pDesc="An AI-powered chat application with conversational history, multiple AI models, web search, image generation, and personalized user context, built with React and Firebase."
          pTechs={["React", "JS", "Groq", "Firebase", "Firestore"]}
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
    </div>
  );
}

export default Projects;
