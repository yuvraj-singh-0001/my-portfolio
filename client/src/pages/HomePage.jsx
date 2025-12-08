import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../pages/AboutPage';
import Education from '../components/sections/Education';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import ContactForm from '../components/sections/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
};

export default HomePage;