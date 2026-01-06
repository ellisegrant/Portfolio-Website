import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import CaseStudies from './Pages/Casestudies'
import GitHubShowcase from './Pages/GitHubShowcase'
import Education from './Pages/Education'
import Blog from './Pages/Blog'
import Testimonials from './Pages/Testimonials'
import Awards from './Pages/Awards'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <GitHubShowcase />
      <Education />
      <Blog />
      <Testimonials />
      <Awards />
      <Contact />
    </div>
  )
}

export default App