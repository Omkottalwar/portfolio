import React from 'react';

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-eyebrow">
          FULL STACK DEVELOPER (MERN) · AI & ML ENGINEERING STUDENT
        </div>

        <h1 className="hero-title">
          OM GANESH <span className="accent">KOTTALWAR</span>
        </h1>

        <p className="hero-bio">
          Results-driven Full Stack Developer specialising in the MERN stack (MongoDB, Express.js, React.js, Node.js) with 6 live deployed applications and an internship at Renasofttech Pvt. Ltd. (Feb–Aug 2026). Pursuing B.E. in AI & ML at ISBM College of Engineering, Pune.
        </p>

        <div className="hero-meta-badges">
          <span className="meta-badge">📍 Pune</span>
          <span className="meta-badge">💼 Renasofttech Pvt. Ltd. (Intern)</span>
          <span className="meta-badge">🎓 B.E. in AI & ML</span>
          <span className="meta-badge">🚀 6 Live Apps Deployed</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRightIcon />
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

          <a href="/resume.pdf" download="Om_Ganesh_Kottalwar_Resume.pdf" className="btn-link">
            <DownloadIcon /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
