import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Events.css'

const Events = () => {
  const events = [
    {
      title: 'Workshop CV & LinkedIn',
      date: '25 Janvier 2025',
      time: '14:00 - 17:00',
      location: 'Salle A1, ENSA Tanger',
      description: 'Apprenez à optimiser votre CV et créer un profil LinkedIn professionnel qui attire les recruteurs.',
      status: 'upcoming',
      image: '📝'
    },
    {
      title: 'Conférence : Métiers de l\'Ingénieur',
      date: '10 Février 2025',
      time: '10:00 - 12:00',
      location: 'Amphithéâtre Principal',
      description: 'Découvrez les différentes opportunités de carrière avec des professionnels du secteur.',
      status: 'upcoming',
      image: '🎤'
    },
    {
      title: 'Hackathon Career Boost',
      date: '15-16 Mars 2025',
      time: '48h non-stop',
      location: 'ENSA Tanger',
      description: 'Un week-end intensif pour développer vos compétences et rencontrer des entreprises.',
      status: 'upcoming',
      image: '💻'
    }
  ]

  const pastEvents = [
    { title: 'Journée Portes Ouvertes', participants: '200+', date: 'Décembre 2024' },
    { title: 'Formation Python Avancé', participants: '80+', date: 'Novembre 2024' },
    { title: 'Session Mock Interviews', participants: '50+', date: 'Octobre 2024' }
  ]

  return (
    <section id="events" className="events section">
      <div className="container">
        <h2 className="section-title">Nos Événements</h2>
        <p className="section-subtitle">
          Participez à nos événements et boostez votre carrière
        </p>

        <div className="events-container">
          <div className="upcoming-events">
            <h3 className="events-section-title">📅 Événements à Venir</h3>
            <div className="events-list">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-image">
                    <span>{event.image}</span>
                  </div>
                  <div className="event-content">
                    <div className="event-header">
                      <h4>{event.title}</h4>
                      <span className="event-badge">{event.status === 'upcoming' ? 'À venir' : 'Passé'}</span>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <div className="event-meta">
                      <span><FaCalendarAlt /> {event.date}</span>
                      <span><FaClock /> {event.time}</span>
                      <span><FaMapMarkerAlt /> {event.location}</span>
                    </div>
                    <button className="event-btn">S'inscrire</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="past-events">
            <h3 className="events-section-title">🏆 Événements Passés</h3>
            <div className="past-events-list">
              {pastEvents.map((event, index) => (
                <div key={index} className="past-event-card">
                  <div className="past-event-info">
                    <h4>{event.title}</h4>
                    <span className="past-event-date">{event.date}</span>
                  </div>
                  <div className="past-event-stats">
                    <span className="participants">{event.participants}</span>
                    <span>participants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events