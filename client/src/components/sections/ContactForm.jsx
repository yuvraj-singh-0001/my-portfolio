import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
//import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'project',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const subjects = [
    { value: 'project', label: 'Project Inquiry' },
    { value: 'hire', label: 'Hire Me' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Initialize EmailJS (you need to sign up at https://www.emailjs.com/)
      // Replace these with your actual EmailJS credentials
      emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS dashboard
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@gmail.com', // Your Gmail
        to_name: 'Yuvraj Singh',
        date: new Date().toLocaleString()
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Service ID from EmailJS
        'YOUR_TEMPLATE_ID', // Template ID from EmailJS
        templateParams
      );
      
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: 'project', message: '' });
        
        // Show browser notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('📧 New Message Received!', {
            body: `From: ${templateParams.from_name}`,
            icon: '/icon-192.png',
            requireInteraction: true
          });
        }
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      console.error('Email sending error:', err);
      setError('Failed to send message. Please try again or email directly at your-email@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's work together!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              I'll receive your message instantly on both email and phone
            </p>
          </div>
          
          <div className="glass-dark rounded-2xl p-8">
            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl flex items-start space-x-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-green-400">Message Sent Successfully!</p>
                  <p className="text-green-300/70 text-sm mt-1">
                    I've received your message and will get back to you within 24 hours.
                    You'll receive a confirmation email shortly.
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Email sent to your-email@gmail.com</span>
                    </span>
                    <span className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Phone notification sent</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl flex items-start space-x-4">
                <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-red-400">Error Sending Message</p>
                  <p className="text-red-300/70 text-sm mt-1">{error}</p>
                  <p className="text-xs text-red-300/50 mt-3">
                    Alternative: Email directly at{' '}
                    <a href="mailto:your-email@gmail.com" className="underline hover:text-red-300">
                      singhyuvraj8420@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <User size={18} />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-neon-500 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <Mail size={18} />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-neon-500 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300 placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
                
                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <Phone size={18} />
                    <span>Phone Number (Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-neon-500 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300 placeholder-gray-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
                
                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-gray-300">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-neon-500 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300 appearance-none"
                  >
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-gray-300">
                  <MessageSquare size={18} />
                  <span>Your Message *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-neon-500 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300 resize-none placeholder-gray-500"
                  placeholder="Tell me about your project, timeline, budget, and requirements..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-accent to-secondary hover:from-neon-500 hover:to-accent hover:shadow-lg hover:shadow-neon-500/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {/* Notification Info */}
              <div className="text-center text-gray-400 text-sm pt-4 border-t border-gray-800/50">
                <p className="mb-2">When you send this message:</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Email sent to your-email@gmail.com</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Phone notification sent instantly</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Response within 14 hours</span>
                  </span>
                </div>
              </div>
            </form>
          </div>
          
          {/* Direct Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-dark p-6 rounded-2xl text-center">
              <Mail className="w-8 h-8 text-neon-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:your-email@gmail.com" className="text-gray-400 hover:text-neon-500 transition-colors">
              singhyuvraj8420@gmail.com
              </a>
            </div>
            <div className="glass-dark p-6 rounded-2xl text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-400">+91 86013 00910</p>
            </div>
            <div className="glass-dark p-6 rounded-2xl text-center">
              <User className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-400">India Noida </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;