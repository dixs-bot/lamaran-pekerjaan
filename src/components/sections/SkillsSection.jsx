import { skills } from "../../data/skills";

function SkillsSection() {
  return (
    <section id="keahlian" className="section">
      <div className="container">
        <h2>Keahlian</h2>
        <p className="section-note">
          Beberapa kemampuan utama yang saya gunakan dalam pembuatan website.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
