import React from 'react'
import { FaLaptopCode, FaUsers, FaFileAlt, FaCompass, FaChalkboardTeacher, FaNetworkWired } from 'react-icons/fa'
import './Activities.css'

const Activities = () => {
  const activities = [
    {
      icon: <FaLaptopCode />,
      title: 'Formations Techniques',
      description: 'Développement technique, programmation, outils digitaux et soft skills pour renforcer vos compétences techniques.',
      color: 'blue'
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Conférences & Panels',
      description: 'Interventions de professionnels et anciens étudiants pour présenter les filières, métiers et opportunités de carrière.',
      color: 'cyan'
    },
    {
      icon: <FaFileAlt />,
      title: 'Ateliers CV & LinkedIn',
      description: 'Optimisation de CV, création de profil LinkedIn, personal branding et stratégie de networking professionnel.',
      color: 'red'
    },
    {
      icon: <FaCompass />,
      title: 'Orientation & Coaching',
      description: 'Sessions d\'orientation et de coaching personnalisé pour clarifier votre projet professionnel.',
      color: 'purple'
    },
    {
      icon: <FaUsers />,
      title: 'Préparation aux Entretiens',
      description: 'Simulations d\'entretiens, techniques de communication professionnelle et conseils pour réussir vos recrutements.',
      color: 'green'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Networking',
      description: 'Événements de networking pour créer des connexions professionnelles durables avec le monde de l\'entreprise.',
      color: 'orange'
    }
  ]

  return (
    <section id="activities" className="activities section">
      <div className="container">
        <h2 className="section-title">Nos Activités</h2>
        <p className="section-subtitle">
          Des programmes variés pour votre développement professionnel
        </p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className={`activity-card ${activity.color}`}>
              <div className="activity-icon">
                {activity.icon}
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <div className="activity-hover">
                <span>En savoir plus →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities