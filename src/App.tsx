import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { WhatWeBuild } from '@/components/layout/WhatWeBuild';
import { Pricing } from '@/components/layout/Pricing';
import { AboutAndWhy } from '@/components/layout/AboutAndWhy';
import { ProcessAndCTA } from '@/components/layout/ProcessAndCTA';
import MacbookCTA, { HeroScrollDemo } from '@/components/layout/MacbookCTA';
import { QuoteCTA } from '@/components/layout/QuoteCTA';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <Pricing />
        <AboutAndWhy />
        <ProcessAndCTA  />
        <MacbookCTA />
        <QuoteCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
