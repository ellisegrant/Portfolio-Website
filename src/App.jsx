import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Testimonials from './Pages/Testimonials'
import Awards from './Pages/Awards'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Blog/>
      <Projects />
      <Testimonials />
      <Awards />
      <Contact />
    </div>
  )
}

export default App