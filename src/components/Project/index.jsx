
// Importing project card CSS and Link from react-router-dom
import { Link } from 'react-router-dom';


// Each project will be represented by a card in my portfolio page
const ProjectCard = ({ link, title , description }) => {
  return (
    <div className="project-card">
      <Link to={link} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}
 

export default ProjectCard;