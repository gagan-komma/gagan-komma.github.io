import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';
import useTheme from './hooks/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;