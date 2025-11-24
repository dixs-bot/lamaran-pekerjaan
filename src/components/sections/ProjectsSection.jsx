import { projects } from "../../data/projects";

function ProjectsSection() {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2>Project Web</h2>
        <p className="section-note">Contoh project dummy dapat diganti project asli.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.image} alt={project.title} className="project-image" />

              <div className="project-body">
                <div className="project-title">{project.title}</div>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  className="btn-preview"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat Tampilan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
