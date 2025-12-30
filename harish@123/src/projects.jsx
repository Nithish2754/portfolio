import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Vite.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Short description of your second project.",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Short description of your third project.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
      <p>
        These are some of the projects I have been working on to improve my
        development skills.
      </p>
      <div className="cards">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
