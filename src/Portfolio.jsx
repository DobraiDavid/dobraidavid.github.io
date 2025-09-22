import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain, Gamepad2, Leaf, Home, Mail, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Real Estate Hub",
      description: "A comprehensive real estate listing platform with advanced search filters, property details, and user management. Features responsive design, property image galleries, and integrated contact forms.",
      tech: ["Angular", "PHP", "MySQL"],
      icon: <Home className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Property Search & Filters", "Image Galleries", "User Authentication", "Responsive Design", "Contact Management"],
      tryItUrl: "https://estatehub-w37i.onrender.com/", 
      githubUrl: "https://github.com/DobraiDavid/PropertySeller", 
      highlight: "Full-Stack Web Development"
    },
    {
      id: 2,
      title: "PlantPlanet",
      description: "An e-commerce platform specialized for plant enthusiasts with subscription services, care tips, and comprehensive plant database. Built with modern architecture and robust database design.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["E-commerce Platform", "Subscription Management", "AI Support Bot", "Email Notifications", "Responsive Design"],
      tryItUrl: "https://plantplanet.onrender.com/", 
      githubUrl: "https://github.com/DobraiDavid/HostedPlantPlanet", 
      highlight: "Complex Database Architecture"
    },
    {
      id: 3,
      title: "AI FlappyBird",
      description: "A Python-based FlappyBird game with an integrated NEAT AI that learns to play autonomously. Demonstrates machine learning principles and game development skills.",
      tech: ["Python", "Pygame", "NEAT AI"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Game Development", "AI Training", "Neural Networks", "Real-time Learning", "Performance Analytics"],
      tryItUrl: "#", // Replace with actual URL
      githubUrl: "https://github.com/DobraiDavid/FlappyBirdAI", 
      highlight: "AI & Machine Learning"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "HTML5", "CSS3", "JavaScript", "Responsive Design"] },
    { category: "Backend", items: ["Spring Boot", "PHP", "RESTful APIs", "Authentication", "Server Architecture"] },
    { category: "Database", items: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization", "Data Modeling"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "Docker", "Full-Stack Development", "Problem Solving"] }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none w-full">
        <div className="absolute -top-40 -right-40 w-[20vw] h-[20vw] bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[20vw] h-[20vw] bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[20vw] h-[20vw] bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DobraiDávid
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated to full width on PC */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div     className={`w-full mx-0 px-0 text-center transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="mb-8">
            {/* Added "Hi, I am Dobrai Dávid" above the main title */}
            <div className="text-2xl md:text-3xl font-light mb-4 text-cyan-300">
              Hi, I am Dobrai Dávid,
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Building innovative web solutions with modern technologies and AI integration
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Updated badges as requested */}
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-500/30">
                React & Angular
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-emerald-500/30">
                Database Architect
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                Java & PHP
              </span>
            </div>
            <a href="#projects" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="w-full max-w-none px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Project Info */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-cyan-400 font-semibold">{project.highlight}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href={project.tryItUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try It Out
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </div>
                
                {/* Project Visual */}
                <div className="lg:w-1/2">
                  <div className={`relative p-8 bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                    <div className="bg-slate-900/80 backdrop-blur rounded-xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 opacity-80">
                          {project.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-slate-300 text-sm">Interactive Demo Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="w-full px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-purple-400" />
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="w-full px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-3">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to bring your next project to life? Let's discuss how my skills can contribute to your team.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <a 
              href="https://github.com/DobraiDavid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-slate-800 border border-slate-600 rounded-full font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;