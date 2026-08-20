import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError('');

    try {
      // Primary: FormSubmit AJAX endpoint delivering directly to your email
      const response = await fetch('https://formsubmit.co/ajax/omkottalwar17@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `🚨 Portfolio Lead from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Transmission error');
      }
    } catch (err) {
      console.warn('FormSubmit attempt failed, trying fallback API...', err);
      try {
        const apiRes = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (apiRes.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      } catch (fallbackErr) {
        console.error('All dispatch methods failed:', fallbackErr);
      }

      setError('Message delivery failed. Please send your email directly to omkottalwar17@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-num">06 — CONTACT</div>
          <h2 className="section-title">Let's connect & build.</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-text">
              Looking for a dedicated MERN Stack Developer or an AI/ML engineering intern? I am open to full-time roles, internships, and project collaborations.
            </p>

            <div className="contact-details-grid">
              <div className="contact-detail-item">
                <div className="contact-detail-label">EMAIL</div>
                <a href="mailto:omkottalwar17@gmail.com" className="contact-email-link">
                  omkottalwar17@gmail.com
                </a>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-label">PHONE</div>
                <a href="tel:+917517344791" className="contact-phone-link">
                  +91 7517344791
                </a>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-label">LOCATION</div>
                <div className="contact-loc-text">
                  Pune
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>CONNECT & PROFILES</div>
              <div className="social-links">
                <a href="https://github.com/Omkottalwar" target="_blank" rel="noopener noreferrer" className="social-btn">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/om-kottalwar-7a527b282/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  LinkedIn
                </a>
                <a href="https://wa.me/917517344791" target="_blank" rel="noopener noreferrer" className="social-btn">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="toast-success">
                ✓ Message sent successfully!
              </div>
            )}

            {error && (
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.12)', border: '1px solid #ef4444', color: '#ef4444', padding: '12px 16px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✕ {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">YOUR NAME</label>
              <input
                type="text"
                required
                disabled={loading}
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">YOUR EMAIL</label>
              <input
                type="email"
                required
                disabled={loading}
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">YOUR MESSAGE</label>
              <textarea
                required
                disabled={loading}
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
