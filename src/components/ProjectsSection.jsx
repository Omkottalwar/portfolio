import React from 'react';

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GithubCodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export default function ProjectsSection() {
  const projects = [
    {
      num: '01',
      title: 'ProConnect — Social Media Platform',
      tagline: 'Full-Stack Social Media Web Application',
      bullets: [
        'Full-stack social media app (200+ test users) with JWT auth, profiles, posts, and sharing; Redux Toolkit cut re-renders by ~35%, Next.js SSR achieved sub-2s page loads.',
        'Deployed on Render (API) + Vercel (frontend) with 99.5% uptime; resume download and dynamic profiles with production-ready error handling.',
      ],
      tech: ['React.js', 'Next.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Vercel', 'Render'],
      liveUrl: 'https://pro-connect-17.vercel.app/',
      codeUrl: 'https://github.com/Omkottalwar/ProConnect',
    },
    {
      num: '02',
      title: 'Wanderlust — Hotel Listing Platform',
      tagline: 'Airbnb-Style Accommodation Booking & Listing Platform',
      bullets: [
        'Airbnb-style platform for 150+ mock properties with full CRUD, reviews, bookings, Multer + Cloudinary uploads (60% faster delivery), and responsive Tailwind CSS UI.',
        'REST APIs consumed across frontend and backend; deployed end-to-end on Vercel and Render with environment-based config and production-ready error handling.',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Multer', 'Cloudinary', 'REST API', 'Vercel', 'Render'],
      liveUrl: 'https://fullstack-project-7olt.onrender.com/listings',
      codeUrl: 'https://github.com/Omkottalwar/FULLSTACK-PROJECT',
    },
    {
      num: '03',
      title: 'StockSim — Stock Trading Platform',
      tagline: 'Real-Time Stock Market Trading Simulator',
      bullets: [
        'Real-time stock trading simulator with JWT auth, portfolio CRUD, and responsive Bootstrap + MUI UI; Jest unit tests at 80%+ coverage; fully deployed on Render.',
        'Interactive virtual portfolio management with trade logging, transaction verification, and environment-based deployment.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'MUI', 'Jest', 'JWT Auth', 'Render'],
      liveUrl: 'https://stock-trading-platform-1-42uf.onrender.com/',
      codeUrl: 'https://github.com/Omkottalwar/Stock-trading-platform',
    },
    {
      num: '04',
      title: 'Expense Voucher Management System',
      tagline: 'Financial Expense Voucher & Workflow Management Platform',
      bullets: [
        'Secure multi-user expense voucher platform with role-based authentication, voucher creation, approval workflow, and transaction logging.',
        'Engineered with responsive React UI, JWT-secured REST APIs, dynamic status tracking, and cloud deployment on Vercel.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API', 'Vercel'],
      liveUrl: 'https://expense-voucher-management-system-psi.vercel.app/login',
      codeUrl: 'https://github.com/Omkottalwar/ExpenseVoucherManagementSystem',
    },
    {
      num: '05',
      title: 'Aaplishala — School Management System',
      tagline: 'Enterprise School Administration & Student Portal (Renasofttech Internship)',
      bullets: [
        'Production-grade School Management System developed during internship at Renasofttech Pvt. Ltd., streamlining student enrollment, attendance, timetable scheduling, and marks entry.',
        'Engineered with role-based dashboards (Admin, Teacher, Student), JWT-secured REST APIs, database models in MongoDB, and responsive React user interfaces.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Multer'],
      liveUrl: 'https://www.aaplishala.com/',
      codeUrl: null,
    },
    {
      num: '06',
      title: 'Nomichi — Travel & Trips Management',
      tagline: 'Interactive Travel Planning & Trip Management Platform',
      bullets: [
        'Interactive travel and trip planning web application with itinerary creation, destination discovery, and customizable trip schedules.',
        'Developed with dynamic React UI components, responsive design, seamless client-side state handling, and cloud deployment on Vercel.',
      ],
      tech: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'Tailwind CSS', 'Vercel', 'REST API'],
      liveUrl: 'https://nomichi-eta.vercel.app/',
      codeUrl: 'https://github.com/Omkottalwar/Nomichi',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">03 — PROJECTS</div>
          <h2 className="section-title">Production & Deployed Projects.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-number">{proj.num}</div>
              <div className="project-content">
                <div className="project-header-row">
                  <h3 className="project-content-title">{proj.title}</h3>
                </div>

                <div className="project-tagline">{proj.tagline}</div>

                <ul className="project-bullets">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="project-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="project-tech-stack">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      Live Project <ExternalLinkIcon />
                    </a>
                  )}
                  {proj.codeUrl && (
                    <a href={proj.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      GitHub Code <GithubCodeIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
