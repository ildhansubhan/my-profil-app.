import React from 'react';
import './Projects.css'; // Mengimpor file CSS

function Projects() {
  const projects = [
    { title: 'Akumozara', description: 'Proyek ini bisa di akses lewat Akumozara.blogspot.com.' },
    
  ];

  return (
    <div className="container">
      <h1>Proyek Saya</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
