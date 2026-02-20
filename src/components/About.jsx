import React from 'react'
import { FaBullseye, FaEye, FaHandshake, FaLightbulb } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaBullseye />,
      title: 'Excellence',
      description: 'Viser l\'excellence dans toutes nos actions et formations'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Favoriser le travail d\'équipe et le partage de connaissances'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Encourager la créativité et l\'esprit d\'initiative'
    },
    {
      icon: <FaEye />,
      title: 'Intégrité',
      description: 'Agir avec professionnalisme et éthique'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">À Propos de Nous</h2>
        <p className="section-subtitle">Découvrez notre mission et notre vision</p>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-card mission">
              <div className="card-icon">
                <FaBullseye />
              </div>
              <h3>Notre Mission</h3>
              <p>
                Accompagner les étudiants de l'ENSA Tanger dans le développement de leurs 
                compétences académiques, professionnelles et personnelles afin de mieux 
                préparer leur insertion dans le monde du travail. Nous travaillons à réduire 
                l'écart entre la formation académique et les exigences du marché de l'emploi.
              </p>
            </div>

            <div className="about-card vision">
              <div className="card-icon">
                <FaEye />
              </div>
              <h3>Notre Vision</h3>
              <p>
                Créer un environnement dynamique qui encourage l'apprentissage continu, 
                le leadership, l'esprit d'initiative et la collaboration. Notre objectif 
                est de former des ingénieurs compétents, confiants et prêts à réussir 
                dans leurs futures carrières.
              </p>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-bg"></div>
              <div className="floating-card card-1">
                <span className="number">500+</span>
                <span>Étudiants</span>
              </div>
              <div className="floating-card card-2">
                <span className="number">50+</span>
                <span>Événements</span>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Nos Valeurs</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About