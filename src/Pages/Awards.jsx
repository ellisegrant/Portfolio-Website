import React from 'react';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      year: '2024',
      title: 'Best Engineering Team Leadership',
      organization: 'Tech Excellence Awards',
      description: 'Recognized for building and leading high-performing engineering teams'
    },
    {
      year: '2023',
      title: 'Innovation in Cloud Architecture',
      organization: 'AWS Summit',
      description: 'Awarded for implementing cost-effective, scalable cloud solutions'
    },
    {
      year: '2023',
      title: 'Open Source Contributor of the Year',
      organization: 'GitHub',
      description: 'Acknowledged for significant contributions to open-source projects'
    },
    {
      year: '2022',
      title: 'Outstanding Technical Achievement',
      organization: 'ACM',
      description: 'Honored for developing innovative solutions in distributed systems'
    }
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Recognition for technical excellence and contributions to the engineering community.
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-start gap-6">
                {/* Year */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <span className="text-primary font-bold">{award.year}</span>
                  </div>
                </div>

                {/* Award Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-primary text-sm mb-2">{award.organization}</p>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </div>

                {/* Icon */}
                <Award className="w-6 h-6 text-gray-600 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;