import React from 'react'

export default function Experience() {
  const items = [
    {
      title: "Hack SRM 6.0 — AI/ML Winner",
      time: "Feb 2025",
      desc: "Led the team to win in AI/ML; built an ML-driven solution and presented outcomes."
    },
    {
      title: "Secure X Hackathon — Mentor of Winning Team",
      time: "Nov 2024",
      desc: "Guided the team to victory; focused on app security and UX polish."
    },
    
    {
      title: "HackRx — Document-based LLM Decision System",
      time: "Jul 2025",
      desc: "FastAPI app with embeddings + ChromaDB for clause retrieval and decisions."
    }
    , 
    {
      title: "Unfold 2024",
      time: "Dec 2024",
      desc: "build an AI chatbot which gave responese to the gamers build for the Bulliverse"
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card p-5">
              <div className="text-sm text-neutral-400">{it.time}</div>
              <div className="text-lg font-semibold mt-1">{it.title}</div>
              <p className="mt-2 text-neutral-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
