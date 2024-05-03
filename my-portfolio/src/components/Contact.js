import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email or connect with me on social media.</p>
        <ul>
          <li>Email: <a href="mailto:theteleramoonyane5@gmail.com">theteleramoonyane5@gmail.com</a></li>
          <li>
            LinkedIn: 
            <a href="https://www.linkedin.com/">
              https://www.linkedin.com/in/thetele-ramoonyane-319488120/?originalSubdomain=ls
            </a>
          </li>
          {/* Add more contact options as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
