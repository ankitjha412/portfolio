import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import resume from '../../assets/Ankit_resume.pdf'
import profilepic from '../../assets/Ankit_Profile1.png'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Full Stack Developer", "AI/ML Engineer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, roles])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Ready to innovate
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-gradient">Ankit Jha</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 font-light mb-8 h-10">
            I am a <span className="font-semibold text-white">{text}</span>
            <span className="animate-blink">|</span>
          </div>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Crafting futuristic web experiences and intelligent AI solutions.
            Let's build something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-gray-400">
            <a href="https://github.com/ankitjha412" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="#" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="mailto:ankit@example.com" className="hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Circular Glow/Grid */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-neon-purple/30 blur-3xl rounded-full -z-10 animate-pulse-glow"></div>

          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-[4px] bg-gradient-to-r from-primary-500 via-neon-purple to-neon-pink animate-heartbeat">
            <div className="w-full h-full rounded-full bg-navy-900 overflow-hidden relative z-10">
              <img src={profilepic} alt="Ankit Jha" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-4 glass-card"
          >
            <span className="text-2xl">⚡</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 p-4 glass-card"
          >
            <span className="text-2xl">🤖</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
