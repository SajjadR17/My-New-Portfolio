import { Toaster } from "react-hot-toast";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Marquee from "./components/Marquee";
import Now from "./components/Now";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Uses from "./components/Uses";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Archivo",
            padding: "15px",
            border: "2px solid var(--text-primary)",
          },
          success: {
            iconTheme: {
              primary: "var(--text-primary)",
              secondary: "var(--bg-primary)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--text-primary)",
              secondary: "var(--bg-primary)",
            },
          },
        }}
      />
      <Header />
      <main id="top">
        <HeroSec />
        <Marquee />
        <AboutMe />
        <Skills />
        <Projects />
        <Now />
        <Uses />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
