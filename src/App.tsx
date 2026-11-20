import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Speaking } from './components/Speaking';
import { Impact } from './components/Impact';
import { Certifications } from './components/Certifications';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950"
      >
        Skip to content
      </a>
      <Navigation />

      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Speaking />
        <Impact />
        <Certifications />
        {/* Research, Patents & Academic Foundation */}
        <Research />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
