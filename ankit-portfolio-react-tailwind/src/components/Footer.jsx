import React from "react"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 pt-20 pb-10 overflow-hidden">
      {/* Gradient Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-2 inline-block">
              <span className="text-white">Ankit</span>
              <span className="text-primary-400">.dev</span>
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ankit Jha. Built with React, Tailwind & Motion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com/ankitjha412" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ankit-jha-b44435259/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/jhaankit499/?hl=en" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
