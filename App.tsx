import React from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Testimonials from './components/Testimonials';
import Methodology from './components/Methodology';
import ProgramDetails from './components/ProgramDetails';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black font-sans text-white overflow-x-hidden selection:bg-brand-neon selection:text-black">
      <Hero />
      <Bio />
      <Testimonials />
      <Methodology />
      <ProgramDetails />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;