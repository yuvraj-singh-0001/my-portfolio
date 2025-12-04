import { Briefcase, Calendar } from 'lucide-react'

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: '2023 - Present',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      description: 'Leading development of enterprise web applications using React and Node.js.',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      year: '2021 - 2023',
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      description: 'Developed and maintained multiple client projects with agile methodology.',
      skills: ['JavaScript', 'Express.js', 'MySQL', 'Docker']
    },
    {
      year: '2020 - 2021',
      company: 'Startup Studio',
      position: 'Frontend Developer',
      description: 'Built responsive user interfaces for various startup products.',
      skills: ['React', 'TypeScript', 'Tailwind', 'Redux']
    }
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute md:relative left-6 md:left-auto md:w-1/2 flex justify-center mb-4 md:mb-0">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-primary mr-3" size={20} />
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                </div>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{exp.year}</span>
                  <span className="mx-2">•</span>
                  <span className="text-primary font-semibold">{exp.company}</span>
                </div>

                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}