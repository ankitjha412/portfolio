import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-display bg-navy-900 min-h-screen text-white selection:bg-primary-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience className="mb-5" />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
