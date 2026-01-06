import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const highlights = [
    'Full-Stack Development',
    'System Architecture',
    'Team Leadership',
    'Cloud Infrastructure'
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/public/boamah_CV.pdf'; // Place your PDF in the public folder
    link.download = 'Ellise_Grant_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-10">
          {/* Main Introduction */}
          <div>
            <p className="text-primary font-semibold mb-3 text-lg">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Ellise Grant
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-400 font-light mb-6">
              Software Engineer
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              I build scalable web applications and lead engineering teams to deliver exceptional digital products. 
              Specialized in full-stack development with React, Node.js, and cloud architecture.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-primary transition-all"
              >
                <p className="text-sm text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          {/* Expanded Description */}
          <div className="max-w-3xl space-y-4">
            <p className="text-gray-300 leading-relaxed">
              With over 3 years of experience in software development, I've helped startups scale to millions of users 
              and led engineering teams at Fortune 6 companies. My expertise spans the entire development lifecycle, 
              from architecture and design to deployment and maintenance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code, mentoring junior developers, and staying current 
              with the latest technologies. When I'm not coding, I contribute to open-source projects and share knowledge 
              through technical writing and speaking engagements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact"
              className="group px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work"
              className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-primary transition-all duration-300"
            >
              View My Work
            </a>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Social Links & Stats */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-800">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/ellisegrant?tab=overview&from=2026-01-01&to=2026-01-06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ellise-grant-boamah-895313230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="elliseboamah@gmail.com"
                className="p-3 border border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
              
            </div>
          </div>

          {/* Current Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;