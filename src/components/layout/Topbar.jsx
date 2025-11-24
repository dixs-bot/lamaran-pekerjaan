function Topbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <span className="brand-mark">DW</span>
          <div>
            <div className="brand-name">Diki Wahyudin</div>
            <div className="brand-role">Web Design &amp; Frontend</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#profil">Profil</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#pengalaman">Pengalaman</a>
          <a href="#project">Project</a>
          <a href="#biodata">Biodata</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
