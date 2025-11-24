import { experiences } from "../../data/experience";

function ExperienceSection() {
  return (
    <section id="pengalaman" className="section">
      <div className="container">
        <h2>Pengalaman Kerja</h2>
        <p className="section-note">
          Contoh format pengalaman kerja (silakan diubah dengan data asli).
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">{exp.company}</div>
                <div className="timeline-period">{exp.period}</div>
              </div>
              <div className="timeline-role">{exp.role}</div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
