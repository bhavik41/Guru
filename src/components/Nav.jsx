import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Logo from './Logo'
import Magnetic from './Magnetic'
import { contact } from '../data'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="topbar">
        <div className="topbar-inner">
          <span><Icon name="pin" size={13} /> Chandisar G.I.D.C., Palanpur, Gujarat</span>
          <div className="topbar-right">
            <a href={`mailto:${contact.emails[0]}`}><Icon name="mail" size={13} /> {contact.emails[0]}</a>
            <a href="tel:+912742283393"><Icon name="phone" size={13} /> (+91) 2742 283393</a>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            <span className="brand-mark"><Logo size={40} /></span>
            <span className="brand-text">GURU<em>INDUSTRIES</em></span>
          </a>

          <nav className={`main-nav ${open ? 'is-open' : ''}`}>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          <div className="nav-actions">
            <Magnetic strength={0.25}>
              <a className="btn btn-solid" href="#contact">Get a Quote <Icon name="arrow" size={15} /></a>
            </Magnetic>
            <button className={`burger ${open ? 'is-open' : ''}`} aria-label="menu" onClick={() => setOpen((o) => !o)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
