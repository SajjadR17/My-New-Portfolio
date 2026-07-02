import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div class="bg-grid"></div>
      <div class="glow1"></div>
      <div class="glow2"></div>
      <Header />
      <main className="container">
        <HeroSec />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
