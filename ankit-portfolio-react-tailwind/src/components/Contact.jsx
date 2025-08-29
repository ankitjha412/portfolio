import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-3 text-neutral-300">Let’s build something together.</p>
        <div className="mt-6 card p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <a href="mailto:jhaankit499@gmail.com" className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">Email</a>
            <a href="https://github.com/ankitjha412" className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">GitHub</a>
            <a href="https://www.linkedin.com/in/ankit-jha-b44435259" className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">LinkedIn</a>
          </div>
          <form className="mt-6 grid gap-3">
            <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 outline-none" />
            <input placeholder="Your email" className="px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 outline-none" />
            <textarea placeholder="Your message" rows="4" className="px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 outline-none" />
            <button className="px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 w-max">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
