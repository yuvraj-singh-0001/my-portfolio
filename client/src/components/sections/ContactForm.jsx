import { useState } from 'react'
import { Send, Loader, CheckCircle, AlertCircle, Mail, User, MessageSquare } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Hiring Inquiry',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)
    
    try {
      // Send to backend (update with your actual backend URL)
      const response = await axios.post('http://localhost:5000/api/contact/submit', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (response.data.success) {
        toast.success('Message sent successfully! I will contact you soon.')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Hiring Inquiry',
          message: ''
        })
        
        // Trigger notification sound (optional)
        if (typeof window !== 'undefined' && window.Audio) {
          const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3')
          audio.play().catch(() => {})
        }
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const subjectOptions = [
    'Hiring Inquiry',
    'Project Collaboration',
    'Freelance Work',
    'Technical Consultation',
    'Other'
  ]

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <Mail size={18} className="mr-2" />
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in hiring me or collaborating on a project? Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Me</h3>
                <p className="text-gray-600 mb-2">For quick responses</p>
                <a href="mailto:your.email@gmail.com" className="text-primary font-medium">
                  your.email@gmail.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-gray-600">I typically reply within 2-4 hours</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Notification System</h3>
                <p className="text-gray-600">I get instant notifications on my phone</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <User size={16} className="inline mr-2" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <Mail size={16} className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        📱 Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        📋 Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-700 mb-2 font-medium">
                      <MessageSquare size={16} className="inline mr-2" />
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="Hi Yuvraj, I'd like to discuss a project with you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message & Get Hired
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-gray-500 mt-4 text-sm">
                    ⚡ You'll get a confirmation email instantly. I'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}