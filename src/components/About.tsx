
import React, { useState, useEffect } from 'react';
import { Code, Heart, Target, Quote } from 'lucide-react';

// HackerRank icon component
const HackerRankIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v1.035c0 .589-.455 1.073-1.026 1.099-.604.027-1.117-.462-1.117-1.062V7.057c0-.141-.117-.258-.258-.258H9.963c-.141 0-.258.117-.258.258v1.035c0 1.286 1.044 2.306 2.33 2.258 1.166-.043 2.117-.986 2.151-2.15.004-.035.004-.07 0-.105V7.057c0-.141-.115-.258-.258-.258h-1.633zm3.867 2.25c0 .371-.301.672-.672.672h-1.35c-.371 0-.672-.301-.672-.672s.301-.672.672-.672h1.35c.371 0 .672.301.672.672zM9.037 9.721c.371 0 .672.301.672.672s-.301.672-.672.672h-1.35c-.371 0-.672-.301-.672-.672s.301-.672.672-.672h1.35z"/>
  </svg>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const aboutContent = {
    journey: {
      icon: Code,
      title: "My Journey",
      content: "Started my journey in technology with a passion for understanding how machines can learn and adapt. From my early days at Dr. Mahalingam College to becoming a Machine Learning Engineer, every step has been driven by curiosity and the desire to solve complex problems with AI. I've worked on various projects ranging from computer vision to natural language processing, constantly pushing the boundaries of what's possible with data."
    },
    philosophy: {
      icon: Heart,
      title: "Philosophy",
      content: "I believe in creating AI solutions that not only work efficiently but also make a meaningful impact on people's lives. Technology should be accessible, ethical, and human-centered, bridging the gap between complex algorithms and real-world applications. My approach is to ensure that every AI system I build serves humanity while maintaining the highest standards of responsibility and transparency."
    },
    approach: {
      icon: Target,
      title: "Approach",
      content: "My approach combines theoretical knowledge with practical implementation. I focus on understanding the problem deeply, choosing the right tools and techniques, and iterating quickly to deliver robust, scalable ML solutions that drive business value. I believe in continuous learning, staying updated with the latest research, and applying best practices from both academia and industry to create innovative solutions."
    }
  };

  const inspirationalQuotes = [
    {
      text: "The future belongs to those who understand that artificial intelligence is not about replacing human creativity, but amplifying it",
      author: "- Giriraj M"
    },
    {
      text: "Machine learning is not magic. It's mathematics with a purpose, data with direction, and algorithms with ambition",
      author: "- Giriraj M"
    },
    {
      text: "In the realm of AI, every dataset tells a story. Our job is to listen carefully and help it speak truth",
      author: "- Giriraj M"
    },
    {
      text: "Deep learning teaches us that the most complex patterns can emerge from simple rules, just like wisdom itself",
      author: "- Giriraj M"
    },
    {
      text: "Neural networks mirror how we learn - through connections, patterns, and the courage to make intelligent mistakes",
      author: "- Giriraj M"
    },
    {
      text: "The beauty of artificial intelligence lies not in its complexity, but in its ability to find simplicity in chaos",
      author: "- Giriraj M"
    }
  ];

  const tabs = Object.keys(aboutContent);

  // Change quote every 5 seconds randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * inspirationalQuotes.length);
        } while (newIndex === prevIndex && inspirationalQuotes.length > 1);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [inspirationalQuotes.length]);

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
      
      {/* Floating quote elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-6 h-6 text-cyan-400/20">
          <Quote className="w-full h-full animate-float animate-delay-[0ms]" />
        </div>
        <div className="absolute bottom-32 left-16 w-8 h-8 text-purple-400/20">
          <Quote className="w-full h-full animate-pulse animate-delay-[2000ms]" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 text-blue-400/20">
          <Quote className="w-full h-full animate-float animate-delay-[4000ms]" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-5 h-5 text-green-400/20">
          <HackerRankIcon className="w-full h-full animate-float animate-delay-[3000ms]" />
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl border border-gray-700/30 p-8 md:p-12 shadow-2xl animate-fade-in glass">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              About Me
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up animate-delay-[200ms]">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Machine Learning Engineer</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm Giriraj M, a passionate Machine Learning Engineer who specializes in transforming 
                complex data into intelligent solutions. With expertise in both ML and Deep Learning, 
                I create innovative AI systems that solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently studying at Dr. Mahalingam College, I'm constantly exploring the latest 
                advancements in artificial intelligence and pushing the boundaries of what's possible with data.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 glass">
                  <h4 className="text-cyan-400 font-semibold">Location</h4>
                  <p className="text-gray-300">Coimbatore, India</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 glass">
                  <h4 className="text-purple-400 font-semibold">Focus</h4>
                  <p className="text-gray-300">ML & AI Innovation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              {/* Tab Navigation */}
              <div className="flex space-x-2 bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm glass">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab;
                  const content = aboutContent[tab as keyof typeof aboutContent];
                  const Icon = content.icon;
                  
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 interactive-scale ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-semibold capitalize">{tab}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 min-h-[300px] backdrop-blur-sm glass">
                {tabs.map((tab) => {
                  const content = aboutContent[tab as keyof typeof aboutContent];
                  const Icon = content.icon;
                  const isActive = activeTab === tab;
                  
                  return (
                    <div
                      key={tab}
                      className={`transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'
                      }`}
                      style={{ display: isActive ? 'block' : 'none' }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{content.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">{content.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Inspirational Quotes Section */}
          <div className="mt-20 animate-fade-in-up animate-delay-[600ms]">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 shadow-2xl relative overflow-hidden glass">
                {/* Quote icon decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 text-cyan-400/20">
                  <Quote className="w-full h-full" />
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 text-purple-400/20 rotate-180">
                  <Quote className="w-full h-full" />
                </div>
                
                <div className="relative h-40 flex items-center justify-center overflow-hidden">
                  {inspirationalQuotes.map((quote, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 transform ${
                        index === currentQuoteIndex 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`}
                    >
                      <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-4 leading-relaxed text-center px-4">
                        "{quote.text}"
                      </blockquote>
                      <cite className="text-cyan-400 font-medium text-center">{quote.author}</cite>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
