import React from 'react';
// pages/_app.tsx
import 'shepherd.js/dist/css/shepherd.css';
import Hero from '@/components/Hero'; // Import your Hero component
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import ProjectSection from '@/components/Projects';


export default function Home() {
  return (
    <div>
      <div className="">
        <Hero />
        <AboutMe />
        <Skills />
        <Tools />
        <ProjectSection />
      </div>
    </div>
  );
}
