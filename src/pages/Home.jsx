import { projects, skills } from "../data/data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-3">Aravapalli Karunya</h1>
              <p className="lead">Developer, ML enthusiast</p>
              <p className="tagline">
                I transform ideas into seamless digital experiences with the power of modern web technologies.
              </p>
              <a href="#projects" className="btn btn-outline-success btn-lg mt-3">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="text-success mb-4">About Me</h2>
              <p className="mb-3">
                Hello! I'm Karunya, a passionate developer and AI/ML enthusiast.
              </p>
              <p className="mb-3">
                I'm a B.Tech Information Technology student at Andhra University, passionate about building responsive and modern web applications and developing AI/ML solutions.
              </p>
              <p className="mb-3">
                I work with technologies like React, Flask to create efficient digital solutions. I have a good foundation in Data Structures and Algorithms and actively apply them in problem-solving. I leverage a robust understanding of ML and AI to successfully integrate intelligent systems that drive results.
              </p>
              <p>
                Quick to learn and adapt, I thrive on turning ideas into user-friendly, impactful and integrated applications. My goal is to grow as a developer while contributing to meaningful tech solutions and developing intelligent systems.
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img 
                src="/images/portfolio.jpg" 
                alt="Karunya" 
                className="profile-img img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-success mb-5">Skills</h2>
          <div className="row g-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div className="col-lg-3 col-md-6" key={category}>
                <div className="skill-column">
                  <h5 className="skill-category">{category}</h5>
                  <ul className="skill-list">
                    {skillList.map(skill => (
                      <li className="skill-item" key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-success mb-5">Projects</h2>
          <div className="row g-4">
            {projects.map(project => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className="card h-100">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title} 
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text mb-4">{project.description}</p>
                    <Link 
                      to={`/project/${project.id}`} 
                      className="btn btn-outline-success mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2 className="text-success mb-4">Get In Touch</h2>
          <p>
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
          <div className="social-icons mt-4">
            <a 
              href="https://www.linkedin.com/in/karunya-aravapalli" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/Karunya-3" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="mailto:karunyaaravapalli@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}