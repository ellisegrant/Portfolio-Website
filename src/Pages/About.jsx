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
                  src="/public/profile.jpg"
                  alt="Ellise Grant"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">Ellise Grant</h2>
              <p className="text-gray-400 mb-4">Software Engineer</p>
              <p className="text-sm text-gray-500">Ghana-Accra</p>
            </div>
          </div>

          {/* Right - Bio & Info */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">About Me</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I’m a software engineer passionate about building user-focused web applications and well-designed interfaces. I work
                   across frontend and backend systems, creating functional, intuitive, and visually appealing digital solutions.
                </p>
                <p>
                  Outside of my professional work, I’m an avid reader with a deep love for books across a wide range of genres—from novels and history to technology and other nonfiction.
                  I also enjoy playing soccer, which has strengthened my appreciation for teamwork, discipline, and strategic thinking
                </p>
                <p>
                  I’m comfortable working in collaborative teams, leading frontend efforts, and communicating with non-technical stakeholders to translate business needs into effective technical solutions.
                   I’m constantly learning, refining my skills, and building in public as I continue to grow as a software engineer.
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

       
       
      </div>
    </section>
  );
};

export default About;