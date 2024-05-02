import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>holbertonschool-system_engineering-devops</h3>
          <p>Web infrastructure project including various DevOps tasks.</p>
          <a href="https://github.com/tramoonyane/holbertonschool-system_engineering-devops">GitHub Link</a>
        </div>
        <div className="project">
          <h3>holbertonschool-AirBnB_clone</h3>
          <p>Implementation of a simple clone of the Airbnb platform.</p>
          <a href="https://github.com/tramoonyane/holbertonschool-AirBnB_clone">GitHub Link</a>
        </div>
        <div className="project">
          <h3>holbertonschool-AirBnB_clone_v2</h3>
          <p>Enhanced version of the Airbnb clone project with additional features.</p>
          <a href="https://github.com/tramoonyane/holbertonschool-AirBnB_clone_v2">GitHub Link</a>
        </div>
        <div className="project">
          <h3>Holberton School C Algorithms and Data Structures</h3>
          <p>Collection of algorithms and data structures implemented in C.</p>
          <a href="https://github.com/tramoonyane/holbertonschool-low_level_programming">GitHub Link</a>
        </div>
        <div className="project">
          <h3>Holberton School Python Algorithms and Data Structures</h3>
          <p>Collection of algorithms and data structures implemented in Python.</p>
          <a href="https://github.com/tramoonyane/holbertonschool-higher_level_programming">GitHub Link</a>
        </div>
        <div className="project">
          <h3>InternPulse Project</h3>
          <p>Simple Movie browser web application developed using HTML, CSS, JavaScript, and React.</p>
          <a href="https://github.com/tramoonyane/Movie_Browser_web_Application">GitHub Link</a>
          <br />
          <a href="https://imaginative-dolphin-e2e7de.netlify.app">Live Project (Netlify)</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
