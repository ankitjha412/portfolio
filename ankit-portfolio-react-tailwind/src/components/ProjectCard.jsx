// // import React from 'react'
// // import { motion } from 'framer-motion'

// // export default function ProjectCard({ project, idx }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.2 }}
// //       transition={{ duration: 0.5, delay: idx * 0.05 }}
// //       className="card p-5 flex flex-col"
// //     >
// //       <div className="aspect-video rounded-xl bg-neutral-800/60 border border-white/10 mb-4" />
// //       <h4 className="text-xl font-semibold">{project.title}</h4>
// //       <p className="mt-2 text-neutral-300">{project.description}</p>
// //       <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
// //         {project.tech.map(t => (
// //           <span key={t} className="px-2 py-1 rounded-full border border-white/10">{t}</span>
// //         ))}
// //       </div>
// //       <div className="mt-4 flex gap-3">
// //         <a href={project.live} className="px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700">Live</a>
// //         <a href={project.code} className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5">Code</a>
// //       </div>
// //     </motion.div>
// //   )
// // }






// // import React, { useEffect, useState } from "react"
// // import ProjectCard from "./ProjectCard"

// // export default function Projects() {
// //   const [repos, setRepos] = useState([])

// //   useEffect(() => {
// //     fetch("https://api.github.com/users/ankitjha412/repos?sort=updated&per_page=6")
// //       .then(res => res.json())
// //       .then(data => setRepos(data))
// //       .catch(err => console.error("Error fetching repos:", err))
// //   }, [])

// //   return (
// //     <section id="projects" className="section max-w-6xl mx-auto px-4">
// //       <h2 className="text-3xl font-bold mb-8">Projects</h2>
// //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {repos.map((repo, idx) => (
// //           <ProjectCard
// //             key={repo.id}
// //             idx={idx}
// //             project={{
// //               title: repo.name,
// //               description: repo.description || "No description available",
// //               tech: [repo.language || "Other"],
// //               live: repo.homepage || repo.html_url,
// //               code: repo.html_url,
// //             }}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }


// import React from "react"
// import { motion } from "framer-motion"

// export default function ProjectCard({ project, idx }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, delay: idx * 0.05 }}
//       className="card p-5 flex flex-col bg-neutral-900/50 border border-white/10 rounded-xl"
//     >
//       {/* Thumbnail placeholder */}
//       <div className="aspect-video rounded-xl bg-neutral-800/60 border border-white/10 mb-4 flex items-center justify-center text-neutral-500">
//         <span className="text-xs">Preview</span>
//       </div>

//       <h4 className="text-xl font-semibold">{project.title}</h4>
//       <p className="mt-2 text-neutral-300">{project.description}</p>

//       {/* Tech badges */}
//       <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
//         {project.tech.map((t, i) => (
//           <span key={i} className="px-2 py-1 rounded-full border border-white/10">
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* Links */}
//       <div className="mt-4 flex gap-3">
//         {project.live && (
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 transition"
//           >
//             Live
//           </a>
//         )}
//         <a
//           href={project.code}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
//         >
//           Code
//         </a>
//       </div>
//     </motion.div>
//   )
// }


import React from "react"
import { motion } from "framer-motion"

export default function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="card p-5 flex flex-col bg-neutral-900/50 border border-white/10 rounded-xl"
    >
      {/* Live Preview or Fallback */}
      <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4">
        {project.live ? (
          <iframe
            src={project.live}
            title={`${project.title} preview`}
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs bg-neutral-800/60">
            No preview available
          </div>
        )}
      </div>

      {/* Project Info */}
      <h4 className="text-xl font-semibold">{project.title}</h4>
      <p className="mt-2 text-neutral-300">{project.description}</p>

      {/* Tech badges */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
        {project.tech.map((t, i) => (
          <span key={i} className="px-2 py-1 rounded-full border border-white/10">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 transition"
          >
            Live
          </a>
        )}
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
        >
          Code
        </a>
      </div>
    </motion.div>
  )
}
