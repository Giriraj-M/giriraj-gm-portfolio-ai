
import React, { useState } from 'react';
import { Brain, Code, Wrench, TrendingUp, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('AIML');

  const skillCategories = {
    'AIML': {
      icon: Brain,
      color: 'cyan',
      title: 'AI & ML Skill Proficiency Dashboard',
      description: 'This visual showcases my proficiency across key domains in Artificial Intelligence and Machine Learning, as part of my learning journey:',
      skills: [
        { 
          name: "Computer Vision", 
          level: 90,
          description: "Skilled in Object Detection, Image Segmentation, and Face Recognition.",
          frameworks: ["OpenCV", "YOLO", "Detectron2"]
        },
        { 
          name: "Natural Language Processing", 
          level: 85,
          description: "Experienced with Text Classification, Sentiment Analysis, and Transformer-based models.",
          frameworks: ["NLTK", "spaCy", "Transformers"]
        },
        { 
          name: "Deep Learning", 
          level: 92,
          description: "Proficient in CNNs, RNNs, GANs, Autoencoders, and working with LLMs.",
          frameworks: ["TensorFlow", "PyTorch", "Keras"]
        },
        { 
          name: "Classical Machine Learning", 
          level: 95,
          description: "Strong grasp of Classification, Regression, Ensemble Methods, and Unsupervised Learning techniques.",
          frameworks: ["Scikit-learn", "XGBoost", "LightGBM"]
        }
      ]
    },
    'Development': {
      icon: Code,
      color: 'purple',
      title: 'Development Skills Proficiency',
      description: 'Comprehensive overview of my software development capabilities across multiple programming languages and frameworks:',
      skills: [
        { 
          name: "Python Development", 
          level: 95,
          description: "Expert in Python for AI/ML, web development, and automation.",
          frameworks: ["Django", "FastAPI", "Flask"]
        },
        { 
          name: "JavaScript & TypeScript", 
          level: 80,
          description: "Proficient in modern JavaScript, TypeScript, and frontend frameworks.",
          frameworks: ["React", "Node.js", "Express"]
        },
        { 
          name: "Database Management", 
          level: 88,
          description: "Experienced with SQL, NoSQL databases, and data modeling.",
          frameworks: ["MySQL", "MongoDB", "PostgreSQL"]
        },
        { 
          name: "Version Control & DevOps", 
          level: 85,
          description: "Strong understanding of Git workflows, CI/CD, and deployment strategies.",
          frameworks: ["Git", "Docker", "GitHub Actions"]
        }
      ]
    },
    'Advanced': {
      icon: Zap,
      color: 'blue',
      title: 'Advanced Technologies & Tools',
      description: 'Cutting-edge technologies and advanced tools that I leverage for complex AI/ML solutions:',
      skills: [
        { 
          name: "Cloud Computing", 
          level: 80,
          description: "Proficient in AWS services for ML model deployment and scaling.",
          frameworks: ["AWS SageMaker", "EC2", "S3"]
        },
        { 
          name: "MLOps & Model Deployment", 
          level: 82,
          description: "Experience in ML pipeline automation, monitoring, and deployment.",
          frameworks: ["MLflow", "Kubeflow", "Docker"]
        },
        { 
          name: "Big Data Processing", 
          level: 75,
          description: "Working with large-scale data processing and distributed computing.",
          frameworks: ["Apache Spark", "Hadoop", "Kafka"]
        },
        { 
          name: "Research & Innovation", 
          level: 88,
          description: "Staying current with latest AI research and implementing novel approaches.",
          frameworks: ["Paper Implementation", "Experimentation", "Prototyping"]
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: 'from-cyan-500/20 to-cyan-600/20',
        border: 'border-cyan-500/50',
        text: 'text-cyan-400',
        progress: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
        glow: 'shadow-cyan-500/20'
      },
      purple: {
        bg: 'from-purple-500/20 to-purple-600/20',
        border: 'border-purple-500/50',
        text: 'text-purple-400',
        progress: 'bg-gradient-to-r from-purple-400 to-purple-600',
        glow: 'shadow-purple-500/20'
      },
      blue: {
        bg: 'from-blue-500/20 to-blue-600/20',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        progress: 'bg-gradient-to-r from-blue-400 to-blue-600',
        glow: 'shadow-blue-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Technologies I master to build intelligent solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700/50 glass">
            {Object.entries(skillCategories).map(([category, data]) => {
              const Icon = data.icon;
              const isActive = activeCategory === category;
              const colorClasses = getColorClasses(data.color);
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-500 interactive-scale ${
                    isActive 
                      ? `bg-gradient-to-r ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border} shadow-lg ${colorClasses.glow}` 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Dashboard */}
        <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              {skillCategories[activeCategory as keyof typeof skillCategories].description}
            </p>
          </div>
        </div>

        {/* Skills Display with Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
            const colorClasses = getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color);
            
            return (
              <Card 
                key={skill.name} 
                className={`group bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-2xl ${colorClasses.glow} glass animate-fade-in`}
                style={{
                  animationDelay: `${0.8 + index * 0.1}s`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className={`text-xl ${colorClasses.text} group-hover:text-white transition-colors duration-300 mb-2`}>
                        {skill.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {skill.description}
                      </CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <span className={`text-2xl font-bold ${colorClasses.text}`}>{skill.level}%</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <TrendingUp className={`w-4 h-4 ${colorClasses.text}`} />
                        <span className="text-xs text-gray-400">Proficiency</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden mb-4 shadow-inner">
                    <div 
                      className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out shadow-lg animate-pulse-glow`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${0.8 + index * 0.1}s`
                      }}
                    ></div>
                  </div>

                  {/* Frameworks/Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.frameworks.map((framework, fIndex) => (
                      <span 
                        key={fIndex}
                        className={`px-3 py-1 text-xs bg-gray-700/50 ${colorClasses.text} rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`}
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 px-8 py-4 rounded-xl border border-gray-700/50 backdrop-blur-sm glass hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <Target className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
