import React, { useState } from 'react';
import { Target, Zap, TrendingUp, ExternalLink, Github } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: 'E-Commerce Platform Scaling',
      company: 'Tech Innovations Inc.',
      year: '2023',
      category: 'System Architecture',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      challenge: 'The platform was struggling to handle Black Friday traffic, experiencing frequent crashes and slow page loads. The monolithic architecture couldn\'t scale horizontally, resulting in lost revenue during peak sales periods.',
      solution: 'Redesigned the system using microservices architecture with event-driven communication. Implemented Redis caching layer, database sharding, and deployed on Kubernetes for auto-scaling. Added CDN for static assets and optimized database queries.',
      results: [
        { metric: '10x', description: 'Increase in concurrent users handled' },
        { metric: '60%', description: 'Reduction in page load times' },
        { metric: '99.99%', description: 'Uptime during peak traffic' },
        { metric: '$2M+', description: 'Additional revenue during sales events' }
      ],
      technologies: ['React', 'Node.js', 'Kubernetes', 'Redis', 'PostgreSQL', 'AWS'],
      problemDetails: [
        'Database bottlenecks during high traffic',
        'Monolithic architecture limiting horizontal scaling',
        'Slow API response times (>3s average)',
        'Frequent timeouts and 503 errors during sales'
      ],
      solutionDetails: [
        'Migrated to microservices architecture with 12 independent services',
        'Implemented Redis caching reducing database load by 70%',
        'Added Kubernetes auto-scaling based on CPU and memory metrics',
        'Optimized database indexes and queries, added read replicas',
        'Implemented CDN for static assets and image optimization'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Real-Time Analytics Dashboard',
      company: 'Digital Solutions Corp',
      year: '2021',
      category: 'Data Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      challenge: 'Client needed a real-time analytics dashboard to monitor millions of IoT devices. Existing batch processing system had 24-hour latency, making it impossible to detect and respond to issues in real-time.',
      solution: 'Built a streaming data pipeline using Apache Kafka and WebSockets. Implemented time-series database (ClickHouse) for efficient data storage and querying. Created real-time visualization dashboard with sub-second updates.',
      results: [
        { metric: '<1s', description: 'Data processing latency' },
        { metric: '10M+', description: 'Events processed per day' },
        { metric: '95%', description: 'Reduction in issue detection time' },
        { metric: '40%', description: 'Decrease in infrastructure costs' }
      ],
      technologies: ['React', 'WebSocket', 'Kafka', 'ClickHouse', 'Python', 'Docker'],
      problemDetails: [
        '24-hour delay in data availability',
        'Cannot detect anomalies in real-time',
        'Batch processing consuming excessive resources',
        'Poor user experience with stale data'
      ],
      solutionDetails: [
        'Designed event-driven architecture with Kafka as message broker',
        'Implemented stream processing with real-time aggregations',
        'Built WebSocket server for live data push to frontend',
        'Optimized ClickHouse schema for time-series queries',
        'Created custom visualization components with D3.js'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Payment Processing System',
      company: 'StartupX',
      year: '2018',
      category: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      challenge: 'Fintech startup needed a secure, PCI-compliant payment processing system from scratch. System had to handle thousands of transactions daily with zero tolerance for data loss or security breaches.',
      solution: 'Developed end-to-end payment processing system with multi-layered security, encryption at rest and in transit, and comprehensive audit logging. Implemented idempotency keys, retry mechanisms, and reconciliation processes.',
      results: [
        { metric: '$5M+', description: 'Monthly transaction volume' },
        { metric: '99.99%', description: 'Transaction success rate' },
        { metric: '0', description: 'Security breaches' },
        { metric: '100%', description: 'PCI DSS compliance achieved' }
      ],
      technologies: ['Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'AWS KMS'],
      problemDetails: [
        'No existing payment infrastructure',
        'Strict PCI compliance requirements',
        'Need for transaction idempotency',
        'Complex reconciliation requirements'
      ],
      solutionDetails: [
        'Implemented tokenization for sensitive payment data',
        'Built webhook system for payment event processing',
        'Created automated reconciliation system',
        'Added comprehensive audit logging and monitoring',
        'Implemented fraud detection algorithms'
      ],
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Deep dives into complex technical challenges and how I solved them.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCase === index
                  ? 'bg-primary text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Selected Case Study */}
        <div className="space-y-8">
          {/* Hero Image & Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-video overflow-hidden bg-gray-800">
              <img 
                src={currentCase.image} 
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
                  {currentCase.category}
                </span>
                <span className="text-gray-500 text-sm">{currentCase.company}</span>
                <span className="text-gray-500 text-sm">{currentCase.year}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{currentCase.title}</h3>
              <div className="flex gap-4">
                <a 
                  href={currentCase.links.github}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                <a 
                  href={currentCase.links.live}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Challenge, Solution, Results Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Challenge */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Challenge</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{currentCase.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Solution</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{currentCase.solution}</p>
            </div>

            {/* Results */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Results</h4>
              </div>
              <div className="space-y-3">
                {currentCase.results.map((result, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-primary">{result.metric}</div>
                    <div className="text-sm text-gray-400">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem Details */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Problem Details</h4>
              <ul className="space-y-2">
                {currentCase.problemDetails.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Implementation */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Implementation Approach</h4>
              <ul className="space-y-2">
                {currentCase.solutionDetails.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {currentCase.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;