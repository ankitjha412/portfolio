// import React from 'react'
// import ProjectCard from './ProjectCard.jsx'
// import { projects } from '../data/projects.js'

// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
//         <p className="mt-3 text-neutral-300">Highlighted work I’ve built and shipped.</p>
//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((p, i) => <ProjectCard key={p.title} project={p} idx={i} />)}
//         </div>
//       </div>
//     </section>
//   )
// }



// import React, { useEffect, useState } from "react"
// import ProjectCard from "./ProjectCard"

// export default function Projects() {
//   const [repos, setRepos] = useState([])

//   useEffect(() => {
//     fetch("https://api.github.com/users/ankitjha412/repos?sort=updated&per_page=6")
//       .then(res => res.json())
//       .then(data => setRepos(data))
//       .catch(err => console.error("Error fetching repos:", err))
//   }, [])

//   return (
//     <section id="projects" className="section max-w-6xl mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
//       <p className="mt-3 text-neutral-300">Highlighted work I’ve built and shipped.</p>

//       {repos.length === 0 ? (
//         <p className="mt-6 text-neutral-500">Loading projects...</p>
//       ) : (
//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {repos.map((repo, idx) => (
//             <ProjectCard
//               key={repo.id}
//               idx={idx}
//               project={{
//                 title: repo.name,
//                 description: repo.description || "No description available",
//                 tech: [repo.language || "Other"],
//                 live: repo.homepage || repo.html_url,
//                 code: repo.html_url,
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }



import React, { useEffect, useState } from "react"
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
    <section id="projects" className="section max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      <p className="mt-3 text-neutral-300">Highlighted work I’ve built and shipped.</p>

      {repos.length === 0 ? (
        <p className="mt-6 text-neutral-500">Loading projects...</p>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <ProjectCard
              key={repo.id}
              idx={idx}
              project={{
                title: repo.name,
                tech: [repo.language || "Other"],
                live: repo.homepage,  // ✅ only deployed projects here
                code: repo.html_url,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
