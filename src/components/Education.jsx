import React from 'react';
import { GraduationCap, Award, BookOpen, Cpu, BarChart3, Trophy, Calendar, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function Education() {
  const certIconMap = {
    Cpu: Cpu,
    BarChart3: BarChart3,
    Trophy: Trophy,
  };

  return (
    <section id="education" className="section-padding" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">ACADEMIC FOUNDATION & CREDENTIALS</span>
          <h2 className="section-title">Education & <span className="gradient-text">Certifications</span></h2>
          <p className="section-description">
            Strong computer science foundation backed by practical workshops at premier institutes like NIT Varanasi and NIT Calicut.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="edu-grid"
        >
          {/* Left Column: Degree & Academic Performance */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '20px',
              height: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                }}
              >
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.2rem' }}>Degree Completed</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {education.degree}
                </h3>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                {education.institution}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                {education.location}
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--card-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Graduation Year</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{education.period}</div>
                </div>

                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>CGPA Score</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>{education.cgpa}</div>
                </div>
              </div>
            </div>

            {/* Coursework Tags */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={16} color="var(--accent-cyan)" />
                <span>Core Computer Science Coursework:</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {education.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Workshops List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={22} color="var(--accent-purple)" />
              <span>Workshops & Competitions</span>
            </h3>

            {certifications.map((cert, index) => {
              const IconComp = certIconMap[cert.icon] || Award;
              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: index === 0 ? 'rgba(168, 85, 247, 0.12)' : index === 1 ? 'rgba(0, 242, 254, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: index === 0 ? 'var(--accent-purple)' : index === 1 ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cert.title}
                      </h4>
                      <span className="badge badge-purple" style={{ fontSize: '0.72rem' }}>{cert.type}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
