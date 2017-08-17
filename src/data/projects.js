/**
 * @fileoverview Data Layer for retrieving the list of Projects.
 */

const ProjectsList = [
  {
    title: '',
    metadata: {
      description: '',
    },
    url: '',
  },
];

/**
 * Retrieves the list of projects to be displayed.
 * Currently wraps around the ProjectsList array in order to abstract data
 * retrieval in case we switch to AJAX.
 *
 * @return {!Array} List of Projects
 */
export default function getProjects() {
  return ProjectsList;
};