import React from 'react';
import 'shepherd.js/dist/css/shepherd.css';
import Hero from '@/components/Hero'; // Import your Hero component
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import ProjectSection from '@/components/Projects';
import Shepherd from 'shepherd.js';

export default function Home() {
  const tour = new Shepherd.Tour({
    id: 'my-tour',
    steps: [
      {
        text: 'Welcome to my application.',
        attachTo: {
          element: '.hero',
          on: 'bottom',
        },
      },
      {
        text: 'This is the hero section.',
        attachTo: {
          element: '.hero',
          on: 'bottom',
        },
      },
      {
        text: 'This is the about me section.',
        attachTo: {
          element: '.about-me',
          on: 'bottom',
        },
      },
    ],
  });
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
  )
}
    