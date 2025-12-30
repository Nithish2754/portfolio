import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for reaching out! Your message has been recorded.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="section">
      <h2>Contact</h2>
      <p>
        Feel free to reach out for internships, collaborations, or project ideas.
      </p>

      <div style={{ marginTop: "16px" }}>
        <p>Email: your.email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/nithish-r-46052031b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            linkedin.com/in/Nithish
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Nithish2754" target="_blank" rel="noreferrer">
            github.com/Nithish
          </a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

