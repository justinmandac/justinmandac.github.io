/**
 * @fileoverview Component definition for the Projects Page.
 */
import React from 'react';
import Project from './project.component';
import getProjects from './data/projects';

const Projects = () => {
  // Generate projects list.
  const list = getProjects().map((data, key) => {
    return (
      <Project key={key}
        title={data.title}
      />
    );
  });
  return (
    <section className="page projects-section section">
      <h3 className="container">Projects</h3>
      <ul className="projects-list container">
        {list}
      </ul>
    </section>
  );
};
export default Projects;