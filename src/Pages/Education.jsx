import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';

const Education = () => {
  const degrees = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2010 - 2012',
      gpa: '3.9/4.0',
      focus: 'Distributed Systems & Machine Learning',
      achievements: [
        'Published research on distributed consensus algorithms',
        'Teaching Assistant for Advanced Algorithms course',
        'President of Computer Science Graduate Association'
      ]
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'MIT',
      location: 'Cambridge, MA',
      period: '2006 - 2010',
      gpa: '3.8/4.0',
      focus: 'Software Architecture & Database Systems',
      achievements: [
        'Dean\'s List all semesters',
        'Senior thesis on scalable web architectures',
        'Captain of ACM programming competition team'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: 'December 2023',
      expires: 'December 2026',
      credentialId: 'AWS-PSA-12345',
      badge: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      verifyUrl: '#'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'September 2023',
      expires: 'September 2025',
      credentialId: 'GCP-PD-67890',
      badge: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=100&h=100&fit=crop',
      verifyUrl: '#'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'June 2023',
      expires: 'June 2026',
      credentialId: 'CKA-54321',
      badge: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
      verifyUrl: '#'
    },
    {
      name: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: 'March 2023',
      expires: null,
      credentialId: 'MONGO-DEV-99999',
      badge: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop',
      verifyUrl: '#'
    },
    {
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: 'January 2022',
      expires: null,
      credentialId: 'PSM-11111',
      badge: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
      verifyUrl: '#'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: 'November 2022',
      expires: 'November 2024',
      credentialId: 'TERRAFORM-22222',
      badge: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop',
      verifyUrl: '#'
    }
  ];

  const onlineCourses = [
    {
      name: 'Machine Learning Specialization',
      platform: 'Coursera',
      instructor: 'Andrew Ng',
      completed: '2023'
    },
    {
      name: 'Advanced System Design',
      platform: 'Educative',
      instructor: 'Alex Xu',
      completed: '2022'
    },
    {
      name: 'Microservices with Node.js and React',
      platform: 'Udemy',
      instructor: 'Stephen Grider',
      completed: '2021'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Academic background and professional certifications demonstrating continuous learning and expertise.
          </p>
        </div>

        {/* Degrees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Academic Degrees
          </h3>
          <div className="space-y-6">
            {degrees.map((degree, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">{degree.degree}</h4>
                    <div className="text-lg text-primary mb-2">{degree.school}</div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {degree.period}
                      </span>
                      <span>•</span>
                      <span>📍 {degree.location}</span>
                      <span>•</span>
                      <span>GPA: {degree.gpa}</span>
                    </div>
                    <p className="text-gray-300 mb-3">
                      <span className="font-semibold">Focus:</span> {degree.focus}
                    </p>
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</p>
                  <ul className="space-y-1">
                    {degree.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                {/* Badge */}
                <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-all">
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Cert Info */}
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                
                <div className="space-y-1 text-xs text-gray-400 mb-4">
                  <p>Issued: {cert.date}</p>
                  {cert.expires && <p>Expires: {cert.expires}</p>}
                  <p>ID: {cert.credentialId}</p>
                </div>

                {/* Verify Link */}
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm hover:text-primary-dark"
                >
                  Verify Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Continuous Learning</h3>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 mb-4">Selected online courses and specializations:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {onlineCourses.map((course, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <h5 className="font-semibold mb-2">{course.name}</h5>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>{course.platform}</p>
                    <p>by {course.instructor}</p>
                    <p className="text-primary">Completed {course.completed}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;