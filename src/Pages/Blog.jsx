import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications: Lessons from Production',
      excerpt: 'After building multiple large-scale React applications, here are the architectural patterns and best practices that have proven most effective for maintainability and performance.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Performance']
    },
    {
      title: 'Implementing Microservices: A Real-World Case Study',
      excerpt: 'How we migrated from a monolithic architecture to microservices, the challenges we faced, and the lessons learned from managing distributed systems in production.',
      date: 'Dec 10, 2024',
      readTime: '12 min read',
      tags: ['Backend', 'Microservices', 'DevOps']
    },
    {
      title: 'Database Optimization Techniques That Actually Work',
      excerpt: 'Practical strategies for optimizing database performance including indexing strategies, query optimization, and caching patterns that reduced our query times by 80%.',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      tags: ['Database', 'PostgreSQL', 'Performance']
    },
    {
      title: 'Leading Engineering Teams: Technical and Human Challenges',
      excerpt: 'Reflections on transitioning from individual contributor to engineering manager, balancing technical involvement with team leadership, and building high-performing teams.',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      tags: ['Leadership', 'Career', 'Management']
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-primary">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Sharing insights on software engineering, system design, and lessons learned from building production systems.
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex md:flex-col gap-4 md:gap-2 text-sm text-gray-500 md:text-right md:min-w-[120px]">
                  <div className="flex items-center gap-1 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1 md:justify-end">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium group/link"
                >
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;