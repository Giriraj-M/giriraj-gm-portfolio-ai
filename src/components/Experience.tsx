
import React from 'react';
import { Briefcase, Calendar, MapPin, Award, Code, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Developed and implemented machine learning models for predictive analytics, improving accuracy by 25%. Worked with Python, TensorFlow, and cloud platforms.",
      achievements: [
        "Built recommendation system serving 10K+ users",
        "Optimized ML pipeline reducing processing time by 40%",
        "Collaborated with cross-functional teams on AI initiatives"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "Git"]
    },
    {
      title: "AI Research Assistant",
      company: "Dr. Mahalingam College",
      location: "Pollachi, Tamil Nadu",
      duration: "Jan 2023 - Present",
      type: "Research",
      description: "Leading research in computer vision and natural language processing. Published papers and mentored junior students in ML concepts.",
      achievements: [
        "Co-authored 3 research papers in AI conferences",
        "Mentored 50+ students in ML fundamentals",
        "Led AI workshop series with 200+ participants"
      ],
      technologies: ["PyTorch", "OpenCV", "NLTK", "Transformers", "Jupyter"]
    },
    {
      title: "Freelance ML Developer",
      company: "Self-Employed",
      location: "Coimbatore, India",
      duration: "Sep 2022 - Present",
      type: "Freelance",
      description: "Providing ML solutions to small businesses and startups. Specialized in data analysis, predictive modeling, and automation systems.",
      achievements: [
        "Delivered 15+ ML projects to satisfied clients",
        "Increased client business efficiency by average 30%",
        "Built automated systems saving 100+ hours monthly"
      ],
      technologies: ["Scikit-learn", "Pandas", "FastAPI", "PostgreSQL", "React"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'from-green-400 to-emerald-500';
      case 'Research': return 'from-purple-400 to-pink-500';
      case 'Freelance': return 'from-cyan-400 to-blue-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship': return <Briefcase className="w-4 h-4" />;
      case 'Research': return <Award className="w-4 h-4" />;
      case 'Freelance': return <Code className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-8 md:p-12 shadow-2xl animate-fade-in hover:shadow-blue-500/10 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Building expertise through hands-on experience in AI & Machine Learning
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20 animate-fade-in"
                style={{animationDelay: `${0.4 + index * 0.2}s`}}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg bg-gradient-to-r ${getTypeColor(exp.type)} text-white text-sm font-semibold`}>
                            {getTypeIcon(exp.type)}
                            <span>{exp.type}</span>
                          </div>
                        </div>
                        <p className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, tIndex) => (
                        <div 
                          key={tIndex}
                          className="bg-gray-700/40 border border-gray-600/40 px-3 py-2 rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                          <span className="text-gray-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
