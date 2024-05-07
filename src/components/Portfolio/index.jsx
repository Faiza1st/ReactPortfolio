
import ProjectCard from "../Project";
import { getImageUrl } from "../../utils/helper.js"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "React Website",
      description: "A react Websit place to share my projects not only if I'm applying for jobs or working as a freelancer but also so that I can share my work with fellow developers and collaborate on future projects",
      link: "https://github.com/Faiza1st/ReactPortfolio",
    },
      {
      id: 2,
      title: "Social Network API",
      description: "A backend program created to provide an API for a social network. It makes use of a NoSQL database powered by MongoDB and has endpoints for managing users, thoughts, reactions, and friend lists.",
      link: "https://github.com/Faiza1st/SocialNetworkAPI",
    },
    {
      id: 3,
      title: "TextEditor",
      description: "This project is an offline text editor web application that allows you to create and store notes or code snippets with or without an internet connection, and it uses IndexedDB for storage.",
      link: "https://github.com/Faiza1st/TextEditor",
    },
    {
      id: 4,
      title: "Ecommerce Back End",
      description: "As a manager at an internet retail company, having a robust and efficient backend for your e-commerce website is crucial for competing in today's market. This proposal outlines the implementation of a backend solution using the latest technologies to meet the needs of your company.",
      link: "https://github.com/Faiza1st/EcommerceBackEnd",
    },
  
  ];

  return (
    <div className="portfolio">
      <h1 >Recent Projects</h1>
      <div >
      <p > Click on the link to be directed to github</p>
      <img className="reactimg"
          src={getImageUrl("react.png")}
          alt="My Profile"
        />

        <div className="row">
          
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};


export default Portfolio;