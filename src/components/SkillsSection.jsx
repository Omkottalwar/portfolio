import React from 'react';

export default function SkillsSection() {
  const categories = [
    {
      title: 'FRONTEND DEVELOPMENT',
      skills: ['React.js', 'Next.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'TypeScript (basics)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'BACKEND DEVELOPMENT',
      skills: ['Node.js', 'Express.js', 'Core Java (OOPs)', 'REST API Design', 'JWT Authentication'],
    },
    {
      title: 'DATABASE',
      skills: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      title: 'TOOLS & DEPLOYMENT',
      skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Multer', 'Cloudinary', 'Jest', 'VS Code', 'NPM'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">02 — SKILLS</div>
          <h2 className="section-title">The toolbox.</h2>
        </div>

        <div className="skills-wrapper">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
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
