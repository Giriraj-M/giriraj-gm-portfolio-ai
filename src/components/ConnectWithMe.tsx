
import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

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

const ConnectWithMe = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/giriraj-m",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/25",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Giriraj-M",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:shadow-gray-500/25",
      description: "Code Repository"
    },
    {
      name: "LeetCode",
      icon: LeetCodeIcon,
      url: "https://leetcode.com/u/GIRIRAJ_M/",
      color: "from-yellow-500 to-orange-600",
      hoverColor: "hover:shadow-yellow-500/25",
      description: "Coding Practice"
    },
    {
      name: "HackerRank",
      icon: HackerRankIcon,
      url: "https://www.hackerrank.com/profile/girirajm2006",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:shadow-green-500/25",
      description: "Programming Skills"
    }
  ];

  return (
    <section id="connect-with-me" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      {/* Social media background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-green-500/10 to-yellow-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-8 md:p-12 shadow-2xl animate-fade-in hover:shadow-purple-500/10 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Let's stay connected across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 shadow-2xl ${social.hoverColor} animate-fade-in-up`}
                  style={{animationDelay: `${0.4 + index * 0.1}s`}}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {social.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Visit Profile</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${social.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40 shadow-xl">
              <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-4 leading-relaxed">
                "Building connections in the digital world to create meaningful collaborations in AI and Machine Learning"
              </blockquote>
              <cite className="text-purple-400 font-medium">- Giriraj M</cite>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-gray-700/40 pt-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <p className="text-gray-400 mb-2">AI Engineer & Machine Learning Specialist</p>
            <p className="text-gray-400">© 2025 Giriraj M. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithMe;
