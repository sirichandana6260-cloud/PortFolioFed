import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">

  
      <div className="home-left">
        <h1>Hi, I'm Siri chandana</h1>
        <h2>B Tech student</h2>

        <p>
          I am passionate about building web applications using
          React, Node.js, Java, Python, and AI-based solutions.
        </p>

        <a href="#projects" className="btn">
          View My Projects
        </a>
      </div>

 
      <div className="home-right">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Home;