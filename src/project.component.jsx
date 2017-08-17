/**
 * @fileoverview Project item component for the Project List.
 */
import React from 'react';

const Project = ({title}) => (
  <li className="project">
    <div className="project__title">
      {title}
    </div>
  </li>
);

export default Project;