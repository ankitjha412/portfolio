import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/ankitjha412/repos?sort=updated&per_page=20")
      .then(res => res.json())
      .then(data => {
        // Only keep repos that have a homepage (deployed projects)
        const frontendRepos = data.filter(repo => repo.homepage)
        setRepos(frontendRepos.slice(0, 6)) // take latest 6 only
      })
      .catch(err => console.error("Error fetching repos:", err))
  }, [])

  return (
    <section id="projects" className="section bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of my recent work, side projects, and open source contributions.
          </motion.p>
        </div>

        {repos.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, idx) => (
              <ProjectCard
                key={repo.id}
                idx={idx}
                project={{
                  title: repo.name,
                  description: repo.description,
                  tech: [repo.language || "Code"],
                  live: repo.homepage,
                  code: repo.html_url,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
