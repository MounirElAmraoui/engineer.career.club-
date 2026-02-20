import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebook, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé ! Nous vous répondrons bientôt.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contactez-Nous</h2>
        <p className="section-subtitle">
          Une question ? Un partenariat ? Écrivez-nous !
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Adresse</h4>
                <p>ENSA Tanger<br />Route Ziaten, Tanger, Maroc</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>contact@ecc-ensatanger.ma</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Téléphone</h4>
                <p>+212 5XX-XXXXXX</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Suivez-nous</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A76998943&keywords=engineer%20career%20club%20-%20ensat&origin=RICH_QUERY_SUGGESTION&position=0&sid=9Wa" className="social-icon"><FaLinkedin /></a>
                <a href="https://www.instagram.com/engineer.career.club/" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaFacebook /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
