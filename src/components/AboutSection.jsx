import React from 'react';

export default function AboutSection() {
  const cards = [
    {
      tag: 'WORK EXPERIENCE',
      title: 'Full Stack Developer Intern',
      company: 'Renasofttech Pvt. Ltd. (Feb – Aug 2026)',
      desc: 'Building full-stack features with React.js, Node.js, Express, and MongoDB in an Agile environment with daily stand-ups, sprint planning, REST API integration, and Vercel deployments.',
    },
    {
      tag: 'ACADEMIC BACKGROUND',
      title: 'B.E. in AI & ML',
      company: 'ISBM College of Engineering, Pune (2023 – 2027)',
      desc: 'Pursuing B.E. in Artificial Intelligence & Machine Learning. Strong foundation in data structures, algorithms, and core computing fundamentals alongside practical software engineering.',
    },
    {
      tag: 'PRODUCTION WORK',
      title: '6 Live Deployed Applications',
      company: 'ProConnect · Wanderlust · StockSim · Nomichi & more',
      desc: 'Designed and deployed end-to-end full-stack applications with Redux Toolkit (~35% less re-renders), Next.js SSR (<2s load times), Multer + Cloudinary, and 99.5% uptime on Vercel & Render.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">01 — ABOUT</div>
          <h2 className="section-title">Engineer by trade, AI/ML student by degree.</h2>
        </div>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '850px', lineHeight: '1.7', marginBottom: '32px' }}>
          Results-driven Full Stack Developer specialising in the MERN stack (MongoDB, Express.js, React.js, Node.js) with 6 live deployed applications and an internship at Renasofttech Pvt. Ltd. (Feb–Aug 2026). Pursuing B.E. in AI & ML at ISBM College of Engineering, Pune. Proficient in Redux Toolkit, Next.js, JWT auth, REST API design, Agile workflows, and cloud deployment on Vercel and Render.
        </p>

        <div className="about-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="about-card">
              <div className="about-card-tag">{card.tag}</div>
              <h3 className="about-card-title">{card.title}</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-orange)', marginBottom: '8px' }}>
                {card.company}
              </div>
              <p className="about-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
