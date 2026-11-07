import { LuCode, LuExternalLink } from "react-icons/lu";

function ProjectCard({ name, tags, description, codesLink, demoLink }) {
  return (
    <article class="card project">
      <div class="body">
        <h3>{name}</h3>
        <ul class="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
      <div class="links">
        <a target="_blank" rel="noopener noreferrer" href={codesLink}>
          <LuCode />
          View code
        </a>
        <a target="_blank" rel="noopener noreferrer" href={demoLink}>
          <LuExternalLink />
          View demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
