import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award } from 'lucide-react'

export default function Experience({ className = "" }) {
  const items = [
    {
      title: "Hack SRM 6.0 — AI/ML Winner",
      time: "Feb 2025",
      desc: "Led the team to win in AI/ML; built an ML-driven solution and presented outcomes.",
      icon: <Award className="text-yellow-400" size={20} />
    },
    {
      title: "SIH Finalist 2025 — Smart India Hackathon",
      time: "Dec 2025",
      desc: "Selected for the Grand Finale of Smart India Hackathon 2025, working on innovative solutions for national problems.",
      icon: <Award className="text-orange-400" size={20} />
    },
    {
      title: "Secure X Hackathon — Mentor",
      time: "Nov 2024",
      desc: "Guided the winning team of the hackathon; focused on app security patterns and UX polish.",
      icon: <Briefcase className="text-blue-400" size={20} />
    },
    {
      title: "HackRx — Document LLM System",
      time: "Jul 2025",
      desc: "Developed a FastAPI app with embeddings + ChromaDB for clause retrieval and intelligent decisions.",
      icon: <CodeIcon className="text-purple-400" size={20} />
    },
    {
      title: "Unfold 2024 — AI Chatbot",
      time: "Dec 2024",
      desc: "Built a context-aware AI chatbot using RAG pipeline for Bulliverse gamers.",
      icon: <BrainIcon className="text-green-400" size={20} />
    }
  ]

  // Helper icons
  function CodeIcon({ className, size }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  }

  function BrainIcon({ className, size }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
  }

  return (
    <section id="experience" className={`section bg-navy-900 relative ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experience & <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-neon-purple to-transparent opacity-30 rounded-full md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`glass-card p-6 relative ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold text-primary-300 mb-2">
                      {item.time}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                    {/* Arrow/connector */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-navy-900 border-t border-r border-white/10 rotate-45 ${idx % 2 === 0
                      ? "-left-2 rotate-[225deg]"
                      : "-right-2 rotate-[45deg]"
                      }`}></div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full bg-navy-900 border-4 border-navy-800 shadow-glow z-10">
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-neon-purple">
                    <div className="bg-navy-900 p-1.5 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
