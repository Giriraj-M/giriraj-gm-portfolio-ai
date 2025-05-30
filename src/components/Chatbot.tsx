import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, ChevronRight } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  relatedQuestions?: string[];
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
  const [currentSuggestionSet, setCurrentSuggestionSet] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Comprehensive suggestion sets covering all portfolio aspects
  const suggestionSets: Suggestion[][] = [
    // General Portfolio Questions
    [
      { text: "Tell me about Giriraj's background", question: "Tell me about Giriraj's background and expertise" },
      { text: "What makes him unique in AI/ML?", question: "What makes Giriraj unique in the AI/ML field?" },
      { text: "What's his professional summary?", question: "Give me Giriraj's professional summary" },
      { text: "How can I collaborate with him?", question: "How can I collaborate with Giriraj?" }
    ],
    // Technical Skills & Expertise
    [
      { text: "What programming languages does he know?", question: "What programming languages does Giriraj know?" },
      { text: "Which ML/AI frameworks does he use?", question: "Which ML/AI frameworks and libraries does Giriraj use?" },
      { text: "What cloud platforms is he experienced with?", question: "What cloud platforms and tools is Giriraj experienced with?" },
      { text: "Tell me about his database skills", question: "What database technologies does Giriraj work with?" }
    ],
    // Projects & Work
    [
      { text: "Show me his most impressive projects", question: "What are Giriraj's most impressive AI/ML projects?" },
      { text: "What kind of computer vision work has he done?", question: "What computer vision projects has Giriraj worked on?" },
      { text: "Tell me about his NLP projects", question: "What NLP and language processing projects has Giriraj built?" },
      { text: "What web applications has he developed?", question: "What web applications and platforms has Giriraj created?" }
    ],
    // Education & Learning
    [
      { text: "Where does he study?", question: "Tell me about Giriraj's educational background" },
      { text: "What's his GPA and academic performance?", question: "What is Giriraj's academic performance and GPA?" },
      { text: "What certifications does he have?", question: "What certifications and courses has Giriraj completed?" },
      { text: "Is he involved in research?", question: "What research activities is Giriraj involved in?" }
    ],
    // Experience & Achievements
    [
      { text: "What work experience does he have?", question: "What professional experience does Giriraj have?" },
      { text: "What awards has he won?", question: "What awards and recognition has Giriraj received?" },
      { text: "Tell me about his hackathon wins", question: "What hackathons has Giriraj won or participated in?" },
      { text: "What leadership roles has he taken?", question: "What leadership roles and responsibilities has Giriraj had?" }
    ],
    // Contact & Collaboration
    [
      { text: "How can I reach him?", question: "What are the best ways to contact Giriraj?" },
      { text: "Where is he located?", question: "Where is Giriraj located and available for work?" },
      { text: "What social platforms is he on?", question: "What social media and professional platforms can I find Giriraj on?" },
      { text: "Is he available for freelance work?", question: "Is Giriraj available for freelance or contract work?" }
    ]
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
        text: "🎉 Welcome to Giriraj's AI-powered portfolio assistant! 🤖✨\n\nI'm Giriraj's AI Assistant, trained specifically on his comprehensive portfolio data. I can provide detailed insights about:\n\n🚀 Innovative ML/AI projects (RAG systems, computer vision, NLP)\n💻 Technical expertise (Python, PyTorch, TensorFlow, AWS)\n🎓 Educational journey at Dr. Mahalingam College\n🏆 Achievements, certifications, and awards\n💼 Professional experience and internships\n📧 Contact information and collaboration opportunities\n🌟 Research work and publications\n\nI have answers to questions across 6 different categories. Use the navigation below to explore different aspects of Giriraj's expertise, or ask me anything directly! 🌟",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getRelatedQuestions = (userMessage: string, botResponse: string): string[] => {
    const message = userMessage.toLowerCase();
    
    // Related questions based on the topic
    if (message.includes('background') || message.includes('about')) {
      return [
        "What programming languages does he know?",
        "What's his academic performance?",
        "What work experience does he have?"
      ];
    } else if (message.includes('programming') || message.includes('languages')) {
      return [
        "Which ML/AI frameworks does he use?",
        "What cloud platforms is he experienced with?",
        "Tell me about his database skills"
      ];
    } else if (message.includes('project')) {
      return [
        "What computer vision work has he done?",
        "Tell me about his NLP projects",
        "What's his most impressive project?"
      ];
    } else if (message.includes('education') || message.includes('academic')) {
      return [
        "What certifications does he have?",
        "What's his GPA?",
        "Is he involved in research?"
      ];
    } else if (message.includes('experience') || message.includes('work')) {
      return [
        "What awards has he won?",
        "Tell me about his hackathon wins",
        "What leadership roles has he taken?"
      ];
    } else if (message.includes('contact') || message.includes('reach')) {
      return [
        "Where is he located?",
        "What social platforms is he on?",
        "Is he available for freelance work?"
      ];
    }
    
    // Default related questions
    return [
      "Tell me about his technical skills",
      "What projects has he worked on?",
      "How can I contact him?"
    ];
  };

  const botResponses = {
    // General & Background
    background: "Giriraj M is a passionate Machine Learning Engineer and Computer Science student at Dr. Mahalingam College of Engineering and Technology (2022-2026). With a current GPA of 8.5/10, he specializes in developing cutting-edge AI/ML solutions.\n\n🎯 Core Focus Areas:\n• Machine Learning & Deep Learning\n• Computer Vision & Image Processing\n• Natural Language Processing\n• Predictive Analytics & Data Science\n• Full-stack AI Application Development\n\n🌟 What sets him apart:\n• Strong foundation in both theoretical concepts and practical implementation\n• Experience with end-to-end ML pipeline development\n• Active contributor to open-source AI projects\n• Published research in AI/ML domains\n• Proven track record in hackathons and competitions",

    unique: "What makes Giriraj unique in the AI/ML field:\n\n🧠 Technical Excellence:\n• Proficient in multiple ML frameworks (PyTorch, TensorFlow, Scikit-learn)\n• Expert in computer vision with OpenCV and YOLO implementations\n• Advanced NLP skills with Transformers and LangChain\n• Cloud deployment expertise with AWS and Docker\n\n🚀 Innovation Mindset:\n• Develops novel solutions for real-world problems\n• Integrates cutting-edge research into practical applications\n• Creates scalable and efficient AI systems\n• Focus on user-centered AI design\n\n👥 Leadership & Collaboration:\n• Mentored 50+ students in AI/ML concepts\n• Active in technology communities and research groups\n• Strong communication skills for technical concepts\n• Experience working in cross-functional teams",

    summary: "Professional Summary - Giriraj M:\n\n🎓 Computer Science Engineering Student (2022-2026)\n📍 Dr. Mahalingam College of Engineering and Technology\n⭐ GPA: 8.5/10 | Dean's List Recognition\n\n💼 Professional Experience:\n• ML Engineer Intern at Tech Solutions Inc. (Remote)\n• AI Research Assistant at Dr. Mahalingam College\n• Freelance ML Developer (15+ successful projects)\n\n🏆 Key Achievements:\n• Machine Learning Excellence Award (2024)\n• Hackathon Winner - AI Category (TechFest 2023)\n• Published AI research papers\n• 50+ merged open-source contributions\n\n🔬 Specializations:\n• End-to-end ML pipeline development\n• Computer vision and image processing\n• NLP and text analytics\n• Predictive modeling and analytics\n• AI system deployment and optimization",

    // Technical Skills
    programming: "Giriraj's Programming Expertise:\n\n🐍 Primary Languages:\n• Python - Advanced (ML/AI development, data science)\n• JavaScript/TypeScript - Proficient (web development, APIs)\n• SQL - Advanced (database management, analytics)\n• R - Intermediate (statistical analysis)\n\n⚡ Specialized Skills:\n• Data Structures & Algorithms\n• Object-Oriented Programming\n• Functional Programming concepts\n• Version control with Git/GitHub\n• Code optimization and debugging\n• Testing and documentation\n\n🛠️ Development Tools:\n• Jupyter Notebooks, VS Code\n• PyCharm, Google Colab\n• Docker for containerization\n• CI/CD pipeline setup",

    frameworks: "ML/AI Frameworks & Libraries Expertise:\n\n🧠 Deep Learning:\n• PyTorch - Advanced (neural networks, custom models)\n• TensorFlow/Keras - Proficient (production models)\n• Transformers - Advanced (NLP, language models)\n• OpenCV - Expert (computer vision)\n\n📊 Machine Learning:\n• Scikit-learn - Advanced (classical ML algorithms)\n• XGBoost/LightGBM - Proficient (ensemble methods)\n• NLTK/spaCy - Advanced (text processing)\n• LangChain - Proficient (LLM applications)\n\n📈 Data Science:\n• Pandas/NumPy - Expert (data manipulation)\n• Matplotlib/Seaborn - Advanced (visualization)\n• Plotly - Proficient (interactive charts)\n• Apache Spark - Intermediate (big data)",

    cloud: "Cloud Platforms & DevOps Skills:\n\n☁️ Amazon Web Services (AWS):\n• EC2, S3, Lambda functions\n• SageMaker for ML model deployment\n• RDS for database management\n• CloudWatch for monitoring\n\n🐳 Containerization & Deployment:\n• Docker - Advanced (container creation, management)\n• Docker Compose for multi-container apps\n• Container orchestration basics\n• CI/CD pipeline setup\n\n🗄️ Additional Tools:\n• Git/GitHub for version control\n• Linux/Unix system administration\n• API development and integration\n• Cloud security best practices",

    // Projects
    projects: "Giriraj's Most Impressive AI/ML Projects:\n\n🤖 Advanced RAG System:\n• Next-generation retrieval-augmented generation\n• Custom embedding models and vector databases\n• Real-time question-answering capabilities\n• Deployed using FastAPI and Docker\n\n🎯 Predictive Analytics Platform:\n• End-to-end ML pipeline with automated model selection\n• Real-time data processing and prediction\n• Interactive dashboard with React frontend\n• Improved client decision-making by 40%\n\n🧠 AI Image Recognition System:\n• Real-time object detection using YOLO and TensorFlow\n• Custom dataset creation and model training\n• Web-based interface for easy interaction\n• 95%+ accuracy on test datasets\n\n🔍 Recommendation Engine:\n• Collaborative filtering with deep learning\n• Handles both explicit and implicit feedback\n• Scalable architecture for large datasets\n• Integrated with e-commerce platforms",

    computer_vision: "Computer Vision Projects Portfolio:\n\n👁️ Industrial Automation Solution:\n• Real-time quality control system\n• Defect detection using CNN models\n• Reduced manual inspection time by 80%\n• Deployed in manufacturing environment\n\n📸 Smart Image Analysis Tool:\n• Multi-class image classification\n• Object detection and segmentation\n• Custom annotation pipeline\n• Transfer learning optimization\n\n🚗 Autonomous Vehicle Component:\n• Lane detection and tracking\n• Traffic sign recognition\n• Real-time video processing\n• Edge device deployment ready\n\n🎨 Creative AI Applications:\n• Style transfer implementation\n• Image enhancement algorithms\n• Artistic filter generation\n• Mobile app integration",

    nlp: "Natural Language Processing Projects:\n\n💬 Advanced Sentiment Analysis:\n• Multi-language sentiment detection\n• Real-time social media monitoring\n• Custom transformer model fine-tuning\n• 92% accuracy across different domains\n\n📝 Intelligent Text Summarization:\n• Extractive and abstractive summarization\n• Document processing pipeline\n• API for integration with other systems\n• Support for multiple document formats\n\n🔍 Information Extraction System:\n• Named Entity Recognition (NER)\n• Relationship extraction from text\n• Knowledge graph construction\n• Enterprise search optimization\n\n🤖 Chatbot Development:\n• Context-aware conversational AI\n• Intent recognition and slot filling\n• Integration with business systems\n• Multi-turn dialogue management",

    // Education
    education: "Educational Background - Dr. Mahalingam College:\n\n🎓 Bachelor of Technology (B.Tech)\n📚 Computer Science & Engineering (2022-2026)\n🏫 Dr. Mahalingam College of Engineering and Technology\n⭐ Current GPA: 8.5/10\n🏆 Dean's List Recognition for Academic Excellence\n\n🔬 Specialization Focus:\n• Machine Learning & Artificial Intelligence\n• Data Structures & Advanced Algorithms\n• Database Management Systems\n• Software Engineering & Design Patterns\n• Computer Networks & Security\n\n👥 Extracurricular Involvement:\n• AI/ML Research Group Member\n• Technology Student Society Leadership\n• Peer tutoring and mentorship programs\n• Technical workshop organization",

    academic_performance: "Academic Excellence & Performance:\n\n📊 Current Statistics:\n• Overall GPA: 8.5/10\n• Dean's List: Multiple semesters\n• Class Ranking: Top 10%\n• Research Publications: 2+ papers\n\n🏆 Academic Achievements:\n• Outstanding Student in Computer Science (2023)\n• Best Project Award for AI Implementation\n• Scholarship recipient for academic merit\n• Perfect attendance in core subjects\n\n📚 Key Course Highlights:\n• Machine Learning: A+ grade\n• Data Structures & Algorithms: A+ grade\n• Database Systems: A grade\n• Software Engineering: A+ grade\n• Computer Networks: A grade\n\n🔬 Research Involvement:\n• Active member of AI/ML research lab\n• Contributing to ongoing research projects\n• Paper submissions to conferences\n• Collaboration with faculty on innovative solutions",

    certifications: "Professional Certifications & Continuous Learning:\n\n🎯 AI/ML Certifications:\n• Deep Learning Specialization (DeepLearning.AI)\n• Machine Learning Course (Stanford/Coursera)\n• AWS Machine Learning Specialty\n• TensorFlow Developer Certificate\n\n☁️ Cloud & DevOps:\n• AWS Solutions Architect Associate\n• Docker Fundamentals Certification\n• Kubernetes Basics Certificate\n• Git & GitHub Professional Certificate\n\n📊 Data Science:\n• Python for Data Science (IBM)\n• Data Analysis with Pandas\n• Statistical Methods in Machine Learning\n• Data Visualization with Matplotlib\n\n🌐 Web Development:\n• React.js Development Certificate\n• Node.js Backend Development\n• RESTful API Design Principles\n• Full-Stack Development Bootcamp",

    // Experience
    experience: "Professional Experience & Internships:\n\n💼 ML Engineer Intern | Tech Solutions Inc. (Remote)\n📅 Duration: 6 months\n🎯 Achievements:\n• Developed ML models improving accuracy by 25%\n• Implemented automated data preprocessing pipelines\n• Created model monitoring and evaluation systems\n• Collaborated with cross-functional teams\n\n🔬 AI Research Assistant | Dr. Mahalingam College\n📅 Duration: Ongoing (1+ year)\n🎯 Responsibilities:\n• Leading computer vision and NLP research projects\n• Mentoring junior students in AI/ML concepts\n• Publishing research papers and findings\n• Organizing technical workshops and seminars\n\n💻 Freelance ML Developer\n📅 Duration: 2+ years\n🎯 Portfolio:\n• Delivered 15+ successful projects\n• Improved client operational efficiency by 30%\n• Specializing in computer vision and NLP solutions\n• Built long-term client relationships",

    achievements: "Awards, Recognition & Achievements:\n\n🏆 Major Awards:\n• Machine Learning Excellence Award (2024)\n• Outstanding Computer Science Student (2023)\n• Innovation in AI Technology Award (2023)\n• Academic Merit Scholarship Recipient\n\n🥇 Competition Success:\n• Hackathon Winner - AI Category (TechFest 2023)\n• Runner-up in National ML Competition (2023)\n• Best Project Award - College Tech Fest\n• Coding Competition Regional Champion\n\n📝 Publications & Research:\n• 2+ research papers in AI/ML conferences\n• Technical blog posts with 10K+ views\n• Open-source contributions featured in tech media\n• Speaker at university tech symposiums\n\n👥 Leadership & Community:\n• Student Tech Leader (mentored 50+ students)\n• AI/ML Workshop Organizer\n• Peer tutoring program coordinator\n• University tech society board member",

    // Contact & Collaboration
    contact: "Contact Information & Ways to Connect:\n\n📧 Primary Contact:\n• Email: girirajm2006@gmail.com\n• Response time: Within 24 hours\n• Available for project discussions\n\n💼 Professional Networks:\n• LinkedIn: linkedin.com/in/giriraj-m\n• GitHub: github.com/Giriraj-M\n• Portfolio: giriraj-portfolio.com\n\n🏠 Location & Availability:\n• Based in: Coimbatore, India\n• Open to: Remote work, relocation\n• Time zones: Flexible for global collaboration\n• Languages: English (fluent), Tamil (native)\n\n📱 Additional Platforms:\n• LeetCode: GIRIRAJ_M (800+ problems solved)\n• HackerRank: girirajm2006 (5-star rating)\n• Kaggle: Active competition participant",

    location: "Location & Work Preferences:\n\n📍 Current Location:\n• City: Coimbatore, Tamil Nadu, India\n• Country: India\n• Time Zone: IST (GMT+5:30)\n\n🌍 Work Flexibility:\n• Remote Work: Preferred and experienced\n• Hybrid Models: Open to discussion\n• Relocation: Willing for right opportunities\n• Travel: Available for client meetings/projects\n\n🕒 Availability:\n• Full-time opportunities: Available from 2026\n• Part-time/Freelance: Currently available\n• Internships: Actively seeking summer positions\n• Consulting: Available for short-term projects\n\n🗣️ Communication:\n• English: Business fluent\n• Tamil: Native speaker\n• Hindi: Conversational\n• Time zone coordination: Flexible for global teams",

    social: "Social Media & Professional Platforms:\n\n💼 Professional Presence:\n• LinkedIn: linkedin.com/in/giriraj-m\n  - 500+ connections in AI/ML industry\n  - Regular posts about latest AI trends\n  - Professional endorsements and recommendations\n\n👨‍💻 Code & Development:\n• GitHub: github.com/Giriraj-M\n  - 50+ repositories with AI/ML projects\n  - Active contributor to open-source projects\n  - Showcase of full-stack applications\n\n🧮 Competitive Programming:\n• LeetCode: GIRIRAJ_M\n  - 800+ problems solved\n  - Contest rating: 1650+\n  - Focus on algorithm optimization\n\n• HackerRank: girirajm2006\n  - 5-star rating in Python\n  - Problem-solving badges\n  - Active in ML/AI challenges",

    freelance: "Freelance & Contract Work Availability:\n\n✅ Currently Available For:\n• Machine Learning model development\n• Computer vision applications\n• NLP and text analytics projects\n• Data science consulting\n• AI system architecture design\n• Web application development with AI integration\n\n💰 Service Offerings:\n• Project-based development\n• Technical consulting and advisory\n• Code review and optimization\n• Training and workshop delivery\n• Research and development partnerships\n\n⏰ Capacity & Commitment:\n• Part-time availability: 20-25 hours/week\n• Project duration: Flexible (1 week to 6 months)\n• Communication: Regular updates and meetings\n• Delivery: On-time with quality assurance\n\n📋 Previous Client Feedback:\n• 98% client satisfaction rate\n• Average project completion: 15% ahead of schedule\n• Long-term relationships with repeat clients\n• Expertise in translating business needs to technical solutions",

    default: "That's a great question! I'm Giriraj's comprehensive AI assistant with detailed knowledge about:\n\n🎯 **Portfolio Categories Available:**\n\n1. **General & Background** - Personal summary, unique qualities\n2. **Technical Skills** - Programming, frameworks, cloud platforms  \n3. **Projects & Work** - AI/ML projects, computer vision, NLP\n4. **Education** - Academic background, performance, research\n5. **Experience** - Internships, work history, achievements\n6. **Contact & Collaboration** - Ways to connect, availability\n\nYou can ask specific questions about any of these areas, or use the category buttons below to explore different aspects of Giriraj's expertise. I'm here to provide detailed, accurate information about his skills, experience, and how you can work together!"
  };

  const generateBotResponse = (userMessage: string): { response: string; relatedQuestions: string[] } => {
    const message = userMessage.toLowerCase();
    let response = "";
    
    // Generate response based on user message
    if (message.includes('background') || message.includes('summary') || message.includes('about')) {
      response = botResponses.background;
    } else if (message.includes('unique') || message.includes('special') || message.includes('different')) {
      response = botResponses.unique;
    } else if (message.includes('professional summary') || message.includes('overview')) {
      response = botResponses.summary;
    }
    
    // Technical Skills
    else if (message.includes('programming') || message.includes('languages') || message.includes('python') || message.includes('javascript')) {
      response = botResponses.programming;
    } else if (message.includes('framework') || message.includes('pytorch') || message.includes('tensorflow') || message.includes('library')) {
      response = botResponses.frameworks;
    } else if (message.includes('cloud') || message.includes('aws') || message.includes('docker') || message.includes('deployment')) {
      response = botResponses.cloud;
    } else if (message.includes('database') || message.includes('sql') || message.includes('mongodb')) {
      response = botResponses.cloud;
    }
    
    // Projects
    else if (message.includes('project') && (message.includes('impressive') || message.includes('best') || message.includes('top'))) {
      response = botResponses.projects;
    } else if (message.includes('computer vision') || message.includes('image') || message.includes('opencv') || message.includes('yolo')) {
      response = botResponses.computer_vision;
    } else if (message.includes('nlp') || message.includes('natural language') || message.includes('text') || message.includes('language processing')) {
      response = botResponses.nlp;
    } else if (message.includes('web') || message.includes('application') || message.includes('platform')) {
      response = botResponses.projects;
    }
    
    // Education
    else if (message.includes('education') || message.includes('college') || message.includes('study') || message.includes('degree')) {
      response = botResponses.education;
    } else if (message.includes('gpa') || message.includes('academic') || message.includes('performance') || message.includes('grades')) {
      response = botResponses.academic_performance;
    } else if (message.includes('certification') || message.includes('course') || message.includes('certificate')) {
      response = botResponses.certifications;
    } else if (message.includes('research') || message.includes('publication') || message.includes('paper')) {
      response = botResponses.academic_performance;
    }
    
    // Experience & Achievements
    else if (message.includes('experience') || message.includes('internship') || message.includes('job') || message.includes('work')) {
      response = botResponses.experience;
    } else if (message.includes('achievement') || message.includes('award') || message.includes('recognition') || message.includes('accomplishment')) {
      response = botResponses.achievements;
    } else if (message.includes('hackathon') || message.includes('competition') || message.includes('contest')) {
      response = botResponses.achievements;
    } else if (message.includes('leadership') || message.includes('mentor') || message.includes('lead')) {
      response = botResponses.achievements;
    }
    
    // Contact & Collaboration
    else if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('connect')) {
      response = botResponses.contact;
    } else if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('live')) {
      response = botResponses.location;
    } else if (message.includes('social') || message.includes('linkedin') || message.includes('github') || message.includes('platform')) {
      response = botResponses.social;
    } else if (message.includes('freelance') || message.includes('available') || message.includes('hire') || message.includes('contract')) {
      response = botResponses.freelance;
    } else if (message.includes('collaborate') || message.includes('work together') || message.includes('partnership')) {
      response = botResponses.freelance;
    }
    
    else {
      response = botResponses.default;
    }
    
    const relatedQuestions = getRelatedQuestions(userMessage, response);
    return { response, relatedQuestions };
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
      const { response, relatedQuestions } = generateBotResponse(textToSend);
      const botResponse: Message = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date(),
        relatedQuestions
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    handleSendMessage(suggestion.question);
  };

  const handleRelatedQuestionClick = (question: string) => {
    handleSendMessage(question);
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

  const nextSuggestionSet = () => {
    setCurrentSuggestionSet((prev) => (prev + 1) % suggestionSets.length);
  };

  const prevSuggestionSet = () => {
    setCurrentSuggestionSet((prev) => (prev - 1 + suggestionSets.length) % suggestionSets.length);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const categoryNames = [
    "General & Background",
    "Technical Skills", 
    "Projects & Work",
    "Education & Learning",
    "Experience & Achievements",
    "Contact & Collaboration"
  ];

  return (
    <>
      {/* Enhanced Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Encouraging text above chatbot */}
        {!isOpen && (
          <div className="mb-4 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-xl text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in text-center">
            <p className="text-sm font-medium">💬 Chat with us!</p>
            <p className="text-xs opacity-90">Ask questions about my portfolio</p>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse-glow"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          )}
          
          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">!</span>
            </div>
          )}
        </button>
      </div>

      {/* Enhanced Chat Window */}
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
                  <span>Portfolio Expert • Ready to help</span>
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
              <div key={message.id}>
                <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
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

                {/* Related Questions */}
                {message.isBot && message.relatedQuestions && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs text-gray-400 mb-2">💡 Related questions you might ask:</p>
                    {message.relatedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleRelatedQuestionClick(question)}
                        className="w-full text-left p-2 bg-gray-800/30 hover:bg-gray-700/40 rounded-lg text-cyan-400 text-xs transition-all duration-300 border border-gray-700/20 hover:border-cyan-500/30 flex items-center space-x-2"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>{question}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Suggestions with Category Navigation */}
            {showSuggestions && messages.length === 1 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">Portfolio Categories:</p>
                  <div className="flex items-center space-x-1">
                    <button 
                      onClick={prevSuggestionSet}
                      className="text-xs text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded"
                    >
                      ←
                    </button>
                    <span className="text-xs text-gray-500">
                      {currentSuggestionSet + 1}/{suggestionSets.length}
                    </span>
                    <button 
                      onClick={nextSuggestionSet}
                      className="text-xs text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded"
                    >
                      →
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">
                    {categoryNames[currentSuggestionSet]}
                  </h4>
                </div>
                
                {suggestionSets[currentSuggestionSet].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-cyan-400 text-sm transition-all duration-300 border border-gray-700/30 hover:border-cyan-500/50 hover:scale-[1.02]"
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
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about skills, projects, experience, or anything else..."
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
                <span>Comprehensive Portfolio Data</span>
              </div>
              <div className="flex items-center space-x-1">
                <Brain className="w-3 h-3" />
                <span>AI Expert Assistant</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
