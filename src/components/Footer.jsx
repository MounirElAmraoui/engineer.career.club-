import React from 'react'
import { FaHeart, FaLinkedin, FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>ECC</span>
            </div>
            <h3>Engineer Career Club</h3>
            <p>ENSA Tanger</p>
            <p className="footer-description">
              Accompagner les étudiants dans leur développement professionnel 
              et réduire le gap entre la formation académique et le marché du travail.
            </p>
          </div>

          <div className="footer-links">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#activities">Activités</a></li>
              <li><a href="#events">Événements</a></li>
              <li><a href="#team">Équipe</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Nos Activités</h4>
            <ul>
              <li><a href="#activities">Formations Techniques</a></li>
              <li><a href="#activities">Conférences</a></li>
              <li><a href="#activities">Ateliers CV/LinkedIn</a></li>
              <li><a href="#activities">Orientation</a></li>
              <li><a href="#activities">Networking</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Recevez nos dernières actualités et événements</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Votre email" />
              <button type="submit">S'abonner</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Engineer Career Club - ENSA Tanger. Fait avec{' '}
            <FaHeart className="heart" /> à Tanger
          </p>
          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  )
}

export default Footer ;