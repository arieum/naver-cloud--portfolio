import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SelfIntro from './components/SelfIntro';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import IntroGate from './components/IntroGate';

function App() {
  return (
    <div className="min-h-screen text-[#333]">
      <IntroGate />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <SelfIntro />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;