import React, { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "project",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const subjects = [
    { value: "project", label: "Project Inquiry" },
    { value: "hire", label: "Hire Me" },
    { value: "collaboration", label: "Collaboration" },
    { value: "other", label: "Other" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "singhyuvraj8420@gmail.com",
      link: "mailto:singhyuvraj8420@gmail.com",
      color: "text-neon"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 86013 00910",
      link: "tel:+918601300910",
      color: "text-blue-400"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Noida, India",
      color: "text-secondary"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://my-portfolio-7bnk.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "project",
        message: ""
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Contact submit error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-2 relative">
      <div className="container mx-auto px-4">

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto px-2">
            This contact form is for job opportunities, project inquiries, and collaborations.
            <br className="hidden sm:block" />
            If you are interested in hiring me or working together, send a message here and I will respond promptly.
          </p>
        </div>

        {/* Success/Error Messages */}
        {isSuccess && (
          <div className="mb-4 md:mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl flex items-start space-x-3">
            <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
            <div className="flex-1">
              <p className="font-semibold text-green-400 text-sm">Message Sent Successfully!</p>
              <p className="text-green-300/70 text-xs mt-1">
                I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 md:mb-6 p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl flex items-start space-x-3">
            <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
            <div className="flex-1">
              <p className="font-semibold text-red-400 text-sm">Error Sending Message</p>
              <p className="text-red-300/70 text-xs mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Main Content Grid - Mobile: Form first, Contact info below */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">

          {/* Form Section - Desktop: Left, Mobile: First */}
          <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-gray-800 bg-gray-900/30 order-1">
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">

              {/* Name & Email - Mobile: Stacked, Desktop: Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Name Field */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="flex items-center gap-1.5 md:gap-2 text-gray-300 text-xs md:text-sm">
                    <User size={14} className="md:size-[16px]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-all duration-300 placeholder-gray-500 text-sm"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="flex items-center gap-1.5 md:gap-2 text-gray-300 text-xs md:text-sm">
                    <Mail size={14} className="md:size-[16px]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-all duration-300 placeholder-gray-500 text-sm"
                    placeholder="you@gmail.com"
                  />
                </div>
              </div>

              {/* Phone & Subject - Mobile: Stacked, Desktop: Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Phone Field */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="flex items-center gap-1.5 md:gap-2 text-gray-300 text-xs md:text-sm">
                    <Phone size={14} className="md:size-[16px]" />
                    <span>Phone (Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-all duration-300 placeholder-gray-500 text-sm"
                    placeholder="+91 86013 00910"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-gray-300 text-xs md:text-sm">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-all duration-300 appearance-none text-sm"
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
              <div className="space-y-1.5 md:space-y-2">
                <label className="flex items-center gap-1.5 md:gap-2 text-gray-300 text-xs md:text-sm">
                  <MessageSquare size={14} className="md:size-[16px]" />
                  <span>Your Message *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 md:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-all duration-300 resize-none placeholder-gray-500 text-sm"
                  placeholder="Tell me about project and job requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 md:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm ${isSubmitting
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent to-neon hover:opacity-90'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Privacy Note */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800/50">
              <p className="text-gray-500 text-xs text-center">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </div>
          </div>

          {/* Contact Info Section - Desktop: Right, Mobile: Below Form */}
          <div className="md:col-span-1 order-2 md:order-2">
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`p-3 md:p-4 rounded-xl border border-gray-800 hover:border-neon/30 transition-all duration-300 ${info.color}`}
                >
                  <div className="flex items-center gap-2.5 md:gap-3 mb-1.5 md:mb-2">
                    <div className={`p-1.5 md:p-2 rounded-lg bg-gray-800/50 ${info.color}`}>
                      {React.cloneElement(info.icon, {
                        className: "w-4 h-4 md:w-5 md:h-5"
                      })}
                    </div>
                    <h3 className="font-semibold text-sm md:text-base">{info.title}</h3>
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm block break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-xs md:text-sm">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Response Note */}
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-900/30 rounded-xl border border-gray-800">
              <p className="text-gray-400 text-xs mb-1.5 md:mb-2">Quick Response:</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-xs md:text-sm">Response within 2 - 4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;