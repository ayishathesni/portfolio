import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'rgba(9, 13, 22, 0.95)',
        borderTop: '1px solid var(--card-border)',
        padding: '3rem 0 2rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#090d16',
              }}
            >
              <Terminal size={18} strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              Ayisha <span className="gradient-text">Thesni</span>
            </span>
          </div>

          {/* Quick Footer Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#terminal" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terminal</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Education</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn btn-secondary"
            style={{ padding: '0.6rem', borderRadius: '50%' }}
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright & Subtext */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Ayisha Thesni Kozhikkoden. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Built with React, Vite & MERN Engineering principles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
