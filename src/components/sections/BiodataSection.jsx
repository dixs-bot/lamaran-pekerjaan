import { biodata } from "../../data/biodata";

function BiodataSection() {
  return (
    <section id="biodata" className="section">
      <div className="container">
        <h2>Biodata Diri</h2>
        <p className="section-note">
          Informasi pribadi singkat.
        </p>

        <div className="biodata-grid">
          {biodata.map((item) => (
            <div key={item.id} className="biodata-item">
              <span className="biodata-label">{item.label}</span>
              <span className="biodata-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BiodataSection;
