import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  const [isAboutRevealed, setAboutSectionReveal] = useState(false);

  const handleAboutSectionReveal = () => {
    if (!isAboutRevealed) {
      setAboutSectionReveal(!isAboutRevealed);
    }
  }

  return (
    <div className="container">
      <NavBar showAboutSection={handleAboutSectionReveal} />
      <About
        isAboutSectionVisible={isAboutRevealed}
        showAboutSection={handleAboutSectionReveal}
      />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App
