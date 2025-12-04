import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Projects() {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping with admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather with interactive maps',
      tech: ['React', 'Chart.js', 'API'],
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <ExternalLink size={18} className="mr-2" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}