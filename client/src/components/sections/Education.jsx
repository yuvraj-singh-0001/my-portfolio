import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Delhi Technological University',
      year: '2016 - 2020',
      grade: '8.5 CGPA',
      achievements: ['University Topper', 'Hackathon Winner']
    },
    {
      degree: 'Full Stack Development',
      field: 'MERN Stack Specialization',
      institution: 'Coding Academy',
      year: '2020',
      grade: 'Certified',
      achievements: ['Top 5% of Batch', 'Capstone Project Excellence']
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {education.map((edu, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-start mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-primary font-medium">{edu.field}</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <p className="text-sm text-gray-500">Institution</p>
              <p className="font-medium">{edu.institution}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-medium">{edu.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Grade</p>
                <p className="font-medium text-primary">{edu.grade}</p>
              </div>
            </div>
          </div>

          {edu.achievements.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Award className="text-yellow-500 mr-2" size={18} />
                <p className="font-medium">Achievements</p>
              </div>
              <ul className="space-y-1">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}