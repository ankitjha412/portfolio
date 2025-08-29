import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Vite', 'TailwindCSS', 
    'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'FastAPI',
      'Supabase', 'Git', 'Figma','HTML','CSS'
  ]

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-neutral-300">
            I’m a frontend developer with an AI/ML specialization. I enjoy building fast, accessible interfaces
            and real‑time web apps. I’ve contributed to hackathon‑winning projects and production dashboards.
          </p>
          <p className="mt-4 text-neutral-300">
            Recently, I’ve worked on WebSocket chat systems, document intelligence with embeddings + vector search,
            and microservices for social features.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-neutral-900/60 border border-white/10 text-sm">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
