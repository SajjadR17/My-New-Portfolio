function ProjectCard({ pName, pDesc, pTechs, links }) {
  return (
    <div className="project">
      <span className="project-name">{pName}</span>
      <div className="project-techs">
        {pTechs.map((tech) => (
          <div className="tech">{tech}</div>
        ))}
      </div>
      <span className="project-description">{pDesc}</span>
      <div className="project-btns">
        {links.map((linkItem) => (
          <a href={linkItem.link}>
            <button className="btn">{linkItem.name}</button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
