import React from 'react';
import myPhoto from '../images/Thetele.jpg';
import '../styles/About.css';

function About() {
  return (
    <section id="about">
    <div className="container">
    <img src={myPhoto} alt="Thetele Ramoonyane" />
    <h2>About Me</h2>
    <p>I am Thetele Ramoonyane, a passionate Software engineer based in Lesotho, Maseru. I have a background in Software engineering and specialize in Frontend and Backend development.</p>
    <p>I love Machine learning, Augmented and virtual reality, and I'm always eager to learn and explore new technologies.</p>
    </div>
    </section>
  );
}

export default About;
