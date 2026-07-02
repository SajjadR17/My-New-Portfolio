import {
  DiCss3,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiLinux,
  DiNpm,
  DiReact,
  DiSass,
  DiVisualstudio,
} from "react-icons/di";
import "../styles/skills.css";
import { SiPostman, SiVite } from "react-icons/si";

function Skills() {
  return (
    <div className="skills-sec" id="skills">
      <div className="sec-header">
        <h2 className="sec-title">Skills</h2>
        <div className="header-border"></div>
      </div>
      <div className="skills">
        <div className="skill-card">
          <DiHtml5 size={30} />
          HTML
        </div>
        <div className="skill-card">
          <DiCss3 size={30} />
          CSS
        </div>
        <div className="skill-card">
          <DiJavascript size={30} />
          Javascript
        </div>
        <div className="skill-card">
          <DiReact size={30} />
          React
        </div>
        <div className="skill-card">
          <DiSass size={30} />
          Sass
        </div>
        <div className="skill-card">
          <SiPostman size={30} />
          Postman
        </div>
        <div className="skill-card">
          <DiGit size={30} />
          Git
        </div>
        <div className="skill-card">
          <DiGithub size={30} />
          Github
        </div>
        <div className="skill-card">
          <SiVite size={30} />
          Vite
        </div>
        <div className="skill-card">
          <DiNpm size={30} />
          Npm
        </div>
        <div className="skill-card">
          <DiLinux size={30} />
          Linux
        </div>
        <div className="skill-card">
          <DiVisualstudio size={30} />
          VS Code
        </div>
      </div>
    </div>
  );
}

export default Skills;
