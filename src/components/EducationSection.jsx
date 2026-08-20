import React from 'react';

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const AwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

export default function EducationSection() {
  const educationList = [
    {
      degree: 'B.E. — Artificial Intelligence & Machine Learning',
      institution: 'ISBM College of Engineering, Pune',
      date: 'Aug 2023 – Jun 2027',
      highlights: ['CGPA: 9.59', 'AI & ML Major'],
      featured: true,
    },
    {
      degree: 'HSC — Science (PCMB)',
      institution: 'Dnynada H.S. & Jr. College, Satefal, Hinganghat',
      date: 'Jun 2021 – Mar 2023',
      highlights: ['Physics, Chemistry, Mathematics, Biology (PCMB)'],
      featured: false,
    },
    {
      degree: 'SSC (10th Standard)',
      institution: "St. Anne's High School, Mul, Chandrapur",
      date: 'Mar 2021',
      highlights: ['Secondary School Certificate'],
      featured: false,
    },
  ];

  const achievements = [
    {
      title: 'Academic Excellence (CGPA 9.59)',
      subtitle: 'ISBM College of Engineering (2023–24)',
      desc: 'Achieved a 9.59 CGPA in B.E. AI & ML — demonstrating consistent academic performance across technical and computer science subjects.',
      badge: 'Academic Honor',
    },
    {
      title: 'MERN Stack Web Development',
      subtitle: 'Apna College (2024)',
      desc: 'Full-stack curriculum with 3 capstone deployments covering REST APIs, CRUD operations, Redux state management, and responsive application design.',
      badge: 'Certification',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">05 — EDUCATION & ACHIEVEMENTS</div>
          <h2 className="section-title">Academic Background & Credentials.</h2>
        </div>

        <div className="edu-achieve-grid">
          {/* Education Column */}
          <div>
            <div className="sub-header-row">
              <GraduationIcon />
              <h3 className="sub-header-title">Education</h3>
            </div>

            <div className="education-cards">
              {educationList.map((edu, idx) => (
                <div key={idx} className={`edu-card ${edu.featured ? 'featured-edu' : ''}`}>
                  <div className="edu-card-top">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <div className="edu-inst">{edu.institution}</div>
                  <div className="edu-highlights">
                    {edu.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="edu-badge">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div>
            <div className="sub-header-row">
              <AwardIcon />
              <h3 className="sub-header-title">Certifications & Achievements</h3>
            </div>

            <div className="achievement-cards">
              {achievements.map((ach, idx) => (
                <div key={idx} className="achieve-card">
                  <div className="achieve-card-top">
                    <span className="achieve-badge">{ach.badge}</span>
                  </div>
                  <h4 className="achieve-title">{ach.title}</h4>
                  <div className="achieve-sub">{ach.subtitle}</div>
                  <p className="achieve-desc">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
