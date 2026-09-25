import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import "../styles/skills.css";

function Skills() {
  return (
    <section className="skills-sec" id="skills">
      <div className="sec-header">
        <h2 className="sec-title">Skills</h2>
        <div className="header-border"></div>
      </div>
      <div className="skills">
        <div className="skill-card">
          <SiHtml5 size={22} />
          HTML
        </div>
        <div className="skill-card">
          <SiCss size={22} />
          CSS
        </div>
        <div className="skill-card">
          <SiJavascript size={22} />
          JavaScript
        </div>
        <div className="skill-card">
          <SiTypescript size={22} />
          TypeScript
        </div>
        <div className="skill-card">
          <SiReact size={22} />
          React
        </div>
        <div className="skill-card">
          <SiPostgresql size={22} />
          PostgreSQL
        </div>
        <div className="skill-card">
          <SiRedux size={22} />
          Redux
        </div>
        <div className="skill-card">
          <SiTailwindcss size={22} />
          Tailwind CSS
        </div>
        <div className="skill-card">
          <SiFirebase size={22} />
          Firebase
        </div>
        <div className="skill-card">
          <SiSupabase size={22} />
          Supabase
        </div>
        <div className="skill-card">
          <SiGit size={22} />
          Git
        </div>
        <div className="skill-card">
          <SiGithub size={22} />
          GitHub
        </div>
      </div>
    </section>
  );
}

export default Skills;
