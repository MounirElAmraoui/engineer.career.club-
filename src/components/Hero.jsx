import React from 'react'
import { FaArrowDown, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🏫 ENSA Tanger</span>
          </div>
          
          <h1 className="hero-title">
            Engineer Career Club
            <span className="highlight">ENSA Tanger</span>
          </h1>
          
          <p className="hero-description">
            Votre passerelle vers l'excellence professionnelle. Nous accompagnons les étudiants 
            ingénieurs dans leur développement académique, professionnel et personnel pour 
            une insertion réussie dans le monde du travail.
          </p>
          
          <div className="hero-buttons">
            <a href="#activities" className="btn btn-primary">
              Découvrir nos activités
            </a>
            <a href="#contact" className="btn btn-secondary">
              Nous contacter
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Étudiants accompagnés</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Événements organisés</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Partenaires</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-showcase">
            <div className="main-logo">
              <div className="logo-ring ring-1"></div>
              <div className="logo-ring ring-2"></div>
              <div className="logo-ring ring-3"></div>
              <div className="logo-center">
                <span>ECC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-socials">
        <a href="#" className="social-link"><FaLinkedin /></a>
        <a href="#" className="social-link"><FaInstagram /></a>
        <a href="#" className="social-link"><FaEnvelope /></a>
      </div>

      <a href="#about" className="scroll-indicator">
        <FaArrowDown />
      </a>
    </section>
  )
}

export default Hero