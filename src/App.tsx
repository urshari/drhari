import MatrixRain from './components/MatrixRain';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Impact } from './components/Impact';
import { Speaking } from './components/Speaking';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans relative">
      <MatrixRain />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Impact />
        <Speaking />
        <Certifications />
        <Education />
        <Research />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
