const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Renasofttech Private Limited',
      companyUrl: 'https://renasofttech.com/',
      location: 'Pune, MH',
      date: 'Feb – Aug 2026',
      bullets: [
        'Contributing to Aaplishala (https://www.aaplishala.com/) — a production-grade multi-tenant School Management System handling student records, attendance, and exam management.',
        'Building full-stack features with React.js, Node.js, Express, and MongoDB in an Agile team; sprint planning, daily stand-ups, and peer code reviews.',
        'Developing and integrating RESTful APIs; translating UI mockups into responsive, production-ready React components deployed on Vercel.',
      ],
      projectUrl: 'https://www.aaplishala.com/',
      projectName: 'Aaplishala (Live Project)',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Vercel'],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">04 — WORK EXPERIENCE</div>
          <h2 className="section-title">Professional Experience.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-company"
                        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                      >
                        {exp.company} <ExternalLinkIcon />
                      </a>
                    ) : (
                      <span className="exp-company">{exp.company}</span>
                    )}
                    <span className="exp-location">· {exp.location}</span>
                  </div>
                </div>
                <div className="exp-date-badge">{exp.date}</div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">{b}</li>
                ))}
              </ul>

              {exp.projectUrl && (
                <div style={{ marginTop: '8px' }}>
                  <a
                    href={exp.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    style={{ fontSize: '0.85rem' }}
                  >
                    View Project: {exp.projectName} ↗
                  </a>
                </div>
              )}

              <div className="project-tech-stack" style={{ marginTop: '12px', marginBottom: '0' }}>
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
