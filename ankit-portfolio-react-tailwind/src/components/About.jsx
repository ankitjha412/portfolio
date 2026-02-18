import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Brain, Wrench } from 'lucide-react'

export default function About() {
  const skillsConfig = [
    {
      category: "Frontend",
      icon: <Code className="text-blue-400" />,
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion']
    },
    {
      category: "Backend",
      icon: <Server className="text-green-400" />,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Supabase', 'WebSockets']
    },
    {
      category: "AI / ML",
      icon: <Brain className="text-purple-400" />,
      skills: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain', 'RAG']
    },
    {
      category: "Tools",
      icon: <Wrench className="text-orange-400" />,
      skills: ['Git', 'Docker', 'Figma', 'Postman', 'Vercel']
    }
  ]

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bridging the gap between <br /> <span className="text-gradient">Design & Intelligence</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I’m a passionate Full Stack Developer with a deep interest in Artificial Intelligence.
            My journey involves building high-performance web applications and integrating them with
            cutting-edge AI models to create smarter user experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether it's optimizing frontend performance or architecting scalable backend systems,
            I love solving complex problems with clean and efficient code.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <h3 className="text-4xl font-bold text-white">5+</h3>
              <p className="text-gray-500">Hackathon Wins</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-gray-500">Live Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skillsConfig.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-navy-800 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-primary-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
