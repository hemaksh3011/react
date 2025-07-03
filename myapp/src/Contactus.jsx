import React from 'react';
import './Contactus.css'

function Contactus() {
  return (
    <div>
      <h2>COntact us</h2>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea rows="5" placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
