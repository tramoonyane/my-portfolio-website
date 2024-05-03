import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '50px', backgroundColor: '#c0c0c0', textAlign: 'center', fontSize: '1.2em' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email or connect with me on social media.</p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginBottom: '10px' }}>Email: theteleramoonyane5@gmail.com</li>
          <li style={{ marginBottom: '10px' }}>
            LinkedIn: 
            <a href="https://www.linkedin.com/" style={{ color: '#007bff', textDecoration: 'none', padding: '5px 10px', display: 'inline-block', maxWidth: '90%', overflowWrap: 'break-word', marginBottom: '5px' }}>
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
