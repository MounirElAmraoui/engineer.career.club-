import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    { name: 'Activités', href: '#activities' },
    { name: 'Événements', href: '#events' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <div className="logo-circle">
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <div className="logo-text">
            <span className="logo-main">Engineer Career Club</span>
            <span className="logo-sub">ENSA Tanger</span>
          </div>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>
            Rejoindre
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar