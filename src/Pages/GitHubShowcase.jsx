import React, { useState } from 'react';
import { Star, GitFork, Eye, ExternalLink, Github } from 'lucide-react';

const GitHubShowcase = () => {
  // You can fetch this data from GitHub API in production
  const githubStats = {
    username: 'ellisegrant',
    totalRepos: 48,
    totalStars: 1234,
    totalCommits: 3456,
    contributions: 892
  };

  const topRepositories = [
    {
      name: 'react-dashboard-template',
      description: 'A modern, responsive dashboard template built with React and Tailwind CSS. Includes charts, tables, and authentication.',
      stars: 324,
      forks: 89,
      watchers: 45,
      language: 'TypeScript',
      languageColor: '#3178c6',
      url: 'https://github.com/yourusername/react-dashboard-template'
    },
    {
      name: 'microservices-boilerplate',
      description: 'Production-ready microservices architecture with Node.js, Docker, and Kubernetes. Includes API gateway and service mesh.',
      stars: 256,
      forks: 67,
      watchers: 32,
      language: 'JavaScript',
      languageColor: '#f1e05a',
      url: 'https://github.com/yourusername/microservices-boilerplate'
    },
    {
      name: 'python-data-pipeline',
      description: 'ETL pipeline for processing large datasets. Built with Apache Airflow, Pandas, and PostgreSQL.',
      stars: 189,
      forks: 45,
      watchers: 28,
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/yourusername/python-data-pipeline'
    },
    {
      name: 'nextjs-ecommerce',
      description: 'Full-stack e-commerce platform with Next.js, Stripe integration, and admin dashboard.',
      stars: 167,
      forks: 52,
      watchers: 21,
      language: 'TypeScript',
      languageColor: '#3178c6',
      url: 'https://github.com/yourusername/nextjs-ecommerce'
    },
    {
      name: 'devops-automation-scripts',
      description: 'Collection of automation scripts for AWS, CI/CD, and infrastructure management.',
      stars: 142,
      forks: 38,
      watchers: 19,
      language: 'Shell',
      languageColor: '#89e051',
      url: 'https://github.com/yourusername/devops-automation-scripts'
    },
    {
      name: 'graphql-api-starter',
      description: 'GraphQL API starter with authentication, subscriptions, and real-time updates.',
      stars: 128,
      forks: 34,
      watchers: 16,
      language: 'JavaScript',
      languageColor: '#f1e05a',
      url: 'https://github.com/yourusername/graphql-api-starter'
    }
  ];

  return (
    <section id="github" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open Source <span className="text-primary">Contributions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Actively contributing to open-source projects and sharing knowledge with the developer community.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-primary/30 transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{githubStats.totalRepos}</div>
            <div className="text-sm text-gray-400">Public Repositories</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-primary/30 transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{githubStats.totalStars}</div>
            <div className="text-sm text-gray-400">Total Stars</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-primary/30 transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{githubStats.totalCommits}+</div>
            <div className="text-sm text-gray-400">Commits</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-primary/30 transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{githubStats.contributions}</div>
            <div className="text-sm text-gray-400">Contributions (2024)</div>
          </div>
        </div>

        {/* Top Repositories */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRepositories.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                {/* Repo Name */}
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {repo.description}
                </p>

                {/* Language */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <span className="text-sm text-gray-400">{repo.language}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {repo.watchers}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All on GitHub */}
        <div className="text-center mt-12">
          <a 
            href={`https://github.com/${githubStats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border-2 border-gray-800 text-white font-semibold rounded-lg hover:border-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Repositories on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubShowcase;