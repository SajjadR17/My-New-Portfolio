import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.webp";
import jsIcon from "../assets/js-icon.png";
import reactIcon from "../assets/react-icon1.png";
import githubIcon from "../assets/github.webp";
import eyeIcon from "../assets/eye-icon.png";
import gitIcon from "../assets/git-icon.png";
import vscodeIcon from "../assets/vscode-icon.png";
import viteIcon from "../assets/vite-icon.webp";
import npmIcon from "../assets/npm-icon.webp";

const projects = [
  {
    pName: "Football Hub",
    pLink: "https://sajjadr17.github.io/modern-api-football-page/",
    pCodes: "https://github.com/SajjadR17/modern-api-football-page",
    pClass: "project1",
    pTech: [htmlIcon, cssIcon, jsIcon, vscodeIcon, gitIcon],
    pInfo:
      "A dynamic football platform built with Vanilla JS. It features live scores, league tables, and player details using Mock API, with custom modals and a dedicated video player for goals.",
  },
  {
    pName: "Advanced Quiz App",
    pLink: "https://sajjadr17.github.io/quiz-app/",
    pCodes: "https://github.com/SajjadR17/quiz-app",
    pClass: "project2",
    pTech: [htmlIcon, cssIcon, jsIcon, vscodeIcon, gitIcon],
    pInfo:
      "A full-featured quiz system with local storage authentication. It includes a dynamic leaderboard, user profiles, and immersive sound effects to enhance the gaming experience.",
  },
  {
    pName: "React Contact Manager",
    pLink: "https://sajjadr17.github.io/contact-app-react/",
    pCodes: "https://github.com/SajjadR17/contact-app-react",
    pClass: "project3",
    pTech: [reactIcon, viteIcon, npmIcon, vscodeIcon, gitIcon],
    pInfo:
      "My first React project focused on smart form handling. It uses a single-function state manager and strict validation to ensure all contact data is accurate and well-formatted.",
  },
  {
    pName: "Dynamic Testimonials",
    pLink: "https://sajjadr17.github.io/modern-comment-page/",
    pCodes: "https://github.com/SajjadR17/modern-comment-page",
    pClass: "project4",
    pTech: [htmlIcon, cssIcon, jsIcon, vscodeIcon, gitIcon],
    pInfo:
      "An automated review slider that updates user comments and ratings every 5 seconds. A clean exercise in JavaScript timing events and smooth DOM manipulation.",
  },
];

function ProjectsSection() {
  return (
    <>
      <div id="projects" className="project-title">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          My Projects
        </h2>
        <h4 data-aos="fade-up" data-aos-duration="1000">
          This Section will be updated, still learning
        </h4>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="project"
              key={project.pClass}
            >
              <div className="project-name">
                <h3>{project.pName}</h3>
                <div className="tech-icons">
                  {project.pTech.map((tech) => (
                    <img src={tech} alt="" />
                  ))}
                </div>
              </div>
              <h5>{project.pInfo}</h5>
              <div className="project-links">
                <a href={project.pLink}>
                  <p className="project-link">Live Demo</p>
                </a>
                <a href={project.pCodes}>
                  <p className="project-link">Source Code</p>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProjectsSection;
