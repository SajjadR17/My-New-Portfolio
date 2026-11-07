import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSec />
        <Marquee />
        <AboutMe />
        {/* <Skills />
        <Projects />
        <ContactMe />
        <Footer /> */}
      </main>
    </>
  );
}

export default App;
