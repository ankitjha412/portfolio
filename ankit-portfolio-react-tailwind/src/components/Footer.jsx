// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="py-12 border-t border-white/10">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Ankit Jha. All rights reserved.</p>
//         <div className="text-xs text-neutral-500">Built with React, Tailwind & Framer Motion</div>
//       </div>
//     </footer>
//   )
// }




import React from "react"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - copyright */}
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Ankit Jha. All rights reserved.
        </p>

        {/* Right - built with */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          <div className="flex gap-4">
            {/* Social icons */}
            <a
              href="https://github.com/ankitjha412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-jha-b44435259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="https://www.instagram.com/jhaankit499/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
          </div>
          <div className="text-xs text-neutral-500">
            Built with React, Tailwind & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}
