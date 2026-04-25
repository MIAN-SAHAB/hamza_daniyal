import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ContactPopup from './components/ContactPopup';
import { PopupProvider } from './context/PopupContext';

function App() {
  return (
    <PopupProvider>
      <div className="bg-bg-main text-text-main font-body selection:bg-primary selection:text-white overflow-hidden relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ContactPopup />
      </div>
    </PopupProvider>
  );
}

export default App;
