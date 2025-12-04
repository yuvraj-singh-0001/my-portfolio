import { useState } from 'react'
import { ExternalLink, Github, Search, Filter } from 'lucide-react'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with admin dashboard, payment integration, and inventory management.',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      category: 'fullstack',
      technologies: ['React', 'Firebase', 'Tailwind', 'Zustand'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '⛅'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with contact form and project showcase.',
      category: 'frontend',
      technologies: ['React', 'Tailwind', 'EmailJS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '🎨'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication and file sharing.',
      category: 'fullstack',
      technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '💬'
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'Personal finance management tool with data visualization and reporting.',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '💰'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase()) ||
                         project.technologies.some(tech => 
                           tech.toLowerCase().includes(search.toLowerCase())
                         )
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Filter size={18} className="mr-2" />
            My Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents unique challenges and solutions.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    filter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}