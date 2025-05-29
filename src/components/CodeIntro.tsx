
import React, { useState, useEffect } from 'react';
import { Brain, Code, Zap, Sparkles, Star, Cpu } from 'lucide-react';

const CodeIntro = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    'Initializing AI Systems...',
    'Loading Neural Networks...',
    'Activating Machine Learning Models...',
    'Preparing Portfolio Data...',
    'Finalizing User Interface...',
    'Portfolio Ready!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const phaseIndex = Math.floor(progress / 20);
    setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
  }, [progress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform rotate-12 animate-bounce"></div>
        
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{animationDelay: `${i * 0.5}s`}}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* GM Logo */}
        <div className="mb-12 animate-scale-in">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 mx-auto mb-6 transform hover:scale-110 transition-all duration-500 animate-pulse-glow">
              <span className="text-4xl font-bold text-white">GM</span>
            </div>
            
            {/* Orbiting icons */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
              <Brain className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-cyan-400" />
              <Code className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-6 text-purple-400" />
              <Zap className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-blue-400" />
              <Cpu className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-6 h-6 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            GIRIRAJ M
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            AI Engineer & Machine Learning Specialist
          </h2>
        </div>

        {/* Loading Progress */}
        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-700/30">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out shadow-lg animate-pulse-glow"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>0%</span>
              <span className="font-semibold text-cyan-400">{Math.round(progress)}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Current Phase */}
          <div className="text-center">
            <p className="text-xl text-cyan-400 font-semibold mb-4 animate-pulse">
              {phases[currentPhase]}
            </p>
            
            {/* Phase indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {phases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentPhase 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center items-center space-x-4">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Status Messages */}
          <div className="space-y-2 text-gray-400 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span>Loading portfolio components...</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Optimizing user experience...</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up" style={{animationDelay: '2s'}}>
          <p className="text-gray-500 text-sm">
            Transforming data into intelligent solutions
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Systems Online</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>AI Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIntro;
