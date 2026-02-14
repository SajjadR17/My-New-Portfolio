import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VantaBackground from "./components/VantaBackground";
import Header from "./components/Header";
import HiSection from "./components/HiSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import topIcon from "./assets/Top-Icon.webp";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      <div id="go-top">
        <img src={topIcon} alt="" />
      </div>
      <VantaBackground />
      <Header />
      <main>
        <HiSection />
        <hr />
        <AboutSection />
        <hr />
        <SkillsSection />
        <hr />
        <ProjectsSection />
        <hr />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
