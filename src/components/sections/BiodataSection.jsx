import { biodata } from "../../data/biodata";

function BiodataSection() {
  return (
    <section id="biodata" className="section">
      <div className="container">
        <h2>Biodata Diri</h2>
        <p className="section-note">Informasi pribadi singkat.</p>

        <div className="biodata-card">
          <div className="biodata-photo">
            <img src="/foto-diki.jpg" alt="Foto Diki Wahyudin" />
          </div>

          <div className="biodata-info">
            {biodata.map((item) => (
              <div key={item.id} className="biodata-row">
                <span className="biodata-label">{item.label}</span>
                <span className="biodata-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiodataSection;
