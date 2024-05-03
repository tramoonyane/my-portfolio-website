import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML5/CSS3</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>NoSQL</li> {/* New skill: NoSQL */}
          <li>Advanced SQL</li> {/* New skill: Advanced SQL */}
          <li>Introduction to MySQL</li> {/* New skill: Introduction to MySQL */}
          <li>Python</li> {/* New skill: Python */}
          <li>Web Flask</li> {/* New skill: Web Flask */}
          <li>Working with APIs</li> {/* New skill: Working with APIs */}
          <li>C</li> {/* New skill: C */}
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
