import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Team.css'

const Team = () => {
  const team = [
    {
      name: 'Président',
      role: 'Président du Club',
      description: 'Direction stratégique et coordination des activités',
      color: 'blue'
    },
    {
      name: 'Vice-Président',
      role: 'Vice-Président',
      description: 'Support à la présidence et gestion des projets',
      color: 'cyan'
    },
    {
      name: 'Secrétaire Général',
      role: 'Secrétaire Général',
      description: 'Administration et organisation interne',
      color: 'purple'
    },
    {
      name: 'Trésorier',
      role: 'Trésorier',
      description: 'Gestion financière et partenariats',
      color: 'green'
    },
    {
      name: 'Responsable Formation',
      role: 'Responsable Formation',
      description: 'Coordination des ateliers et formations',
      color: 'orange'
    },
    {
      name: 'Responsable Com',
      role: 'Responsable Communication',
      description: 'Marketing digital et relations publiques',
      color: 'red'
    }
  ]

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Notre Équipe</h2>
        <p className="section-subtitle">
          Des étudiants passionnés à votre service
        </p>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className={`team-card ${member.color}`}>
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  <span>{member.name.split(' ')[0][0]}</span>
                </div>
                <div className="avatar-ring"></div>
              </div>
              <div className="team-info">
                <h3>{member.role}</h3>
                <p className="team-description">{member.description}</p>
                <div className="team-socials">
                  <a href="#" className="social-btn"><FaLinkedin /></a>
                  <a href="#" className="social-btn"><FaEnvelope /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team">
          <h3>Rejoignez Notre Équipe !</h3>
          <p>Vous souhaitez contribuer au développement professionnel des étudiants ?</p>
          <a href="#contact" className="join-btn">Devenir Membre</a>
        </div>
      </div>
    </section>
  )
}

export default Team