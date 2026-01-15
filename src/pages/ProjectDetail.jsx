import { useParams, Link } from "react-router-dom";
import { projects } from "../data/data";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container text-center">
          <h1>Project not found</h1>
          <Link to="/" className="btn btn-outline-success mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="project-detail">
      <div className="container">
        <h1 className="mb-3">{project.title}</h1>
        <p className="lead mb-4">{project.description}</p>
        
        <img 
          src={project.image} 
          className="img-fluid mb-4" 
          alt={project.title} 
        />
        
        <div className="row">
          <div className="col-lg-8">
            <h4>Project Details</h4>
            <p>{project.details}</p>
            
            <h4 className="mt-4">Technologies Used</h4>
            <div className="mb-4">
              {project.technologies.map(tech => (
                <span className="badge" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <h4>Links</h4>
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-outline-success w-100 mb-3"
            >
              <i className="fab fa-github me-2"></i>
              View on GitHub
            </a>

            {project.live_demo && (
              <a 
                href={project.live_demo} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-success w-100 mb-3"
              >
                <i className="fas fa-external-link-alt me-2"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>

        <Link to="/#projects" className="btn btn-outline-success mt-4">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Projects
        </Link>
      </div>
    </section>
  );
}