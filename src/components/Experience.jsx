import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Brain, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CAREER MILESTONES</span>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-description">
            Hands-on software engineering internships focused on full-stack web applications, cloud deployment, and AI model optimization.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 50%, var(--accent-purple) 100%)',
              boxShadow: '0 0 12px var(--accent-cyan)',
            }}
            className="timeline-line"
          />

          {/* Experience Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '4.5rem',
                }}
                className="timeline-item"
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '17px',
                    top: '24px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: index === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                    border: '4px solid var(--bg-primary)',
                    boxShadow: index === 0 ? '0 0 15px var(--accent-cyan)' : '0 0 15px var(--accent-purple)',
                    zIndex: 2,
                  }}
                />

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: '18px',
                  }}
                >
                  {/* Card Header Row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--card-border)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <span className={`badge ${index === 0 ? 'badge-cyan' : 'badge-purple'}`}>
                          {exp.badge}
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.2rem',
                          color: 'var(--accent-cyan)',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Briefcase size={16} />
                          {exp.company}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '10px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--card-border)',
                      }}
                    >
                      <Calendar size={15} color="var(--accent-cyan)" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {exp.highlights.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.98rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={18}
                          color={index === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)'}
                          style={{ minWidth: '18px', marginTop: '3px' }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges Row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontFamily: 'Fira Code',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-line {
            left: 12px !important;
          }
          .timeline-item {
            padding-left: 2.2rem !important;
          }
          .timeline-item > div:first-child {
            left: 1px !important;
          }
        }
      `}</style>
    </section>
  );
}
