import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.webp";
import sassIcon from "../assets/sass-icon.webp";
import jsIcon from "../assets/js-icon.png";
import reactIcon from "../assets/react-icon1.png";
import postmanIcon from "../assets/postman-icon.webp";
import gitIcon from "../assets/git-icon.png";
import githubIcon from "../assets/github.webp";
import vscodeIcon from "../assets/vscode-icon.png";
import linuxIcon from "../assets/linux-icon.webp";
import viteIcon from "../assets/vite-icon.webp";
import npmIcon from "../assets/npm-icon.webp";

const skills = [
  { name: "HTML5", icon: htmlIcon, id: 1 },
  { name: "CSS3", icon: cssIcon, id: 2 },
  { name: "Javascript", icon: jsIcon, id: 3 },
  { name: "sass", icon: sassIcon, id: 4 },
  { name: "React", icon: reactIcon, id: 5 },
  { name: "Postman", icon: postmanIcon, id: 6 },
  { name: "Git", icon: gitIcon, id: 7 },
  { name: "Github", icon: githubIcon, id: 8 },
  { name: "Vs Code", icon: vscodeIcon, id: 9 },
  { name: "Linux", icon: linuxIcon, id: 10 },
  { name: "Vite", icon: viteIcon, id: 11 },
  { name: "Npm", icon: npmIcon, id: 12 },
];

function SkillsSection() {
  return (
    <>
      <div id="skill" className="skill-title">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          My Skills and Tools
        </h2>
        <h4 data-aos="fade-up" data-aos-duration="1000">
          This Section will be updated, still learning
        </h4>
      </div>
      <div
        className="skills-section"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="skills">
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.id}>
                <div className="skill-icon">
                  <img src={skill.icon} alt="" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSection;
