import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Siluveru Siri Chandana</h1>

        <h2>Frontend Developer & BTech Student</h2>

        <p>
          Passionate about building responsive web applications using
          React, JavaScript, Java, Python and modern web technologies.
          I enjoy solving real-world problems through software development.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;