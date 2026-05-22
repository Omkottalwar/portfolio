import React, { useEffect, useState } from 'react';
import { Layers, Server, Wrench } from 'lucide-react';

export default function MatrixSkills() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: 'Frontend',
      icon: <Layers size={20} />,
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux / Context API', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Server size={20} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'MongoDB / Mongoose', level: 90 },
        { name: 'JWT Authentication', level: 88 },
        { name: 'Socket.io', level: 82 },
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'REST API Design', level: 92 },
        { name: 'Postman', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Deployment', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" style={{
      padding: '40px 40px 80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div className="fade-in">
        <div className="section-label">Skills</div>
        <h2 className="section-title">My Tech Stack</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-gray)', maxWidth: '500px', lineHeight: 1.6, marginBottom: '48px' }}>
          Technologies I work with daily to build full-stack web applications.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="card fade-in" style={{
            padding: '32px',
            animationDelay: `${groupIdx * 0.15}s`,
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '28px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--orange-glow)',
                color: 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {group.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-white)',
              }}>
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {group.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '14px',
                  }}>
                    <span style={{ color: 'var(--text-light)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--orange)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                      {isMounted ? skill.level : 0}%
                    </span>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: isMounted ? `${skill.level}%` : '0%',
                        transitionDelay: `${skillIdx * 0.1 + groupIdx * 0.3}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
