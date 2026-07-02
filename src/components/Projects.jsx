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
          pTechs={["React", "JS", "OPM API"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/weather-app.git",
            },
            { name: "Demo", link: "https://weatherly-app-sr.netlify.app/" },
          ]}
        />

        <ProjectCard
          pName="Calculator"
          pDesc="A responsive calculator application with a clean and intuitive user interface. Supports all basic arithmetic operations while focusing on accuracy, performance, and user experience."
          pTechs={["React", "JS"]}
          links={[
            {
              name: "Source",
              link: "https://github.com/SajjadR17/calculator-app",
            },
            {
              name: "Demo",
              link: "https://sajjadr17.github.io/calculator-app/",
            },
          ]}
        />

        <ProjectCard
          pName="Movie App"
          pDesc="A movie discovery platform powered by the TMDB API, allowing users to browse trending movies, search titles, and save their favorites using Firebase and Firestore."
          pTechs={["React", "JS", "TMDB API", "Firebase", "Firestore"]}
          links={[{ name: "Upcoming", link: "" }]}
        />

        <ProjectCard
          pName="Chat App"
          pDesc="A real-time chat application with secure authentication and instant messaging powered by Firebase. Messages are stored in Firestore for seamless communication across devices."
          pTechs={["React", "JS", "Firebase", "Firestore"]}
          links={[{ name: "Upcoming", link: "" }]}
        />
      </div>
    </div>
  );
}

export default Projects;
