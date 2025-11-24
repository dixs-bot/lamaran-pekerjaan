// src/App.jsx

import Topbar from "./components/layout/Topbar";
import Hero from "./components/sections/Hero";
import ProfilSection from "./components/sections/ProfilSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import BiodataSection from "./components/sections/BiodataSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";

function App() {
  return (
    <div className="app-root">
      <Topbar />

      <main>
        <Hero />
        <ProfilSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BiodataSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
