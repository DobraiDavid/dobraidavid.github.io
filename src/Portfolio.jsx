import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain, Gamepad2, Leaf, Home, Mail, MapPin, Calendar, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, X, Send, User, MessageSquare, Phone, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
    setIsLoaded(true);
    
    const sections = ['hero', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSection = sections[0];

        for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const sectionEl = document.getElementById(sectionId);
        if (!sectionEl) continue;

        const sectionTop = sectionEl.offsetTop;
        const sectionBottom = sectionTop + sectionEl.offsetHeight;

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
        }
        }

        setActiveSection(currentSection);

        // Scroll progress
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize active section
    console.log(activeSection)
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Translation object with complete translations
  const translations = {
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I am Dobrai Dávid,",
        title: "Full-Stack Developer",
        subtitle: "Building innovative web solutions with modern technologies and AI integration",
        viewWork: "View My Work",
        tags: {
          frontend: "React & Angular",
          database: "Database Architect",
          backend: "Java & PHP"
        }
      },
      projects: [
        {
          title: "Real Estate Hub",
          description: "A comprehensive real estate listing platform with advanced search filters, property details, and user management. Features responsive design, property image galleries, and integrated contact forms.",
          highlight: "Full-Stack Web Development",
          features: ["Property Search & Filters", "Image Galleries", "User Authentication", "Responsive Design", "Contact Management"]
        },
        {
          title: "PlantPlanet",
          description: "An e-commerce platform specialized for plant enthusiasts with subscription services, care tips, and comprehensive plant database. Built with modern architecture and robust database design.",
          highlight: "Complex Database Architecture",
          features: ["E-commerce Platform", "Subscription Management", "AI Support Bot", "Email Notifications", "Responsive Design"]
        },
        {
          title: "AI FlappyBird",
          description: "A Python-based FlappyBird game with an integrated NEAT AI that learns to play autonomously. Demonstrates machine learning principles and game development skills.",
          highlight: "AI & Machine Learning",
          features: ["Game Development", "AI Training", "Neural Networks", "Real-time Learning", "Performance Analytics"]
        }
      ],
      skills: {
        title: "Technical Skills",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          tools: "Tools & Others"
        }
      },
      contact: {
        title: "Let's Build Something Amazing Together",
        subtitle: "Ready to bring your next project to life? I'm excited to discuss how my skills and passion for development can contribute to your team's success.",
        form: {
          name: "Your Name",
          email: "Your Email",
          subject: "Subject",
          message: "Tell me about your project...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully! I'll get back to you soon.",
          error: "Failed to send message. Please try again."
        },
        info: {
          title: "Get in Touch",
          email: "dobraidavid5@gmail.com",
          location: "Nyíregyháza, Hungary",
          availability: "Available for new opportunities",
          response: "I typically respond within 24 hours"
        },
        github: "View All Projects on GitHub"
      }
    },
    hu: {
      nav: {
        home: "Főoldal",
        projects: "Projektek",
        skills: "Készségek",
        contact: "Kapcsolat"
      },
      hero: {
        greeting: "Szia, Dobrai Dávid vagyok,",
        title: "Full-Stack Fejlesztő",
        subtitle: "Innovatív webes megoldások építése modern technológiákkal és mesterséges intelligencia integrációval",
        viewWork: "Munkáim megtekintése",
        tags: {
          frontend: "React és Angular",
          database: "Adatbázis Architekt",
          backend: "Java és PHP"
        }
      },
      projects: [
        {
          title: "Ingatlan Hub",
          description: "Átfogó ingatlanhirdetési platform fejlett keresési szűrőkkel, ingatlan részletekkel és felhasználó kezeléssel. Reszponzív design, ingatlan képgalériák és integrált kapcsolati űrlapok.",
          highlight: "Full-Stack Webfejlesztés",
          features: ["Ingatlan keresés és szűrők", "Képgalériák", "Felhasználó hitelesítés", "Reszponzív design", "Kapcsolat kezelés"]
        },
        {
          title: "PlantPlanet",
          description: "E-kereskedelmi platform növénykedvelőknek előfizetési szolgáltatásokkal, gondozási tippekkel és átfogó növény adatbázissal. Modern architektúrával és robusztus adatbázis tervezéssel.",
          highlight: "Összetett Adatbázis Architektúra",
          features: ["E-kereskedelmi platform", "Előfizetés kezelés", "AI támogatási bot", "E-mail értesítések", "Reszponzív design"]
        },
        {
          title: "AI FlappyBird",
          description: "Python-alapú FlappyBird játék integrált NEAT AI-val, amely megtanulja önállóan játszani. Gépi tanulási elveket és játékfejlesztési készségeket demonstrál.",
          highlight: "Mesterséges Intelligencia és Gépi Tanulás",
          features: ["Játékfejlesztés", "AI képzés", "Neurális hálózatok", "Valós idejű tanulás", "Teljesítmény analitika"]
        }
      ],
      skills: {
        title: "Technikai Készségek",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Adatbázis",
          tools: "Eszközök és egyebek"
        }
      },
      contact: {
        title: "Építsünk fel valamit csodálatosat közösen",
        subtitle: "Készen állsz a következő projekted megvalósítására? Izgatottan várom, hogy megbeszéljük, hogyan járulhatnak hozzá készségeim és fejlesztői szenvedélyem csapatod sikeréhez.",
        form: {
          name: "Neved",
          email: "E-mail címed",
          subject: "Tárgy",
          message: "Mesélj a projektedről...",
          send: "Üzenet küldése",
          sending: "Küldés...",
          success: "Üzenet sikeresen elküldve! Hamarosan válaszolok.",
          error: "Nem sikerült elküldeni az üzenetet. Kérlek próbáld újra."
        },
        info: {
          title: "Vedd fel velem a kapcsolatot",
          email: "dobrai.david@example.com",
          location: "Nyíregyháza, Magyarország",
          availability: "Elérhető új lehetőségekhez",
          response: "Általában 24 órán belül válaszolok"
        },
        github: "Összes projekt megtekintése a GitHub-on"
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.projects[0].title,
      description: t.projects[0].description,
      tech: ["Angular", "PHP", "MySQL"],
      icon: <Home className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: t.projects[0].features,
      tryItUrl: "https://estatehub-w37i.onrender.com/", 
      githubUrl: "https://github.com/DobraiDavid/PropertySeller", 
      highlight: t.projects[0].highlight,
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 2,
      title: t.projects[1].title,
      description: t.projects[1].description,
      tech: ["React", "Spring Boot", "PostgreSQL"],
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: t.projects[1].features,
      tryItUrl: "https://plantplanet.onrender.com/", 
      githubUrl: "https://github.com/DobraiDavid/HostedPlantPlanet", 
      highlight: t.projects[1].highlight,
      images: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518335935020-cfd9a5b2bb1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      title: t.projects[2].title,
      description: t.projects[2].description,
      tech: ["Python", "Pygame", "NEAT AI"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: t.projects[2].features,
      tryItUrl: "#", 
      githubUrl: "https://github.com/DobraiDavid/FlappyBirdAI", 
      highlight: t.projects[2].highlight,
      images: [
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  const skills = [
    { category: t.skills.categories.frontend, items: ["React", "Angular", "HTML5", "CSS3", "JavaScript"] },
    { category: t.skills.categories.backend, items: ["Spring Boot", "PHP", "RESTful APIs", "Authentication", "Server Architecture"] },
    { category: t.skills.categories.database, items: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization", "Data Modeling"] },
    { category: t.skills.categories.tools, items: ["Git", "GitHub", "Docker", "Full-Stack Development", "Problem Solving"] }
  ];

  // Language toggle function
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hu' : 'en');
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  // Image gallery functions
  const nextImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setActiveImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % project.images.length
    }));
  };

  const prevImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setActiveImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length
    }));
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        // Update active section immediately
        setActiveSection(sectionId);
        
        // Scroll to the section
        element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
        });

        // Fallback: update again after scroll completes
        setTimeout(() => {
        setActiveSection(sectionId);
        }, 300);
    }
    };
  const navItems = [
    { id: 'hero', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { id: 'projects', label: t.nav.projects, icon: <Code className="w-4 h-4" /> },
    { id: 'skills', label: t.nav.skills, icon: <Database className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden" style={{ scrollSnapType: 'y proximity', height: '100vh', overflowY: 'scroll' }}>
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-4">
        {navItems.map((item, index) => (
          <div key={item.id} className="group flex items-center">
            <div 
              className={`opacity-0 group-hover:opacity-100 transition-all duration-300 mr-3 px-3 py-2 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-600/50 text-sm whitespace-nowrap ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}
            >
              {item.label}
            </div>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 group ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
              }`}
              title={item.label}
            >
              <div className={`absolute inset-0 rounded-full ${
                activeSection === item.id ? 'animate-ping bg-cyan-400/50' : ''
              }`} />
            </button>
          </div>
        ))}
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none w-full">
        <div className="absolute -top-40 -right-40 w-[20vw] h-[20vw] bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[20vw] h-[20vw] bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[20vw] h-[20vw] bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DobraiDávid
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-cyan-400 transition-colors">{t.nav.home}</button>
                <button onClick={() => scrollToSection('projects')} className="text-white hover:text-cyan-400 transition-colors">{t.nav.projects}</button>
                <button onClick={() => scrollToSection('skills')} className="text-white hover:text-cyan-400 transition-colors">{t.nav.skills}</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors">{t.nav.contact}</button>
              </div>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 transition-colors border border-slate-600/50"
                title={language === 'en' ? 'Switch to Hungarian' : 'Switch to English'}
              >
                <span className="text-2xl">
                  {language === 'en' ? '🇭🇺' : '🇬🇧'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative" style={{ scrollSnapAlign: 'start' }}>
        <div className={`w-full mx-0 px-6 text-center transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="mb-8">
            <div className="text-2xl md:text-3xl font-light mb-4 text-cyan-300">
              {t.hero.greeting}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-500/30">
                {t.hero.tags.frontend}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-emerald-500/30">
                {t.hero.tags.database}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                {t.hero.tags.backend}
              </span>
            </div>
            <button 
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.viewWork} <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <div id="projects">
        {projects.map((project, index) => (
          <section key={project.id} className="min-h-screen py-20 relative flex items-center" style={{ scrollSnapAlign: 'start' }}>
            <div className="w-full max-w-7xl mx-auto px-6">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 min-h-[70vh]`}>
                {/* Project Info */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${project.color} rounded-xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold">{project.title}</h3>
                      <p className="text-cyan-400 font-semibold text-lg">{project.highlight}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-xl leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-cyan-400">{language === 'en' ? 'Key Features:' : 'Főbb jellemzők:'}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-800 rounded-full text-base border border-slate-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 pt-6">
                    <a 
                      href={project.tryItUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {language === 'en' ? 'Try It Out' : 'Kipróbálás'}
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-slate-800 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-700 hover:border-slate-500 hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {language === 'en' ? 'View on GitHub' : 'GitHub-on megtekintés'}
                    </a>
                  </div>
                </div>
                
                {/* Enhanced Project Gallery - Made Bigger */}
                <div className="lg:w-1/2">
                  <div className={`relative p-8 bg-gradient-to-br ${project.color} rounded-3xl shadow-2xl`}>
                    <div className="bg-slate-900/90 backdrop-blur rounded-2xl p-8 relative overflow-hidden">
                      <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden group">
                        <img 
                          src={project.images[activeImageIndex[project.id] || 0]}
                          alt={`${project.title} screenshot ${(activeImageIndex[project.id] || 0) + 1}`}
                          className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                          onClick={() => openModal(project.images[activeImageIndex[project.id] || 0])}
                        />
                        
                        {/* Navigation arrows */}
                        <button
                          onClick={() => prevImage(project.id)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => nextImage(project.id)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              onClick={() => setActiveImageIndex(prev => ({ ...prev, [project.id]: imgIdx }))}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (activeImageIndex[project.id] || 0) === imgIdx ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                        
                        {/* Overlay info */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                          <p className="text-white text-sm font-medium">
                            {(activeImageIndex[project.id] || 0) + 1} / {project.images.length}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <p className="text-slate-400 text-sm">
                          {language === 'en' ? 'Click image to view full size • Use arrows to navigate' : 'Kattints a képre a teljes méretű megtekintéshez • Használd a nyilakat a navigáláshoz'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-slate-900/50 flex items-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="w-full px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="min-h-screen py-20 flex items-center relative overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90"></div>
        <div className="relative w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  {language === 'en' ? 'Send me a message' : 'Küldj üzenetet'}
                </h3>
                
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg border ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}>
                    {submitStatus === 'success' ? t.contact.form.success : t.contact.form.error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">{t.contact.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-slate-900/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                        placeholder={t.contact.form.name}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">{t.contact.form.email}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-slate-900/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                        placeholder={t.contact.form.email}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">{t.contact.form.subject}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-slate-900/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                      placeholder={t.contact.form.subject}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-4 bg-slate-900/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 resize-vertical"
                      placeholder={t.contact.form.message}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.contact.form.send}
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                    <User className="w-6 h-6 mr-3" />
                    {t.contact.info.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                        <Mail className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-300 font-medium mb-1">{language === 'en' ? 'Email' : 'E-mail'}</h4>
                        <a href="mailto:dobrai.david@example.com" className="text-white hover:text-cyan-400 transition-colors text-lg">
                          {t.contact.info.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-300 font-medium mb-1">{language === 'en' ? 'Location' : 'Helyszín'}</h4>
                        <p className="text-white text-lg">{t.contact.info.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-300 font-medium mb-1">{language === 'en' ? 'Status' : 'Státusz'}</h4>
                        <p className="text-green-400 text-lg font-medium">{t.contact.info.availability}</p>
                        <p className="text-slate-400 text-sm mt-1">{t.contact.info.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* GitHub CTA */}
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-md rounded-3xl pt-4 border border-slate-700/50 text-center pb-5">
                  <Github className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">{language === 'en' ? 'Explore My Work' : 'Fedezd fel munkáimat'}</h3>
                  <p className="text-slate-300 mb-6">
                    {language === 'en' 
                      ? 'Check out all my projects and contributions on GitHub' 
                      : 'Nézd meg összes projektemet és hozzájárulásaimat a GitHub-on'
                    }
                  </p>
                  <a 
                    href="https://github.com/DobraiDavid" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t.contact.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;