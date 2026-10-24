import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />
        <Education />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
