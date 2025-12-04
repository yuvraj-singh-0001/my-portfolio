import { Code, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={28} />,
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Redux']
    },
    {
      icon: <Server className="text-green-600" size={28} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      icon: <Database className="text-purple-600" size={28} />,
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Prisma']
    },
    {
      icon: <Cloud className="text-orange-600" size={28} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Nginx', 'Linux']
    },
    {
      icon: <Smartphone className="text-pink-600" size={28} />,
      title: 'Mobile',
      skills: ['React Native', 'PWA', 'Responsive Design', 'App Store Deployment']
    },
    {
      icon: <Palette className="text-cyan-600" size={28} />,
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX Principles', 'Prototyping', 'Wireframing']
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Code size={18} className="mr-2" />
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I work with a wide range of technologies to build scalable and efficient solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}