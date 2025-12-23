import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  const links = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jasonniebauer/',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/jasonniebauer'
    },
  ];

  const navigationLinks = links.map(link =>
    <a key={link.title} href={link.url}>{link.title}</a>
  );

  return (
    <div className="container">
      <NavBar navLinks={navigationLinks} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer navLinks={navigationLinks} />
    </div>
  );
}

export default App
