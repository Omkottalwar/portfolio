import React from 'react';
import { Mail } from 'lucide-react';

// Custom SVG brand icons (lucide-react removed brand icons)
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);



export default function WelcomeHUD({ onEnter }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '80px 40px 40px 40px',
      gap: '32px',
    }}>
      {/* Orange Border Frame */}
      <div className="frame-border welcome-frame">
        {/* Left — Text Content */}
        <div className="fade-in welcome-content">
          <div className="section-label" style={{ marginBottom: '24px' }}>
            Hello
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 400,
            color: 'var(--text-white)',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            I'm <span className="cyber-name">Om Kottalwar</span>
          </h1>

          <p style={{
            fontSize: '16.5px',
            color: 'var(--text-white)',
            lineHeight: 1.65,
            maxWidth: '450px',
            marginBottom: '36px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)',
          }}>
            A MERN Stack Developer who builds full-stack web applications
            with <strong style={{ color: 'var(--orange-light)', textShadow: '0 0 10px rgba(255,140,90,0.2)', fontWeight: 700 }}>MongoDB</strong>, <strong style={{ color: 'var(--orange-light)', textShadow: '0 0 10px rgba(255,140,90,0.2)', fontWeight: 700 }}>Express.js</strong>, <strong style={{ color: 'var(--orange-light)', textShadow: '0 0 10px rgba(255,140,90,0.2)', fontWeight: 700 }}>React</strong>, and <strong style={{ color: 'var(--orange-light)', textShadow: '0 0 10px rgba(255,140,90,0.2)', fontWeight: 700 }}>Node.js</strong>.
          </p>

          <div className="welcome-buttons">
            <button className="btn-primary" onClick={onEnter}>
              Explore my work
            </button>
            <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — 3D Character */}
        <div className="fade-in" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <img
            src="/character.png"
            alt="3D Developer Character"
            style={{
              width: '100%',
              maxWidth: '420px',
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(255, 107, 53, 0.15))',
              animation: 'heroFloat 6s ease-in-out infinite',
            }}
          />
        </div>

      </div>

      {/* Social Icons — Centered Under the Frame */}
      <div className="fade-in" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        zIndex: 10,
        animation: 'fadeInUp 1s var(--ease-out) 0.8s both',
      }}>
        {[
          { icon: <GithubIcon />, href: 'https://github.com/Omkottalwar', label: 'GitHub' },
          { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/om-kottalwar-7a527b282/', label: 'LinkedIn' },
          { icon: <Mail size={18} />, href: 'mailto:omkottalwar17@gmail.com', label: 'Email' },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={social.label}
            style={{ textDecoration: 'none' }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <style>{`
        .welcome-frame {
          width: 100%;
          max-width: 1200px;
          min-height: 80vh;
          padding: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          transition: all 0.5s var(--ease-out);
          background: rgba(15, 15, 18, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 
            0 24px 80px rgba(0, 0, 0, 0.5),
            inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        }


        .welcome-content {
          z-index: 2;
        }

        .welcome-buttons {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }

        @media (max-width: 992px) {
          .welcome-frame {
            grid-template-columns: 1fr;
            padding: 40px;
            min-height: auto;
            text-align: center;
            gap: 30px;
          }
          .welcome-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .welcome-buttons {
            justify-content: center;
          }
          #hero {
            padding: 90px 20px 30px 20px !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 576px) {
          .welcome-frame {
            padding: 32px 20px;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
