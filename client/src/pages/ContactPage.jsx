import ContactForm from '../components/sections/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start a project? Have a question? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          {[
            {
              icon: <Phone className="text-white" size={24} />,
              title: 'Call Me',
              info: '+91 98765 43210',
              bg: 'bg-blue-600',
              action: 'tel:+919876543210'
            },
            {
              icon: <Mail className="text-white" size={24} />,
              title: 'Email Me',
              info: 'your.email@gmail.com',
              bg: 'bg-green-600',
              action: 'mailto:your.email@gmail.com'
            },
            {
              icon: <Clock className="text-white" size={24} />,
              title: 'Response Time',
              info: 'Within 2-4 hours',
              bg: 'bg-purple-600',
              action: null
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border">
              <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              {item.action ? (
                <a href={item.action} className="text-primary font-medium hover:underline">
                  {item.info}
                </a>
              ) : (
                <p className="text-gray-600">{item.info}</p>
              )}
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  )
} 