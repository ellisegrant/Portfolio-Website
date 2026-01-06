import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a scalable e-commerce platform handling 100K+ daily transactions. Implemented microservices architecture with React, Node.js, and PostgreSQL.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
    },
    {
      title: 'Healthcare Management System',
      description: 'Developed HIPAA-compliant patient management system used by 50+ clinics. Features include appointment scheduling, EHR integration, and telehealth.',
      tech: ['React', 'TypeScript', 'GraphQL', 'MongoDB'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Created real-time analytics platform processing millions of events per day. Built with WebSocket for live updates and optimized for performance.',
      tech: ['Next.js', 'WebSocket', 'ClickHouse', 'Docker'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Financial Trading Platform',
      description: 'Engineered high-frequency trading platform with sub-millisecond latency. Implemented real-time data streaming and complex order matching algorithms.',
      tech: ['Python', 'FastAPI', 'Kafka', 'TimescaleDB'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
    },
    {
      title: 'AI-Powered Content Platform',
      description: 'Built content recommendation engine using machine learning. Increased user engagement by 40% through personalized content delivery.',
      tech: ['React', 'Python', 'TensorFlow', 'Kubernetes'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      title: 'DevOps Automation Suite',
      description: 'Designed CI/CD pipeline automation tools reducing deployment time by 70%. Integrated with multiple cloud providers and monitoring systems.',
      tech: ['Go', 'Terraform', 'Jenkins', 'Prometheus'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects that showcase my technical expertise and problem-solving abilities across different domains and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                {/* Title & Links */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="p-2 text-gray-400 hover:text-primary transition-colors"
                      aria-label="View code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.link}
                      className="p-2 text-gray-400 hover:text-primary transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
          >
            View all projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;