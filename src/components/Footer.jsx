import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Om Ganesh Kottalwar — Full Stack Developer (MERN) & B.E. AI & ML. Built with React.js, Node.js, Express & MongoDB.
        </p>
      </div>
    </footer>
  );
}
