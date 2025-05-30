
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Send, User, MapPin, Phone, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import CodeIntro from '../components/CodeIntro';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import GetInTouch from '../components/GetInTouch';
import ConnectWithMe from '../components/ConnectWithMe';
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';

// LeetCode icon component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.165 7.766 0l2.049-2.002a1.374 1.374 0 0 0-.961-2.344 1.374 1.374 0 0 0-.961.438l-2.049 2.002a2.813 2.813 0 0 1-3.924 0l-4.277-4.193a2.65 2.65 0 0 1-.565-.81 2.564 2.564 0 0 1-.153-.447 2.478 2.478 0 0 1-.027-1.065 2.302 2.302 0 0 1 .533-.915l3.854-4.126 5.406-5.788a2.813 2.813 0 0 1 3.924 0 2.813 2.813 0 0 1 0 3.924l-1.209 1.297-.038.038a1.374 1.374 0 0 0 .961 2.344 1.374 1.374 0 0 0 .961-.438l1.209-1.297.038-.038a5.518 5.518 0 0 0 0-7.766 5.518 5.518 0 0 0-7.766 0Z"/>
  </svg>
);

// HackerRank icon component
const HackerRankIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v1.035c0 .589-.455 1.073-1.026 1.099-.604.027-1.117-.462-1.117-1.062V7.057c0-.141-.117-.258-.258-.258H9.963c-.141 0-.258.117-.258.258v1.035c0 1.286 1.044 2.306 2.33 2.258 1.166-.043 2.117-.986 2.151-2.15.004-.035.004-.07 0-.105V7.057c0-.141-.115-.258-.258-.258h-1.633zm3.867 2.25c0 .371-.301.672-.672.672h-1.35c-.371 0-.672-.301-.672-.672s.301-.672.672-.672h1.35c.371 0 .672.301.672.672zM9.037 9.721c.371 0 .672.301.672.672s-.301.672-.672.672h-1.35c-.371 0-.672-.301-.672-.672s.301-.672.672-.672h1.35z"/>
  </svg>
);

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showIntro) {
    return <CodeIntro />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-48 sm:w-60 lg:w-80 h-48 sm:h-60 lg:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-48 sm:w-60 lg:w-80 h-48 sm:h-60 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-40 sm:w-48 lg:w-60 h-40 sm:h-48 lg:h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-20 left-20 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-green-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '8s'}}></div>
        
        {/* Floating geometric shapes - responsive */}
        <div className="absolute top-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-cyan-400/20 rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400/30 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Hero Section - Enhanced Mobile Responsiveness */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Profile Image */}
            <div className="flex justify-center lg:justify-start animate-fade-in order-2 lg:order-1">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-gray-700/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl shadow-cyan-500/20 transition-all duration-500">
                      <User className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">Profile Image Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating elements around profile - responsive */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left animate-fade-in order-1 lg:order-2" style={{animationDelay: '0.2s'}}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                GIRIRAJ M
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Machine Learning Engineer
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-400 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Specialized in ML & DL solutions | Transforming data into intelligent insights
              </p>

              {/* Action Buttons - Enhanced Mobile Layout */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-6 sm:mb-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Projects</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-purple-500 rounded-xl font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Contact Me</span>
                  </span>
                </button>
              </div>

              {/* Social Links with Tooltips - Enhanced Mobile Layout */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="relative group">
                  <a href="mailto:girirajm2006@gmail.com" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 glass">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    Email
                  </div>
                </div>

                <div className="relative group">
                  <a href="https://linkedin.com/in/giriraj-m" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 glass">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    LinkedIn
                  </div>
                </div>

                <div className="relative group">
                  <a href="https://github.com/Giriraj-M" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-all duration-300 glass">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a href="https://leetcode.com/u/GIRIRAJ_M/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 glass">
                      <LeetCodeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    LeetCode
                  </div>
                </div>

                <div className="relative group">
                  <a href="https://www.hackerrank.com/profile/girirajm2006" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 glass">
                      <HackerRankIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    HackerRank
                  </div>
                </div>

                <div className="relative group">
                  <a href="https://maps.google.com/?q=Coimbatore,India" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 interactive-scale block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-all duration-300 glass">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 group-hover:text-white" />
                    </div>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    Location
                  </div>
                </div>
              </div>
              
              <div className="animate-bounce">
                <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto lg:mx-0 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
      <ConnectWithMe />
      <Chatbot />
    </div>
  );
};

export default Index;
