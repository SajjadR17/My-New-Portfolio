import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";

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
      </main>
    </>
  );
}

export default App;
