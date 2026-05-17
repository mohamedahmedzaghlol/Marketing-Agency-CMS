import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-box">
      <h2 className="contact-title">Get In Touch</h2>

      <label>Your Name</label>
      <input
        type="text"
        placeholder="Jane Smith"
        className="contact-input"
      />

      <label>Email Address</label>
      <input
        type="email"
        placeholder="jane@example.com"
        className="contact-input"
      />

      <label>Message</label>
      <textarea
        placeholder="Tell us about your project..."
        rows={5}
        className="contact-input contact-textarea"
      />

      <button className="send-btn">
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;