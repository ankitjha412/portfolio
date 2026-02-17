import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import resume from '../../assets/Ankit_resume.pdf'
import profilepic from '../assets/Ankit_profile1.jpeg'

export default function Hero() {
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/ankitjha412")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("Error fetching GitHub data:", err))
  }, [])

  return (
    <section className="section relative">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div>
          <p className="uppercase tracking-widest text-xs text-neutral-400">Hello, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            Ankit Jha
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Frontend Developer <span className="text-neutral-500">•</span> AI/ML Enthusiast
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 transition shadow-soft">View Projects</a>
            <a href={resume} className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5">Download Resume</a>
          </div>
        </motion.div>

        <motion.div className="card p-6">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
            <img src={profilepic} alt="profile pic" className="w-60 h-50 rounded-lg " />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-300">
            <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/10">
              <div className="text-2xl font-semibold">
                {githubData ? githubData.public_repos : "--"}
              </div>
              <div>Public Repos</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/10">
              <div className="text-2xl font-semibold">
                {githubData ? githubData.followers : "--"}
              </div>
              <div>Followers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
