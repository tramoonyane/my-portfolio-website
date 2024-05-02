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
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
