function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Programming Languages</h3>

          <div className="skill-grid">
            <div className="skill-card">C</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">Python</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Web Development</h3>

          <div className="skill-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Concepts</h3>

          <div className="skill-grid">
            <div className="skill-card">DSA</div>
            <div className="skill-card">AI Basics</div>
            <div className="skill-card">Problem Solving</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Platforms</h3>

          <div className="skill-grid">
            <div className="skill-card">Git</div>
            <div className="skill-card">GitHub</div>
            <div className="skill-card">Netlify</div>
            <div className="skill-card">VS Code</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;