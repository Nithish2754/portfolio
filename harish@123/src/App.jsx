import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section className="hero">
        <p className="hero-sub">2nd Year CSE CYBERSECURITY · Sri Sairam Engineering College</p>
        <h1>Hi, I am Nithish</h1>
        <p>
          A Computer Science Engineering student who loves building modern web
          interfaces with React, JavaScript, HTML, and CSS. I enjoy taking small
          ideas and turning them into working projects that people can actually use.
        </p>

        <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link
            to="/skills"
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.6)",
              color: "#e5e7eb",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            View Skills
          </Link>
          <Link
            to="/contact"
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.6)",
              color: "#e5e7eb",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am currently in my 2nd year of Computer Science Engineering at Sri
          Sairam Engineering College. During this time, I have been focusing on
          building a strong base in programming, data structures, algorithms, and
          core CS subjects while actively applying what I learn through small
          projects and experiments.
        </p>
        <p style={{ marginTop: "10px" }}>
          Most of my recent work has been around frontend development with
          React, where I practice creating single‑page and multi‑page
          applications, organizing components properly, and writing clean,
          readable code. I enjoy learning modern tools like Vite, React Router,
          and different CSS techniques to make my projects look better and run
          faster.
        </p>
        <p style={{ marginTop: "10px" }}>
          My goal is to become a full‑stack developer who understands both the
          frontend and backend. I am actively looking for internships and
          collaborative projects where I can improve my skills, work with other
          developers, and contribute to real‑world applications.
        </p>
      </section>

      <section className="section">
        <h2>What I Know</h2>
        <div className="cards">
          <div className="card">
            <h3>Web Technologies</h3>
            <p>
              Comfortable with HTML, CSS, JavaScript, and React. I use these to
              build responsive pages, simple components, and small web
              applications.
            </p>
          </div>
          <div className="card">
            <h3>Programming & CS</h3>
            <p>
              Learning Java along with data structures, algorithms, OOP,
              and DBMS to strengthen my problem‑solving and logical thinking.
            </p>
          </div>
          <div className="card">
            <h3>Tools & Workflow</h3>
            <p>
              Use Git, GitHub, VS Code, version
              control, and fast project setup, following a structured workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Current Focus</h2>
        <div className="cards">
          <div className="card">
            <h3>Building Projects</h3>
            <p>
              Creating more React projects such as dashboards, portfolio pages,
              and small web apps to improve UI, state management, and code
              structure.
            </p>
          </div>
          <div className="card">
            <h3>Interview Preparation</h3>
            <p>
              Practising coding questions related to arrays, strings, recursion,
              and basic algorithms to prepare for future internships and
              placements.
            </p>
          </div>
          <div className="card">
            <h3>Learning Backend</h3>
            <p>
              Exploring Node.js, Express, and APIs so that later I can connect
              my React frontends to real databases and build full‑stack apps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};



const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Nithish</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nithish. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;


