import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, FileText, ArrowRight, Sparkles, CheckCircle2, Code2, Server, Brain } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation effect
  useEffect(() => {
    const currentFullText = personalDetails.subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % personalDetails.subtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, subtitleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Content */}
          <div>
            {/* Status Pill Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-cyan" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block',
                    marginRight: '0.4rem',
                  }}
                />
                {personalDetails.status}
              </span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1rem',
                letterSpacing: '-0.03em',
              }}
              className="hero-title"
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalDetails.name}</span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div
              style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--accent-cyan)',
                marginBottom: '1.5rem',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              className="hero-subtitle"
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.3rem',
                  background: 'var(--accent-cyan)',
                  animation: 'typingCursor 0.8s infinite',
                }}
              />
            </div>

            {/* Bio Paragraph */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              {personalDetails.bio}
            </p>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <FileText size={18} />
                <span>Resume</span>
              </button>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* High Impact Highlights Row */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--card-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Server size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>MERN Stack</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Scalable Architecture</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: 'var(--accent-purple)',
                  }}
                >
                  <Brain size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Python & AI</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>TensorFlow & OpenCV</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <Code2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>AWS & PM2</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>High Availability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Glowing Backdrop Ring */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'var(--gradient-main)',
                filter: 'blur(50px)',
                opacity: 0.35,
                zIndex: 0,
              }}
            />

            {/* Card Frame */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                borderRadius: '24px',
                maxWidth: '340px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              {/* Profile Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '340px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Ayisha Thesni Kozhikkoden"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease',
                  }}
                  onError={(e) => {
                    // Fallback to avatar if image fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />

                {/* Fallback Graphic */}
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'var(--bg-tertiary)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <Code2 size={60} color="var(--accent-cyan)" />
                  <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Ayisha Thesni</span>
                </div>

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Calicut, India</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Degree</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>B.Tech CSE</div>
                  </div>
                </div>
              </div>

              {/* Stat Cards under Profile */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>1,000+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Concurrent Users</div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-purple)' }}>+15%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Model Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-title {
            font-size: 2.75rem !important;
          }
          .hero-subtitle {
            justify-content: center;
          }
          p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
