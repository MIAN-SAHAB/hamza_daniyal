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

function App() {
  return (
    <div className="bg-bg-light text-text-main font-bellota min-h-screen selection:bg-primary selection:text-white overflow-hidden">
      {/* Global floating animated background shapes */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] animate-[spin_20s_linear_infinite] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[120px] animate-[spin_25s_linear_infinite_reverse] pointer-events-none z-[-1]"></div>
      <div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[90px] animate-[pulse_10s_ease-in-out_infinite] pointer-events-none z-[-1]"></div>

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
    </div>
  );
}

export default App;
