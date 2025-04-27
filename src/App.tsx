import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Qualification } from './components/sections/Qualification';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-navy z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-slate-dark dark:text-slate-light">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <CustomCursor />
      <Layout>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

export default App;