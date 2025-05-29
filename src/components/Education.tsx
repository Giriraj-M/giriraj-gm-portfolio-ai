
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      location: "Pollachi, Tamil Nadu, India",
      duration: "2022 - 2026",
      status: "Currently Pursuing",
      gpa: "8.5/10",
      highlights: [
        "Specialization in Machine Learning and Artificial Intelligence",
        "Active member of AI/ML Research Group",
        "Published research papers on Deep Learning applications",
        "Leadership role in Technology Student Society"
      ]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Consistent academic excellence across semesters",
      icon: Award
    },
    {
      title: "Research Publication",
      description: "Co-authored papers in AI/ML conferences",
      icon: BookOpen
    },
    {
      title: "Tech Society Leader",
      description: "Led AI/ML workshops and seminars",
      icon: Users
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      {/* Floating academic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-6 h-6 border-2 border-purple-400/20 rotate-45 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-24 left-12 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/20 rotate-12 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-8 md:p-12 shadow-2xl animate-fade-in hover:shadow-purple-500/10 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              Education
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Academic foundation building my expertise in AI & Technology
            </p>
          </div>

          {/* Main Education Card */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-2">{edu.field}</p>
                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                    <h4 className="text-purple-400 font-semibold mb-2">Status</h4>
                    <p className="text-white">{edu.status}</p>
                  </div>
                  <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                    <h4 className="text-cyan-400 font-semibold mb-2">GPA</h4>
                    <p className="text-white font-bold">{edu.gpa}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-3xl font-bold text-center text-white mb-8">Academic Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 text-center group hover:scale-105 shadow-lg hover:shadow-purple-500/20 animate-fade-in"
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
