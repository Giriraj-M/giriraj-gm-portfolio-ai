
import React, { useState } from 'react';
import { Github, ExternalLink, Clock, CheckCircle, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
    {
      title: "AI Image Recognition System",
      description: "Deep learning model for real-time object detection using TensorFlow and OpenCV",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      github: "https://github.com/Giriraj-M/ai-image-recognition",
      status: "Completed",
      image: "Project Image Placeholder"
    },
    {
      title: "Predictive Analytics Platform",
      description: "ML pipeline for business forecasting with automated model selection",
      tech: ["Python", "Scikit-learn", "Pandas", "AWS"],
      github: "https://github.com/Giriraj-M/predictive-analytics",
      status: "Completed",
      image: "Project Image Placeholder"
    },
    {
      title: "Natural Language Processing Tool",
      description: "NLP application for sentiment analysis and text classification",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      github: "https://github.com/Giriraj-M/nlp-tool",
      status: "In Progress",
      image: "Project Image Placeholder"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system for personalized content recommendations",
      tech: ["Python", "PyTorch", "MongoDB", "Docker"],
      github: "https://github.com/Giriraj-M/recommendation-engine",
      status: "In Progress",
      image: "Project Image Placeholder"
    },
    {
      title: "Advanced RAG System",
      description: "Next-generation Retrieval-Augmented Generation system with enhanced context understanding",
      tech: ["Python", "LangChain", "Vector DB", "OpenAI"],
      github: "#",
      status: "Coming Soon",
      image: "Project Image Placeholder"
    },
    {
      title: "Computer Vision Pipeline",
      description: "End-to-end computer vision pipeline for industrial automation",
      tech: ["Python", "OpenCV", "YOLO", "Edge Computing"],
      github: "#",
      status: "Coming Soon",
      image: "Project Image Placeholder"
    }
  ];

  const filters = [
    { name: 'All Projects', icon: null },
    { name: 'Completed', icon: CheckCircle },
    { name: 'In Progress', icon: Clock },
    { name: 'Coming Soon', icon: Zap }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Coming Soon': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Coming Soon': return <Zap className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleViewCode = (githubUrl: string) => {
    if (githubUrl !== '#') {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">Showcasing my work in machine learning and AI</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;
            
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50' 
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span className="font-semibold">{filter.name}</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">
                  {filter.name === 'All Projects' ? projects.length : projects.filter(p => p.status === filter.name).length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                <span className="text-gray-400 relative z-10">{project.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg border text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span>{project.status}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm border border-gray-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleViewCode(project.github)}
                    className={`flex items-center space-x-2 transition-colors duration-300 ${
                      project.github === '#' 
                        ? 'text-gray-500 cursor-not-allowed' 
                        : 'text-cyan-400 hover:text-white cursor-pointer'
                    }`}
                    disabled={project.github === '#'}
                  >
                    <Github className="w-5 h-5" />
                    <span>{project.github === '#' ? 'Coming Soon' : 'View Code'}</span>
                  </button>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transform group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
