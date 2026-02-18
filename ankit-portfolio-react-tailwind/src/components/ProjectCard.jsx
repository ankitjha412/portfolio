import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"

export default function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group glass-card overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neon"
    >
      {/* Top Gradient Banner / Preview */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-navy-900/50 group-hover:scale-110 transition-transform duration-500"></div>
        {/* Abstract shapes or preview placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

        <div className="absolute top-4 right-4 flex gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-primary-300">
              {t}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 p-2 bg-black/30 backdrop-blur-md rounded-lg border border-white/5">
          <Folder className="text-primary-400 w-6 h-6" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute -top-10 right-6 w-16 h-16 bg-primary-600/20 blur-2xl rounded-full group-hover:bg-primary-500/30 transition-colors duration-500"></div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description || "A fantastic project built with modern technologies. Check out the live demo to see it in action!"}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
