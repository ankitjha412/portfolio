import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold gradient-text">Ankit • Portfolio</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-neutral-300 hover:text-white">{n.label}</a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded-lg border border-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="block p-3 rounded-lg bg-neutral-900/60 border border-white/10">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
