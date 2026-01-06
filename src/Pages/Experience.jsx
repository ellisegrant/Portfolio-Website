import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
  company: 'Gulf of Guinea Maritime Institute',
  role: 'Software Engineer',
  period: 'September 2025',
  location: 'Ghana',
  description: 'Software Engineer responsible for developing and maintaining web-based systems, managing internal digital platforms, and providing technical support across software and hardware infrastructure.',
  achievements: [
    "Designed and developed the institute's intranet system using modern web technologies to support internal communication and administrative workflows",
    'Built and maintained the official website with a focus on performance, accessibility, and responsive design',
    'Developed and integrated RESTful APIs to support internal applications and data flow',
    'Managed internal digital systems including user access, system updates, and data integrity',
    'Provided troubleshooting and technical support for hardware, network, and software-related issues',
    'Worked closely with non-technical stakeholders to gather requirements and translate them into technical solutions'
  ],
  technologies: [
    'React',
    'JavaScript',
    'Node.js',
    'REST APIs',
    'Git',
    'Linux',
    'Basic Networking',
    'Hardware Troubleshooting'
  ]
},
    {
      company: 'CALABASH ROYALS',
      role: 'Project Manager/Frontend developer',
      period: '2024/11 – 2025/03',
      location: 'GHANA-KUMASI',
      description: 'Collaborated with a team to develop responsive, user-friendly interfaces for the Calabash Royals and ChromaWear websites using HTML, CSS, JavaScript, and React.',
      achievements: [
        'Built a responsive, mobile-first web application using React and TypeScript for food ordering and online payments',
        'Implemented core features including dynamic menu display, cart management, checkout flow, and order submission',
        'Integrated secure payment processing with real-time success and failure handling',
        'Consumed RESTful APIs for order creation, payment verification, and order status updates',
        'Collaborated closely with backend engineers to align frontend logic with business workflows',
        'Led project planning, task delegation, and sprint execution to deliver the product on schedule',
        'Improved UI/UX consistency, accessibility, and cross-browser compatibility across modern browsers',
        'Introduced frontend best practices, improving code maintainability and reducing bugs'
      ],
      technologies: ['React', 'TypeScript', 'GraphQL', 'MongoDB', 'Redis', 'Hostinger']
    },
    {
      
    },
    {
      company: 'WebDev Agency',
      role: 'Junior Developer',
      period: 'Jan 2014 - May 2016',
      location: 'Boston, MA',
      description: 'Built responsive websites and web applications for various clients across different industries.',
      achievements: [
        'Developed 20+ client websites using modern web technologies',
        'Collaborated with designers to implement pixel-perfect designs',
        'Maintained and updated legacy codebases for existing clients',
        'Learned full-stack development and gained experience with multiple frameworks'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'WordPress', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            My professional journey building software solutions and leading engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences
            .filter(exp => exp.company) // Filter out empty objects
            .map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-800 hover:border-primary/30 transition-colors">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-dark"></div>

              {/* Content */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center gap-1 text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="text-gray-500">{exp.location}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{exp.description}</p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Experience;