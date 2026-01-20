// File: client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="bg-[#18181B] min-h-screen text-slate-200 selection:bg-[#10B981] selection:text-black">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;