import React from 'react';
import Hero from '../components/sections/Hero';
import Education from '../components/sections/Education';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import ContactForm from '../components/sections/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Education />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
};

export default HomePage;