import { Award, Calendar, Code, GraduationCap, MapPin, Users } from 'lucide-react'
import ExperienceTimeline from '../components/sections/ExperienceTimeline'
import Education from '../components/sections/Education'

export default function AboutPage() {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Database Design', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'DevOps & Deployment', level: 75 },
    { name: 'Problem Solving', level: 95 },
  ]

  const services = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies'
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Consultation',
      description: 'Technical consultation and architecture design'
    },
    {
      icon: <Award className="text-purple-600" size={24} />,
      title: 'Mentoring',
      description: 'Code reviews and team mentoring'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Users size={18} className="mr-2" />
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            I'm a passionate Full Stack Developer with 3+ years of experience building scalable web applications. 
            I believe in writing clean, efficient code and creating user experiences that matter.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-gray-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">15th March 1998</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-gray-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">B.Tech Computer Science</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="text-gray-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">3+ Years Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Services */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hello! I'm Yuvraj, a dedicated Full Stack Developer with a passion for creating 
                  digital solutions that solve real-world problems. My journey in web development 
                  started during my college days, and since then, I've been continuously learning 
                  and adapting to new technologies.
                </p>
                <p>
                  I specialize in building responsive web applications using the MERN stack 
                  (MongoDB, Express.js, React.js, Node.js), but I'm always excited to work with 
                  new tools and frameworks.
                </p>
                <p>
                  What drives me is the opportunity to create products that make people's lives 
                  easier. I believe in clean code, thorough testing, and continuous improvement.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">What I Offer</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <ExperienceTimeline />
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Education />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-600 mb-6">
              Have a project in mind? I'd love to hear about it and discuss how we can work together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}