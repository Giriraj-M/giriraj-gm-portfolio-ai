
import React from 'react';
import { Trophy, Star, Award, Target, Zap, Medal, Crown, Rocket } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Machine Learning Excellence Award",
      organization: "Dr. Mahalingam College",
      year: "2024",
      description: "Recognized for outstanding performance in ML coursework and innovative project implementations.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      badge: "Academic"
    },
    {
      title: "AI Research Paper Publication",
      organization: "International Conference",
      year: "2023",
      description: "Co-authored research paper on 'Deep Learning Applications in Computer Vision' accepted at leading AI conference.",
      icon: Star,
      color: "from-cyan-400 to-blue-500",
      badge: "Research"
    },
    {
      title: "Hackathon Winner - AI Category",
      organization: "TechFest 2023",
      year: "2023",
      description: "First place in AI/ML track for developing innovative solution for automated medical image analysis.",
      icon: Crown,
      color: "from-purple-400 to-pink-500",
      badge: "Competition"
    },
    {
      title: "Deep Learning Certification",
      organization: "DeepLearning.AI",
      year: "2023",
      description: "Completed comprehensive Deep Learning Specialization with distinction, mastering neural networks and CNNs.",
      icon: Award,
      color: "from-green-400 to-emerald-500",
      badge: "Certification"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      year: "2022-2024",
      description: "Active contributor to major ML libraries with 50+ merged pull requests and 1000+ GitHub stars.",
      icon: Rocket,
      color: "from-indigo-400 to-purple-500",
      badge: "Community"
    },
    {
      title: "Student Tech Leader",
      organization: "College Tech Society",
      year: "2023-2024",
      description: "Led AI/ML workshops, mentored 50+ students, and organized successful tech symposiums.",
      icon: Medal,
      color: "from-rose-400 to-red-500",
      badge: "Leadership"
    }
  ];

  const stats = [
    { number: "95%", label: "Academic Performance", icon: Target },
    { number: "15+", label: "ML Projects", icon: Zap },
    { number: "3", label: "Research Papers", icon: Star },
    { number: "50+", label: "Students Mentored", icon: Award }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/10 to-transparent"></div>
      
      {/* Floating trophy elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-8 h-8 text-yellow-400/20">
          <Trophy className="w-full h-full animate-float" style={{animationDelay: '0s'}} />
        </div>
        <div className="absolute bottom-32 right-20 w-6 h-6 text-purple-400/20">
          <Star className="w-full h-full animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute top-1/2 left-12 w-5 h-5 text-cyan-400/20">
          <Award className="w-full h-full animate-float" style={{animationDelay: '4s'}} />
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-8 md:p-12 shadow-2xl animate-fade-in hover:shadow-yellow-500/10 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Milestones that mark my journey in AI & Machine Learning
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 text-center group hover:scale-105 transition-all duration-700 shadow-lg hover:shadow-yellow-500/20 animate-scale-in"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-700 hover:scale-[1.02] shadow-2xl hover:shadow-yellow-500/20 animate-fade-in"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 text-xs bg-gradient-to-r ${achievement.color} text-white rounded-full font-semibold`}>
                          {achievement.badge}
                        </span>
                        <span className="text-gray-400 text-sm">{achievement.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-yellow-400 font-semibold mb-3">{achievement.organization}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${achievement.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-8 py-4 rounded-xl border border-yellow-500/30 hover:scale-105 transition-all duration-300">
              <Trophy className="w-6 h-6 text-yellow-400 animate-bounce" />
              <span className="text-white font-medium">Continuously striving for excellence in AI & Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
