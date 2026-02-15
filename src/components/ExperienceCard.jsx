import React from 'react';

export default function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <div className="experience-card-inner">
        <div className="experience-header">
          <div className="company-logo">
            {experience.image ? (
              <img src={experience.image} alt={experience.company} />
            ) : (
              <div className="logo-placeholder">💼</div>
            )}
          </div>
          <div className="header-info">
            <h3 className="experience-title">{experience.title}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-period">{experience.period}</p>
          </div>
        </div>

        <div className="experience-content">
          <div className="responsibilities">
            <h4 className="section-subtitle">Responsibilities</h4>
            <ul className="responsibilities-list">
              {experience.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="achievements">
            <h4 className="section-subtitle">
              <span className="achievement-icon">🏆</span> Achievements
            </h4>
            <div className="achievements-grid">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <span className="achievement-text">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}