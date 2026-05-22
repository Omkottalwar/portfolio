import React from 'react';
import { Briefcase, Code2, GraduationCap } from 'lucide-react';

export default function HomeHUD() {
  return (
    <section id="about" style={{
      padding: '40px 40px 80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div className="fade-in">
        <div className="section-label">About Me</div>
        <h2 className="section-title">MERN Stack Developer</h2>
      </div>

      <div className="about-grid">
        {/* Left — Bio */}
        <div className="fade-in" style={{ animationDelay: '0.15s' }}>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'var(--text-gray)',
            marginBottom: '24px',
          }}>
            I'm a final-year engineering student specializing in <strong>Artificial Intelligence & Machine Learning (AIML)</strong> at <strong>ISBM College of Engineering, Pune</strong> (Class of 2027). I'm a full-stack web developer specializing in the MERN stack — MongoDB, Express.js, React, and Node.js, bridging high-performance intelligent backends with futuristic, responsive user interfaces.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'var(--text-gray)',
            marginBottom: '32px',
          }}>
            During my <a href="https://renasofttech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-light)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--orange)'}>6-month internship at RenaSoftTech</a>, 
            I worked on <a href="https://www.aaplishala.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-white)', fontWeight: 600, textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-white)'}>Aaplishala</a> — a comprehensive 
            school management system. I built and maintained modules for student records, attendance tracking, 
            timetable management, and administrative workflows, shipping production React interfaces backed by 
            Express REST APIs and MongoDB.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'REST APIs', 'JWT', 'Git'].map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right — Stats Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* Card 1 */}
          <div className="card fade-in" style={{ padding: '28px', display: 'flex', gap: '20px', alignItems: 'flex-start', animationDelay: '0.3s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--orange-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Briefcase size={22} color="var(--orange)" />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
                6 Months Internship
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                Full-stack developer at <a href="https://renasofttech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-light)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--orange)'}>RenaSoftTech</a>, working on the <a href="https://www.aaplishala.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-white)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-white)'}>Aaplishala</a> school management system.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card fade-in" style={{ padding: '28px', display: 'flex', gap: '20px', alignItems: 'flex-start', animationDelay: '0.45s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--orange-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Code2 size={22} color="var(--orange)" />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
                3 MERN Projects
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                Built end-to-end full-stack applications — social networking, stock trading, and hotel listing.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card fade-in" style={{ padding: '28px', display: 'flex', gap: '20px', alignItems: 'flex-start', animationDelay: '0.6s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--orange-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <GraduationCap size={22} color="var(--orange)" />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
                ISBM College of Engineering
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                4th-year AIML Engineering Student in Pune, India (Class of 2027).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
