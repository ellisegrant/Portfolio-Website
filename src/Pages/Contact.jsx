import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@ellisegrant.dev',
      href: 'mailto:hello@ellisegrant.dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Work <span className="text-primary">Together</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-300 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Ellise Grant. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;