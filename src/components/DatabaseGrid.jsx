import React, { useState, useRef } from 'react';
import { ExternalLink, X, GraduationCap, TrendingUp, Users, Hotel, ArrowUpRight } from 'lucide-react';

export default function DatabaseGrid() {
  const [selectedProj, setSelectedProj] = useState(null);
  const dialogRef = useRef(null);

  const projects = [
    {
      id: 'aaplishala',
      title: 'Aaplishala',
      subtitle: 'School Management System',
      icon: <GraduationCap size={20} />,
      description: 'A comprehensive school management platform built during a 6-month internship at RenaSoftTech — handling students, attendance, exams, and admin workflows.',
      longDescription: 'Aaplishala is a production-grade School Management System developed during a 6-month internship at RenaSoftTech. It streamlines school operations including student enrollment, attendance tracking, exam scheduling, mark entry, timetable management, fee collection, and staff administration. Features role-based dashboards for admins, teachers, and students, JWT-secured REST APIs, file uploads with Multer, and PDF report generation.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'Multer'],
      role: 'Intern Developer',
      type: 'Professional',
      liveUrl: 'https://www.aaplishala.com/',
    },
    {
      id: 'proconnect',
      title: 'ProConnect',
      subtitle: 'Social Networking Platform',
      icon: <Users size={20} />,
      description: 'A full-stack social networking platform where users can connect, share posts, follow others, and interact in real time.',
      longDescription: 'ProConnect is a social networking application built from scratch with the MERN stack. Users can create profiles, share posts with images, follow/unfollow other users, like and comment on posts, and receive notifications. Features a responsive React frontend with a clean feed interface, Express.js REST APIs for all social features, MongoDB for storing user profiles, posts, and relationships, and JWT-based authentication for secure access.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'CSS'],
      role: 'Solo Developer',
      type: 'Personal',
      liveUrl: 'https://pro-connect-p4aq0am4e-om-kottalwars-projects.vercel.app/',
    },
    {
      id: 'stock-trading',
      title: 'Stock Trading Platform',
      subtitle: 'Financial Trading Dashboard',
      icon: <TrendingUp size={20} />,
      description: 'A stock trading simulation platform with real-time market data, portfolio tracking, and trade execution.',
      longDescription: 'A full-stack stock trading platform that lets users simulate buying and selling stocks. Features include real-time market data display, portfolio management with profit/loss tracking, trade history, watchlists, and user authentication. Built with a React frontend displaying interactive charts and data tables, Node.js/Express backend handling trade logic and user data, and MongoDB for persisting portfolios, transactions, and user accounts.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'Chart.js'],
      role: 'Solo Developer',
      type: 'Personal',
      liveUrl: 'https://stock-trading-platform-2-tsfm.onrender.com',
    },
    {
      id: 'hotel-listing',
      title: 'Hotel Listing Site',
      subtitle: 'Full-Stack Listing Platform',
      icon: <Hotel size={20} />,
      description: 'A hotel listing and review platform built with EJS templates — users can browse, list, and review hotels and accommodations.',
      longDescription: 'A full-stack hotel listing application where users can browse accommodations, create new listings with details and images, leave reviews with ratings, and manage their own listings. Built with server-side rendered EJS templates for the frontend, Express.js handling routing and middleware, MongoDB with Mongoose for data modeling, and features like user authentication, image uploads, map integration, and CRUD operations for listings and reviews.',
      tech: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'Cloudinary'],
      role: 'Solo Developer',
      type: 'Personal',
      liveUrl: 'https://fullstack-project-7olt.onrender.com',
    }
  ];

  const openDetails = (proj) => {
    setSelectedProj(proj);
    dialogRef.current?.showModal();
  };

  const closeDetails = () => {
    dialogRef.current?.close();
    setSelectedProj(null);
  };

  return (
    <section id="projects" style={{
      padding: '40px 40px 80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div className="fade-in">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-gray)', maxWidth: '500px', lineHeight: 1.6, marginBottom: '48px' }}>
          Four full-stack applications — from a production school management system to personal passion projects, all deployed and live.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="card fade-in"
            onClick={() => openDetails(proj)}
            style={{
              padding: '32px',
              cursor: 'pointer',
              animationDelay: `${idx * 0.15}s`,
            }}
          >
            {/* Icon & Type */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
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
                {proj.icon}
              </div>
              <span style={{
                fontSize: '11px',
                color: proj.type === 'Professional' ? 'var(--orange)' : 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontWeight: 600,
              }}>
                {proj.type}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '4px',
            }}>
              {proj.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--orange)', marginBottom: '12px', fontWeight: 500 }}>
              {proj.subtitle}
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '20px' }}>
              {proj.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {proj.tech.slice(0, 4).map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
              {proj.tech.length > 4 && (
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', alignSelf: 'center' }}>+{proj.tech.length - 4}</span>
              )}
            </div>

            {/* View More */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--orange)', fontSize: '13px', fontWeight: 600 }}>
                <span>View details</span>
                <ArrowUpRight size={14} />
              </div>
              {/* Live dot */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#4ade80' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                Live
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Dialog */}
      <dialog ref={dialogRef} onClose={closeDetails}>
        {selectedProj && (
          <div className="card dialog-card" style={{
            border: '1px solid var(--orange-border)',
            background: 'var(--bg-secondary)',
          }}>
            {/* Close */}
            <button
              onClick={closeDetails}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-gray)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.background = 'var(--orange-glow)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-gray)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: selectedProj.type === 'Professional' ? 'var(--orange)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>{selectedProj.type}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>•</span>
              <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>{selectedProj.role}</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '6px',
            }}>
              {selectedProj.title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--orange)', marginBottom: '24px', fontWeight: 500 }}>
              {selectedProj.subtitle}
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '28px' }}>
              {selectedProj.longDescription}
            </p>

            {/* Tech */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
                Built With
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProj.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={selectedProj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                Visit Live Site <ExternalLink size={14} />
              </a>
              <button className="btn-outline" onClick={closeDetails}>
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
