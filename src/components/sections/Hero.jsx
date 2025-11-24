import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/hacker11.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hacker-label">// portfolio . v1.0</p>
          <h1 className="hacker-heading">Diki Wahyudin</h1>
          <p className="hero-role">Web Design &amp; Frontend Developer</p>
          <p className="hero-summary">
            Fokus pada pembuatan tampilan website yang rapi, mudah digunakan,
            dan nyaman dilihat. Terbiasa bekerja terstruktur, teliti, dan siap
            mendukung kebutuhan digital perusahaan dengan pendekatan visual yang
            modern.
          </p>

          <div className="hero-actions">
            <a href="/berkas-diki.zip" className="btn btn-primary" download>
              Download Berkas (.zip)
            </a>
            <a
              href="https://wa.me/6285189976233"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
