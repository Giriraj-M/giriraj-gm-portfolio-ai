
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Copy, CheckCircle, Sparkles, Brain } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface Suggestion {
  text: string;
  question: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions: Suggestion[] = [
    { text: "What projects has Giriraj worked on?", question: "Tell me about Giriraj's projects" },
    { text: "What are his technical skills?", question: "What technical skills does Giriraj have?" },
    { text: "How can I contact him?", question: "How can I contact Giriraj?" },
    { text: "What's his educational background?", question: "Tell me about Giriraj's education" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: "🎉 Welcome to Giriraj's AI-powered portfolio assistant! 🤖✨\n\nI'm Giriraj's AI Assistant, trained specifically on his portfolio data to help you learn about his expertise in Machine Learning and AI. I can provide detailed insights about:\n\n🚀 His innovative ML/AI projects (RAG systems, computer vision, NLP)\n💻 Technical skills (Python, PyTorch, TensorFlow, AWS)\n🎓 Educational background at Dr. Mahalingam College\n🏆 Achievements and certifications\n📧 Contact information and collaboration opportunities\n\nFeel free to ask me anything about Giriraj's work or click on the suggestions below to get started! 🌟",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const botResponses = {
    projects: "Giriraj has developed impressive AI/ML projects including:\n\n🤖 AI Image Recognition System - Real-time object detection using TensorFlow and OpenCV\n📊 Predictive Analytics Platform - ML pipeline with automated model selection\n💬 NLP Tool - Advanced sentiment analysis and text classification\n🎯 Recommendation Engine - Collaborative filtering system\n🔍 Advanced RAG System - Next-gen retrieval-augmented generation\n👁️ Computer Vision Pipeline - Industrial automation solutions\n\nEach project showcases his expertise in different aspects of AI/ML. Check out his GitHub for detailed implementations!",
    
    skills: "Giriraj's technical expertise spans across:\n\n🐍 Programming: Python, JavaScript, SQL\n🧠 ML/AI: PyTorch, TensorFlow, Scikit-learn\n👁️ Computer Vision: OpenCV, YOLO\n💬 NLP: NLTK, Transformers, LangChain\n☁️ Cloud: AWS, Docker\n🗄️ Databases: PostgreSQL, MongoDB\n🌐 Web: React, FastAPI, Flask\n📊 Data: Pandas, NumPy, Matplotlib\n\nHe's particularly strong in developing end-to-end ML solutions and implementing cutting-edge research!",
    
    education: "Giriraj is pursuing his Bachelor of Technology in Computer Science & Engineering at Dr. Mahalingam College of Engineering and Technology (2022-2026).\n\n🎓 Current GPA: 8.5/10\n🔬 Specialization: Machine Learning & AI\n📚 Active in AI/ML Research Group\n📝 Published research papers on Deep Learning\n👥 Leadership role in Technology Student Society\n🏆 Dean's List for academic excellence",
    
    contact: "You can reach Giriraj through multiple channels:\n\n📧 Email: girirajm2006@gmail.com\n💼 LinkedIn: linkedin.com/in/giriraj-m\n👨‍💻 GitHub: github.com/Giriraj-M\n🏠 Location: Coimbatore, India\n\nHe's always open to discussing AI projects, collaborations, and innovative ML solutions. Feel free to reach out!",
    
    experience: "Giriraj has gained valuable experience through:\n\n💼 ML Engineer Intern at Tech Solutions Inc. (Remote) - Developed ML models improving accuracy by 25%\n🔬 AI Research Assistant at Dr. Mahalingam College - Leading computer vision and NLP research\n💻 Freelance ML Developer - Delivered 15+ projects, improving client efficiency by 30%\n\nHis hands-on experience spans across various domains including predictive analytics, automation systems, and research publications.",
    
    achievements: "Giriraj's notable achievements include:\n\n🏆 Machine Learning Excellence Award (2024)\n📝 AI Research Paper Publications\n🥇 Hackathon Winner - AI Category (TechFest 2023)\n🎓 Deep Learning Certification (DeepLearning.AI)\n🌟 Open Source Contributor (50+ merged PRs)\n👨‍🏫 Student Tech Leader (mentored 50+ students)\n\nThese achievements demonstrate his commitment to excellence in AI and Machine Learning!",
    
    default: "That's an interesting question! I'm specifically trained on Giriraj's portfolio data and can provide detailed information about his:\n\n• Projects and technical work\n• Skills and expertise\n• Education and achievements\n• Contact information\n• Professional experience\n\nFeel free to ask me anything specific about Giriraj's AI/ML work, or use the suggestions below for quick insights!"
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('project') || message.includes('work') || message.includes('github') || message.includes('portfolio')) {
      return botResponses.projects;
    } else if (message.includes('skill') || message.includes('technology') || message.includes('python') || message.includes('ml') || message.includes('ai') || message.includes('technical')) {
      return botResponses.skills;
    } else if (message.includes('education') || message.includes('college') || message.includes('study') || message.includes('degree')) {
      return botResponses.education;
    } else if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('connect')) {
      return botResponses.contact;
    } else if (message.includes('experience') || message.includes('internship') || message.includes('job') || message.includes('work')) {
      return botResponses.experience;
    } else if (message.includes('achievement') || message.includes('award') || message.includes('recognition') || message.includes('accomplishment')) {
      return botResponses.achievements;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(textToSend),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    handleSendMessage(suggestion.question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const copyToClipboard = async (text: string, messageId: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl mb-4 w-96 hover:shadow-cyan-500/20 transition-all duration-700 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-sm">GM</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Giriraj's AI Assistant</h3>
                <p className="text-gray-400 text-xs flex items-center space-x-1">
                  <Brain className="w-3 h-3" />
                  <span>Online • Ready to help</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-4" style={{ minHeight: 'auto' }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className="group max-w-[80%] relative">
                  <div
                    className={`p-3 rounded-2xl break-words ${
                      message.isBot
                        ? 'bg-gradient-to-r from-gray-700/60 to-gray-600/60 text-white border border-gray-600/30'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    } shadow-lg backdrop-blur-sm`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {/* Copy button */}
                  <button
                    onClick={() => copyToClipboard(message.text, message.id)}
                    className="absolute -right-2 -top-2 w-6 h-6 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                    title="Copy message"
                  >
                    {copiedMessageId === message.id ? (
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-white" />
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-400 mt-1 text-center">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Suggestions */}
            {showSuggestions && messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-400 text-center">Quick questions about Giriraj:</p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-cyan-400 text-sm transition-all duration-300 border border-gray-700/30 hover:border-cyan-500/50"
                  >
                    {suggestion.text}
                  </button>
                ))}
              </div>
            )}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-600/60 p-3 rounded-2xl border border-gray-600/30">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700/30">
            <div className="flex space-x-2 mb-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Giriraj's skills, projects, or experience..."
                className="flex-1 bg-gray-700/50 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-gray-600/30 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm backdrop-blur-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            {/* Footer Info */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3 h-3" />
                <span>Trained on Giriraj's Portfolio Data</span>
              </div>
              <div className="flex items-center space-x-1">
                <Brain className="w-3 h-3" />
                <span>AI Powered Solution</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-pulse ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
