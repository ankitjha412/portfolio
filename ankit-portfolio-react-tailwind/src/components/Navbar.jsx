import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          <span className="text-white">Ankit</span>
          <span className="text-primary-400">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-300 relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full border border-white/10 text-sm font-semibold hover:bg-white/10 transition-all">
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/5 p-6 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-lg text-gray-300 hover:text-white py-2 border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
