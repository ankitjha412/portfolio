import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle submitting
    console.log(formData)
  }

  return (
    <section id="contact" className="section bg-navy-900/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">get in <span className="text-gradient">touch</span></h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Have a project in mind or want to collaborate on an AI experiment?
            My inbox is always open. Let's build the future together.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Me</p>
                <a href="mailto:jhaankit499@gmail.com" className="text-lg font-medium text-white hover:text-primary-400 transition-colors">jhaankit499@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium text-white">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="glass-card p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                className="input-field peer bg-white/5 border-white/10 focus:border-primary-500 pt-6 pb-2 pl-4"
                required
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-400">Your Name</label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="input-field peer bg-white/5 border-white/10 focus:border-primary-500 pt-6 pb-2 pl-4"
                required
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-400">Your Email</label>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                rows="4"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                className="input-field peer bg-white/5 border-white/10 focus:border-primary-500 pt-6 pb-2 pl-4 resize-none"
                required
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-400">Your Message</label>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
              Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
