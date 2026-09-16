import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalDetails.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true") {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        showToast('Your message has been sent directly to ' + personalDetails.email + '!');
        
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (err) {}
      } else {
        throw new Error('Endpoint error');
      }
    } catch (error) {
      setIsSubmitting(false);
      // Fallback: Open mailto link directly in user's email client
      const mailtoLink = `mailto:${personalDetails.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      showToast('Opening email application to send to ' + personalDetails.email);
    }
  };

  const handleDirectEmailApp = () => {
    const subject = encodeURIComponent(formData.subject || 'Software Engineer Portfolio Contact');
    const body = encodeURIComponent(formData.message ? `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}` : 'Hello Ayisha,\n\nI visited your software engineer portfolio website and would like to connect with you.');
    window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LET'S CONNECT</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-description">
            Messages submitted here deliver directly to <strong style={{ wordBreak: 'break-all' }}>{personalDetails.email}</strong>.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Quick Info Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="glass-card contact-info-card contact-email-card">
              <div className="contact-info-left">
                <div className="contact-icon-box icon-cyan">
                  <Mail size={22} />
                </div>
                <div className="contact-text-box">
                  <div className="contact-label">Direct Email</div>
                  <div className="contact-val email-val">{personalDetails.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary copy-btn"
                title="Copy Email"
              >
                {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                <span className="copy-btn-text">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <a
              href={`tel:${personalDetails.phone}`}
              className="glass-card contact-info-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="contact-info-left">
                <div className="contact-icon-box icon-purple">
                  <Phone size={22} />
                </div>
                <div className="contact-text-box">
                  <div className="contact-label">Phone / WhatsApp</div>
                  <div className="contact-val">{personalDetails.phone}</div>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-info-left">
                <div className="contact-icon-box icon-emerald">
                  <MapPin size={22} />
                </div>
                <div className="contact-text-box">
                  <div className="contact-label">Location</div>
                  <div className="contact-val">{personalDetails.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="glass-card contact-social-card">
              <div className="social-title">Professional Networks</div>
              <div className="social-buttons-row">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary social-btn"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary social-btn"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-heading">
              Send a Direct Email Message
            </h3>
            <p className="form-subheading">
              Your message will be delivered directly to <span className="email-code">{personalDetails.email}</span>.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Position Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message details here..."
                  className="form-input form-textarea"
                />
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDirectEmailApp}
                  className="btn btn-outline mailto-btn"
                >
                  <ExternalLink size={16} />
                  <span>Open Email App</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* Contact Section Responsive Styling */
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-info-card {
          padding: 1.25rem 1.5rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .contact-info-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-cyan {
          background: rgba(0, 242, 254, 0.12);
          color: var(--accent-cyan);
        }

        .icon-purple {
          background: rgba(168, 85, 247, 0.12);
          color: var(--accent-purple);
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
        }

        .contact-text-box {
          min-width: 0;
        }

        .contact-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .contact-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .email-val {
          word-break: break-all;
        }

        .copy-btn {
          padding: 0.5rem 0.85rem;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .copy-btn-text {
          display: inline;
        }

        .contact-social-card {
          padding: 1.5rem;
          border-radius: 18px;
          text-align: center;
        }

        .social-title {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .social-buttons-row {
          display: flex;
          justify-content: center;
          gap: 0.85rem;
        }

        .social-btn {
          flex: 1;
          justify-content: center;
        }

        /* Contact Form Card */
        .contact-form-card {
          padding: clamp(1.25rem, 3vw, 2.25rem);
          border-radius: 24px;
        }

        .form-heading {
          font-size: clamp(1.2rem, 3vw, 1.4rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .form-subheading {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          word-break: break-word;
        }

        .email-code {
          font-family: 'Fira Code', monospace;
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          padding: 0.15rem 0.4rem;
          border-radius: 6px;
          word-break: break-all;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .submit-btn, .mailto-btn {
          width: 100%;
          justify-content: center;
        }

        /* MEDIA QUERIES */
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-email-card {
            flex-direction: column;
            align-items: stretch !important;
            text-align: center;
          }

          .contact-info-left {
            flex-direction: column;
            text-align: center;
          }

          .contact-val {
            white-space: normal !important;
            word-break: break-all;
          }

          .social-buttons-row {
            flex-direction: column;
          }

          .copy-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
