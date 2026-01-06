import React from 'react';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'Next.js', 'GraphQL', 'PostgreSQL', 'AWS',
    'Docker', 'Kubernetes', 'Git', 'CI/CD'
  ];

  const expertise = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible web applications with modern frameworks and best practices.'
    },
    {
      title: 'Backend Architecture',
      description: 'Designing scalable, maintainable server-side systems and APIs.'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Implementing CI/CD pipelines and managing cloud infrastructure.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Left - Photo */}
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                  alt="Ellise Grant"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">Ellise Grant</h2>
              <p className="text-gray-400 mb-4">Senior Software Engineer</p>
              <p className="text-sm text-gray-500">New York, NY</p>
            </div>
          </div>

          {/* Right - Bio & Info */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">About Me</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a senior software engineer with over 12 years of experience building scalable web applications and leading engineering teams. I specialize in full-stack development with a focus on React, Node.js, and cloud architecture.
                </p>
                <p>
                  Throughout my career, I've worked with startups and enterprise companies, helping them solve complex technical challenges and deliver high-quality products. I'm passionate about writing clean, maintainable code and mentoring junior developers.
                </p>
                <p>
                  When I'm not coding, I contribute to open-source projects, write technical articles, and speak at developer conferences.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Expertise</h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-4 hover:border-primary transition-colors">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700 hover:border-primary hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-gray-800">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">165+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-400">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;