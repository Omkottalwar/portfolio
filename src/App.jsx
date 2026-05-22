import React, { useState, useEffect } from 'react';
import WelcomeHUD from './components/WelcomeHUD';
import HomeHUD from './components/HomeHUD';
import DatabaseGrid from './components/DatabaseGrid';
import MatrixSkills from './components/MatrixSkills';
import UplinkTerminal from './components/UplinkTerminal';
import SpaceVortex from './components/SpaceVortex';

// Custom SVG brand icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 1.977 14.03 1.953 12.006 1.953c-5.438 0-9.863 4.373-9.867 9.801-.001 1.966.526 3.882 1.523 5.596l-.997 3.639 3.782-.989-.399-.258zm9.957-6.845c-.328-.164-1.942-.959-2.242-1.069-.3-.11-.518-.164-.736.164-.219.328-.847 1.069-1.039 1.288-.192.219-.383.246-.71.082-.328-.164-1.385-.511-2.638-1.628-.975-.87-1.632-1.946-1.823-2.274-.192-.328-.02-.505.144-.668.148-.147.328-.383.492-.575.164-.192.219-.328.328-.548.11-.219.055-.411-.027-.575-.082-.164-.736-1.776-1.009-2.434-.266-.639-.536-.55-.736-.56-.19-.01-.41-.01-.628-.01-.219 0-.575.082-.876.411-.3.328-1.148 1.123-1.148 2.739 0 1.616 1.176 3.178 1.34 3.397.164.219 2.314 3.533 5.605 4.95.782.338 1.394.54 1.87.692.787.25 1.503.215 2.068.13.63-.095 1.942-.795 2.215-1.562.272-.767.272-1.424.192-1.562-.08-.137-.299-.219-.628-.383z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s var(--ease-out)' }}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);


export default function App() {
  const [activeTab, setActiveTab] = useState('welcome'); // 'welcome', 'about', 'projects', 'skills', 'contact'
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position to adjust navigation background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll strictly when activeTab is 'welcome' on desktop to frame the HUD perfectly
  useEffect(() => {
    const handleResize = () => {
      if (activeTab === 'welcome' && window.innerWidth > 992) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [activeTab]);

  // Smooth tab change transition handler
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setIsMenuOpen(false); // Close mobile drawer menu
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleEnter = () => {
    handleTabChange('about');
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* 3D Floating Cubes Background */}
      <SpaceVortex activeTab={activeTab} />

      {/* Navigation */}
      <nav className={`navbar ${scrolled || activeTab !== 'welcome' ? 'navbar-scrolled' : ''} ${isMenuOpen ? 'navbar-open' : ''}`}>
        {/* Logo */}
        <a href="#welcome" onClick={(e) => { e.preventDefault(); handleTabChange('welcome'); }} style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text-white)',
          textDecoration: 'none',
          letterSpacing: '1px',
        }}>
          <span style={{ color: 'var(--text-white)' }}>Om</span>
          <span style={{ color: 'var(--orange)' }}>Kottalwar</span>
        </a>

        {/* Links (Centered in desktop, Drawer in mobile) */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabChange(link.id);
              }}
              className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <a 
            href="https://wa.me/917517344791?text=Hi%20Om%2C%20I%20viewed%20your%20portfolio%20and%20would%20love%20to%20connect%21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn"
            aria-label="Connect on WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button (Direct child of root to avoid backdrop-filter containing block resets when scrolling) */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        aria-label="Toggle Navigation Menu"
      >
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </button>




      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1, paddingTop: activeTab === 'welcome' ? '0' : '70px' }}>
        {activeTab === 'welcome' && (
          <div key="welcome" className="fade-in">
            <WelcomeHUD onEnter={handleEnter} />
          </div>
        )}

        {activeTab !== 'welcome' && (
          <>
            <div className="subpage-header-container fade-in">
              <button 
                onClick={() => handleTabChange('welcome')} 
                className="back-btn"
                aria-label="Back to Mainframe"
              >
                <ArrowLeftIcon />
                <span>BACK TO MAINFRAME</span>
              </button>
            </div>

            <div key={activeTab} className="fade-in" style={{ minHeight: 'calc(100vh - 200px)' }}>
              {activeTab === 'about' && <HomeHUD />}
              {activeTab === 'projects' && <DatabaseGrid />}
              {activeTab === 'skills' && <MatrixSkills />}
              {activeTab === 'contact' && <UplinkTerminal />}
            </div>

            {/* Footer */}
            <footer style={{
              padding: '40px',
              textAlign: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              marginTop: '40px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
                {[
                  { icon: <GithubIcon />, href: 'https://github.com/Omkottalwar' },
                  { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/om-kottalwar-7a527b282/' },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ textDecoration: 'none' }}>
                    {social.icon}
                  </a>
                ))}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                © {new Date().getFullYear()} Om Kottalwar. Built with React & Three.js.
              </p>
            </footer>
          </>
        )}
      </main>
    </>
  );
}
