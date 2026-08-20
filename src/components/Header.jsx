import React from 'react';

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header({ isDarkMode, onToggleTheme, isMobileOpen, onToggleMobileMenu }) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="nav-content">
            <a href="#home" className="brand-logo">
              <img
                src="/profile.jpeg"
                alt="Om Ganesh Kottalwar"
                className="nav-avatar"
              />
              <span className="brand-name">OM KOTTALWAR<span className="brand-dot">.</span></span>
            </a>

            <nav className="desktop-nav">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="nav-right-actions">
              <a
                href="/resume.pdf"
                download="Om_Kottalwar_Resume.pdf"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                Resume
              </a>

              <button
                onClick={onToggleTheme}
                className="theme-toggle"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>

              <button
                onClick={onToggleMobileMenu}
                className="mobile-menu-btn"
                aria-label="Toggle Menu"
              >
                {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={onToggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Om_Kottalwar_Resume.pdf"
            className="mobile-nav-link"
            style={{ color: 'var(--accent-orange)' }}
            onClick={onToggleMobileMenu}
          >
            Download Resume ↓
          </a>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          OM KOTTALWAR — MERN × AI/ML
        </div>
      </div>
    </>
  );
}
