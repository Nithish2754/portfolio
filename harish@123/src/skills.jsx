import React from "react";

const coreSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js","Github"];
const csSkills = ["C", "C++", "Data Structures", "OOP", "DBMS"];

const Skills = () => {
  return (
    <div className="section">
      <h2>Skills</h2>
      <p>
        Here are the technologies and concepts I am learning and using in my
        projects as a 2nd year CSE student.
      </p>

      <h3 style={{ marginTop: "18px", marginBottom: "8px" }}>Web & Tools</h3>
      <div className="chip-container">
        {coreSkills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>

      <h3 style={{ marginTop: "18px", marginBottom: "8px" }}>
        Computer Science
      </h3>
      <div className="chip-container">
        {csSkills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
