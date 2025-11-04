import React from 'react';
import Hero from './components/Hero';
import Privileges from './components/Privileges';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <main className="min-h-screen w-full bg-[#081126]">
      <Hero />
      <Privileges />
      <HowItWorks />
      <CTA />
    </main>
  );
}

export default App;
