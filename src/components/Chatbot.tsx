import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User, Copy, CheckCircle, Brain, ArrowRight, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in Machine Learning and Deep Learning with expertise in Python, TensorFlow, PyTorch, Scikit-learn, and cloud platforms like AWS and Azure. I also work with web technologies including React, Node.js, and modern JavaScript frameworks.",
    category: "Technical Skills"
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I've worked on diverse ML projects including computer vision systems, natural language processing applications, predictive analytics models, and end-to-end ML pipelines. Some notable projects include image classification systems, sentiment analysis tools, and recommendation engines.",
    category: "Projects"
  },
  {
    question: "What is your educational background?",
    answer: "I have a strong foundation in Computer Science with specialized coursework in Machine Learning, Deep Learning, and Data Science. I continuously update my skills through online courses, certifications, and hands-on projects.",
    category: "Education"
  },
  {
    question: "How can I contact you for collaboration?",
    answer: "You can reach me through email at girirajm2006@gmail.com, connect with me on LinkedIn, or check out my projects on GitHub. I'm always open to discussing new opportunities and interesting projects!",
    category: "Contact"
  },
  {
    question: "What certifications do you have?",
    answer: "I hold several industry-recognized certifications in Machine Learning, Cloud Computing, and Data Science from platforms like Coursera, edX, and cloud providers. These certifications validate my expertise in various ML frameworks and tools.",
    category: "Certifications"
  },
  {
    question: "Do you work on freelance projects?",
    answer: "Yes, I'm open to freelance opportunities, especially those involving machine learning, data analysis, or full-stack development. Feel free to reach out with your project requirements and we can discuss how I can help.",
    category: "Work"
  }
];

const quickQuestions = [
  "What technologies do you use?",
  "Tell me about your projects",
  "How can I hire you?",
  "What's your experience?",
  "Do you do consultations?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Giriraj's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Find the best matching FAQ
    const matchingFAQ = faqs.find(faq => {
      const questionKeywords = faq.question.toLowerCase().split(' ');
      const answerKeywords = faq.answer.toLowerCase().split(' ');
      const allKeywords = [...questionKeywords, ...answerKeywords];
      
      return allKeywords.some(keyword => 
        message.includes(keyword) && keyword.length > 3
      );
    });

    if (matchingFAQ) {
      return matchingFAQ.answer;
    }

    // Keyword-based responses
    if (message.includes('skills') || message.includes('technology') || message.includes('tech') || message.includes('programming')) {
      return "Giriraj specializes in Machine Learning and Deep Learning with expertise in Python, TensorFlow, PyTorch, Scikit-learn, React, Node.js, and cloud platforms. He's passionate about creating intelligent solutions that solve real-world problems.";
    }

    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Giriraj has worked on various exciting projects including computer vision systems, NLP applications, predictive models, and full-stack web applications. You can explore his detailed project portfolio above to see his technical implementations and achievements.";
    }

    if (message.includes('experience') || message.includes('background')) {
      return "Giriraj is a dedicated Machine Learning Engineer with hands-on experience in developing end-to-end ML solutions. He has worked on projects ranging from data preprocessing to model deployment, with a strong focus on practical applications of AI.";
    }

    if (message.includes('contact') || message.includes('hire') || message.includes('collaboration') || message.includes('email')) {
      return "You can reach Giriraj at girirajm2006@gmail.com or connect with him on LinkedIn. He's always interested in discussing new opportunities, collaborations, and innovative ML projects!";
    }

    if (message.includes('education') || message.includes('learning') || message.includes('study')) {
      return "Giriraj has a strong educational foundation in Computer Science with specialized focus on Machine Learning and Data Science. He continuously enhances his skills through online courses, certifications, and practical project implementations.";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Giriraj's expertise in Machine Learning and his professional journey. What specific aspect would you like to explore?";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! If you have any more questions about Giriraj's work, skills, or projects, feel free to ask. I'm here to help!";
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! While I don't have specific information about that, I can tell you about Giriraj's expertise in Machine Learning, his projects, or how to get in touch with him. What would you like to know?",
      "I'd love to help you with that! You can explore Giriraj's portfolio sections above for detailed information, or ask me about his technical skills, projects, or contact information.",
      "Great question! For the most comprehensive information, I recommend checking out the relevant sections of Giriraj's portfolio above. Is there something specific about his ML expertise or projects you'd like to discuss?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
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

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Enhanced Floating Chatbot Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        {/* Chat with us text - responsive */}
        {!isOpen && (
          <div className="mb-3 animate-fade-in">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl px-3 sm:px-4 py-2 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <p className="text-cyan-300 text-xs sm:text-sm font-medium">💬 Chat with us!</p>
              <p className="text-gray-400 text-xs">Ask questions about skills & projects</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-110 animate-pulse-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full animate-pulse"></div>
          
          {isOpen ? (
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-12" />
          )}
          
          {/* Floating particles around button */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </button>
      </div>

      {/* Enhanced Chat Window - Mobile Responsive */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700/30">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">Giriraj's AI Assistant</h3>
                <p className="text-xs text-green-400 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  Online now
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-64 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`group relative max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20'
                        : 'bg-gradient-to-r from-gray-700/80 to-gray-800/80 text-gray-100 shadow-gray-900/20 border border-gray-600/30'
                    }`}
                  >
                    <p className="leading-relaxed">{message.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs opacity-70">
                        {formatTimestamp(message.timestamp)}
                      </span>
                      {message.sender === 'bot' && (
                        <button
                          onClick={() => copyToClipboard(message.text, message.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-600/30 rounded"
                          title="Copy message"
                        >
                          {copiedMessageId === message.id ? (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3 text-gray-400 hover:text-white" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Avatar */}
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-1 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 order-1 ml-2' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 order-2 mr-2'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="bg-gray-700/80 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-gray-600/30">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions - Mobile Responsive */}
          {messages.length <= 1 && (
            <div className="px-3 sm:px-4 pb-3">
              <div className="mb-3">
                <p className="text-xs text-gray-400 mb-2 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-cyan-400" />
                  Quick questions to get started:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left text-xs p-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-cyan-500/20 hover:to-purple-500/20 border border-gray-600/30 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-gray-300 group-hover:text-cyan-300">{question}</span>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-gray-700/30">
            <div className="flex space-x-2 sm:space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about skills, projects, or experience..."
                className="flex-1 bg-gray-800/50 border border-gray-600/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 sm:p-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
    </>
  );
};

export default Chatbot;
