
import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, Download, Send, CheckCircle } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

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
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending email to girirajm2006@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download would be implemented with actual PDF file');
  };

  return (
    <section id="get-in-touch" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/20 to-transparent"></div>
      
      {/* Contact background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-12 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Let's discuss your next AI project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Profile */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl glass">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-cyan-500/20 animate-pulse-glow">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Giriraj M</h3>
                <p className="text-cyan-400 font-semibold">Machine Learning Engineer</p>
              </div>
              
              <button
                onClick={downloadResume}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="bg-gray-800/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 group hover:scale-105 glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">girirajm2006@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-500 group hover:scale-105 glass">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Coimbatore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 animate-slide-in-right shadow-2xl glass">
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Send Message
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2 animate-bounce-in">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-600/50 focus:border-cyan-500 focus:ring-cyan-500/20'
                  }`}
                  placeholder="your.email@example.com"
                />
                {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or collaboration idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 shadow-lg shadow-cyan-500/25 animate-fade-in-up neon-glow"
                style={{animationDelay: '0.4s'}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
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
    </section>
  );
};

export default GetInTouch;
