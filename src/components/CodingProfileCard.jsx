import React from 'react';

export default function CodingProfileCard({ category, items }) {
  return (
    <div className="profile-category">
      <h3 className="category-title">{category}</h3>
      <div className="profile-grid">
        {items.map((item, index) => (
          <div key={index} className="profile-card">
            <div className="profile-card-header">
              <span className="profile-icon">{item.icon}</span>
              <div className="profile-title-group">
                <h4 className="profile-title">{item.title}</h4>
                {item.role && <span className="profile-role">{item.role}</span>}
                {item.platform && <span className="profile-platform">{item.platform}</span>}
              </div>
            </div>
            
            <p className="profile-description">{item.description}</p>
            
            {item.stats && (
              <div className="profile-stats">
                <span className="stat-tag">📊 {item.stats}</span>
              </div>
            )}
            
            {item.achievements && (
              <div className="profile-achievements">
                {item.achievements.map((ach, i) => (
                  <span key={i} className="achievement-tag">✓ {ach}</span>
                ))}
              </div>
            )}
            
            {item.period && (
              <div className="profile-period">
                <span className="period-badge">📅 {item.period}</span>
              </div>
            )}
            
            {item.profileUrl && (
              <a 
                href={item.profileUrl} 
                target="_blank" 
                rel="noreferrer"
                className="profile-link-btn"
              >
                View Profile <span className="arrow">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}