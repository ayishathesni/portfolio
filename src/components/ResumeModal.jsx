import React, { useRef } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalDetails, skills, experiences, projects, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const resumePrintRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContent = resumePrintRef.current;
    const windowPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    windowPrint.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalDetails.name} - Resume</title>
          <style>
            body { font-family: 'Inter', sans-serif; color: #111; line-height: 1.5; padding: 30px; }
            h1 { font-size: 24px; margin-bottom: 2px; text-transform: uppercase; }
            .subtitle { font-size: 14px; font-weight: bold; color: #444; margin-bottom: 12px; }
            .contact-info { font-size: 12px; margin-bottom: 16px; border-bottom: 2px solid #222; padding-bottom: 8px; }
            .section-heading { font-size: 14px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #ccc; margin-top: 16px; margin-bottom: 8px; padding-bottom: 2px; }
            ul { margin-top: 4px; padding-left: 20px; }
            li { margin-bottom: 4px; font-size: 12px; }
            .job-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 13px; }
            .job-sub { font-style: italic; font-size: 12px; margin-bottom: 4px; color: #555; }
            .skill-group { font-size: 12px; margin-bottom: 4px; }
            .bold { font-weight: bold; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    windowPrint.document.close();
    windowPrint.focus();
    setTimeout(() => {
      windowPrint.print();
      windowPrint.close();
    }, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '24px',
          padding: '1.5rem',
          position: 'relative',
          background: 'var(--bg-secondary)',
        }}
      >
        {/* Header Action Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--card-border)',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Resume Viewer
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Ayisha Thesni Kozhikkoden - Software Engineer
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Paper */}
        <div
          ref={resumePrintRef}
          style={{
            background: '#ffffff',
            color: '#1e293b',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.02em', margin: 0 }}>
              {personalDetails.name}
            </h1>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0284c7', marginTop: '0.2rem' }}>
              Software Engineer
            </div>
            
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.6rem',
                fontSize: '0.82rem',
                color: '#475569',
              }}
            >
              <span>📞 {personalDetails.phone}</span>
              <span>✉️ {personalDetails.email}</span>
              <span>🔗 linkedin.com/in/ayisha-thesni-kozhikkoden-b26169298</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Profile Summary
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              {personalDetails.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Technical Skills
            </h2>
            <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div><strong style={{ color: '#0f172a' }}>Languages:</strong> Java, Python, JavaScript, C++, SQL</div>
              <div><strong style={{ color: '#0f172a' }}>Web Development:</strong> HTML, CSS, React.js, Node.js, Express.js</div>
              <div><strong style={{ color: '#0f172a' }}>Database:</strong> MongoDB</div>
              <div><strong style={{ color: '#0f172a' }}>Core Concepts:</strong> Data Structures & Algorithms, OOP, DBMS</div>
              <div><strong style={{ color: '#0f172a' }}>Tools & Technologies:</strong> Git, GitHub, Postman, Linux, Nginx, AWS (EC2), REST APIs, Figma</div>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.6rem' }}>
              Experience
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.3rem', fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <div style={{ fontStyle: 'italic', fontSize: '0.82rem', color: '#475569', marginBottom: '0.3rem' }}>
                  {exp.company} — {exp.location}
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', color: '#334155' }}>
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '0.2rem' }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.6rem' }}>
              Projects
            </h2>
            {projects.map((proj, pIdx) => (
              <div key={pIdx} style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.3rem', fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>
                  <span>{proj.title}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>Academic Project</span>
                </div>
                <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1.2rem', fontSize: '0.82rem', color: '#334155' }}>
                  {proj.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '0.2rem' }}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Education */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div>
              <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
                Certifications
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', color: '#334155' }}>
                {certifications.map((c, cIdx) => (
                  <li key={cIdx} style={{ marginBottom: '0.2rem' }}>{c.title} – {c.issuer}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
                Education
              </h2>
              <div style={{ fontSize: '0.82rem', color: '#334155' }}>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{education.degree}</div>
                <div>{education.institution} ({education.period})</div>
                <div style={{ fontWeight: 700, color: '#0284c7' }}>CGPA: {education.cgpa}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
