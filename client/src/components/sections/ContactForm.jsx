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
      color: "text-green-400"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ===============================
     REAL API SUBMIT (FIXED)
  ================================ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5100/api/contact/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

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
    <section id="contact" className="py-2 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Have a project in mind? Let's work together!
          </p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex gap-3">
            <CheckCircle className="text-green-500" size={20} />
            <p className="text-green-400 text-sm">
              Message Sent Successfully!
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex gap-3">
            <AlertCircle className="text-red-500" size={20} />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border border-gray-800 ${info.color}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {info.icon}
                  <span className="font-semibold">{info.title}</span>
                </div>
                {info.link ? (
                  <a href={info.link} className="text-sm text-gray-300">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-300">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="md:col-span-2 p-6 rounded-xl border border-gray-800 bg-gray-900/30">
            <h3 className="text-lg font-semibold mb-4">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Your Message"
                className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded bg-gradient-to-r from-accent to-neon flex justify-center gap-2"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
