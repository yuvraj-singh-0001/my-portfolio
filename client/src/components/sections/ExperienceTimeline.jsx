import React from 'react';
import { Briefcase, Calendar, ExternalLink, Code } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'The True Topper',
      period: 'Feb 2026 - Present',
      description:
        'Working as a full-time full stack developer, building and maintaining scalable web platforms, optimizing performance, and enhancing user experience for students and schools.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Git & GitHub',
        'Responsive Design',
        'UI/UX',
      ],
      link: 'https://thetruetopper.com',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'creativestudio24.in',
      period: 'Aug 2025 - Jan 2026',
      description:
        'Worked on modern web applications using React, Node.js, and MongoDB. Contributed to client projects and implemented responsive, mobile-first designs.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Git & GitHub',
        'Responsive Design',
      ],
      link: 'https://creativestudio24.in',
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2025 - Present',
      description:
        'Designing and developing custom websites and software systems for clients. Currently available to build modern, high-performance web applications, landing pages, and admin dashboards for businesses and individuals.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Git & GitHub',
        'Responsive Design',
        'UI/UX',
      ],
      link: null,
    },
  ];

  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-neon-500 to-accent" />
              )}

              <div className="relative glass-dark rounded-2xl p-6 ml-4 md:ml-16 border border-gray-800 hover:border-neon-500/50 transition-all duration-300">
                <div className="absolute -left-4 md:-left-16 top-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center border-2 border-neon-500">
                    <Briefcase className="text-neon-500 w-5 h-5 md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-neon-500 mb-1">
                      <span className="text-base md:text-lg">
                        {exp.company}
                      </span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-400 mt-1 md:mt-0 text-sm md:text-base">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-xs md:text-sm flex items-center space-x-2"
                    >
                      <Code size={14} />
                      <span>{skill.trim()}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
