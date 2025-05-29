
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Download, Copy, User, Phone } from 'lucide-react';

// LeetCode icon component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.165 7.766 0l2.049-2.002a1.374 1.374 0 0 0-.961-2.344 1.374 1.374 0 0 0-.961.438l-2.049 2.002a2.813 2.813 0 0 1-3.924 0l-4.277-4.193a2.65 2.65 0 0 1-.565-.81 2.564 2.564 0 0 1-.153-.447 2.478 2.478 0 0 1-.027-1.065 2.302 2.302 0 0 1 .533-.915l3.854-4.126 5.406-5.788a2.813 2.813 0 0 1 3.924 0 2.813 2.813 0 0 1 0 3.924l-1.209 1.297-.038.038a1.374 1.374 0 0 0 .961 2.344 1.374 1.374 0 0 0 .961-.438l1.209-1.297.038-.038a5.518 5.518 0 0 0 0-7.766 5.518 5.518 0 0 0-7.766 0Z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "girirajm2006@gmail.com",
      link: "mailto:girirajm2006@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, India",
      link: "https://maps.google.com/?q=Coimbatore,India"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (e.target.name === 'email') {
      setEmailError('');
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:girirajm2006@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download would be implemented with actual PDF file');
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-8 md:p-12 shadow-2xl animate-fade-in hover:shadow-cyan-500/10 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Contact Me
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Ready to collaborate on the next AI breakthrough?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 shadow-2xl text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-cyan-500/20 animate-pulse">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Giriraj M</h3>
                <p className="text-cyan-400 font-semibold mb-4">Machine Learning Engineer</p>
                
                <button
                  onClick={downloadResume}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Get in Touch</h3>
              </div>
              
              <div className="grid gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 bg-gray-800/40 backdrop-blur-xl p-4 rounded-xl border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-fade-in-up"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {contact.label}
                        </h4>
                        <p className="text-gray-300 break-all group-hover:text-white transition-colors duration-300">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40 animate-slide-in-right shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">Let's Collaborate</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2 animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Email client opened! Your message is ready to send.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-600/50 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                    placeholder="your.email@gmail.com"
                  />
                  {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up"
                  style={{animationDelay: '0.5s'}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Opening Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
