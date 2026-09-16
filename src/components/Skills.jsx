import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Braces,
  Cpu,
  Database,
  Atom,
  Server,
  Layers,
  Layout,
  Webhook,
  HardDrive,
  GitBranch,
  Box,
  Zap,
  Cloud,
  Activity,
  GitPullRequest,
  Send,
  Brain,
  Eye,
  Figma
} from 'lucide-react';
import { skills } from '../data/portfolioData';

// Map icon string names to actual Lucide components
const iconMap = {
  Code2,
  Terminal,
  Braces,
  Cpu,
  Database,
  Atom,
  Server,
  Layers,
  Layout,
  Webhook,
  HardDrive,
  GitBranch,
  Box,
  Zap,
  Cloud,
  Activity,
  GitPullRequest,
  Send,
  Brain,
  Eye,
  Figma
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'webDev', label: 'Web Development' },
    { id: 'database', label: 'Databases & Cloud' },
    { id: 'coreConcepts', label: 'Core CS' },
    { id: 'toolsAndTech', label: 'Tools & AI/ML' },
  ];

  const getCategorySkills = () => {
    if (activeTab === 'languages') return skills.languages;
    if (activeTab === 'webDev') return skills.webDev;
    if (activeTab === 'database') return [...skills.database, ...skills.toolsAndTech.filter(s => s.name.includes('AWS') || s.name.includes('Nginx'))];
    if (activeTab === 'coreConcepts') return skills.coreConcepts;
    if (activeTab === 'toolsAndTech') return skills.toolsAndTech;
    
    // Default 'all'
    return [
      ...skills.languages,
      ...skills.webDev,
      ...skills.database,
      ...skills.coreConcepts,
      ...skills.toolsAndTech
    ];
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TECHNICAL EXPERTISE</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Proficiencies</span></h2>
          <p className="section-description">
            Core programming languages, web technologies, backend systems, database query optimization, and AI tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`btn ${activeTab === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.88rem',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {getCategorySkills().map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Icon & Title Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {skill.name}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Proficiency Meter</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Level</span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{skill.level}%</span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '7px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        borderRadius: '10px',
                        background: 'var(--gradient-main)',
                        transition: 'width 1s ease-in-out',
                        boxShadow: '0 0 10px rgba(0, 242, 254, 0.5)',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
