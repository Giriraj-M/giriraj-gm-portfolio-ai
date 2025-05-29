
import React, { useState, useEffect } from 'react';

const CodeIntro = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    '# Initializing Giriraj M...',
    'class MachineLearningEngineer:',
    '    def __init__(self):',
    '        self.name = "Giriraj M"',
    '        self.specialization = ["ML", "DL", "AI"]',
    '        self.skills = ["Python", "TensorFlow", "PyTorch"]',
    '        self.passion = "Transforming data into intelligence"',
    '',
    '    def load_portfolio(self):',
    '        print("Loading portfolio...")',
    '        return "Welcome to my world of AI!"',
    '',
    'engineer = MachineLearningEngineer()',
    'engineer.load_portfolio()',
    '',
    '# Portfolio loaded successfully! ✓'
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => prev + codeLines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentLine, codeLines]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">giriraj-portfolio.py</span>
          </div>
          
          {/* Code Content */}
          <div className="p-6 font-mono text-sm">
            <pre className="text-green-400 whitespace-pre-wrap">
              {displayedCode}
              <span className="animate-pulse bg-green-400 w-2 h-5 inline-block ml-1"></span>
            </pre>
          </div>
        </div>
        
        {/* Loading indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <span className="text-cyan-400 ml-4">Initializing Portfolio...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIntro;
