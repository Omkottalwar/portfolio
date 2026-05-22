import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

export default function UplinkTerminal() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSent(true);
      } else {
        alert(data.error || 'Transmission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Unable to establish contact uplink.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-primary)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    padding: '14px 18px',
    color: 'var(--text-white)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'var(--transition-fast)',
  };

  return (
    <section id="contact" style={{
      padding: '40px 40px 80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div className="fade-in">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p style={{ fontSize: '16.5px', color: 'var(--text-white)', maxWidth: '500px', lineHeight: 1.6, marginBottom: '48px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
          Have a project in mind or want to chat? Drop me a message and I'll get back to you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left — Contact Form */}
        <div className="card fade-in" style={{ padding: '36px', animationDelay: '0.15s' }}>
          {isSent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
               <CheckCircle2 size={48} color="var(--orange)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--text-white)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                Message Sent!
              </h3>
              <p style={{ color: 'var(--text-white)', fontSize: '14.5px', marginBottom: '24px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button className="btn-outline" onClick={() => { setIsSent(false); setFormData({ name: '', email: '', message: '' }); }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center' }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right — Contact Info */}
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', animationDelay: '0.3s' }}>
          {/* Info Card 1 */}
          <div className="card" style={{ padding: '28px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--orange-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Mail size={20} color="var(--orange)" />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Email</p>
              <a href="mailto:omkottalwar17@gmail.com" style={{ fontSize: '15px', color: 'var(--text-white)', textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-white)'}>omkottalwar17@gmail.com</a>
            </div>
          </div>

          {/* Info Card 2 */}
          <div className="card" style={{ padding: '28px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--orange-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <MapPin size={20} color="var(--orange)" />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Location</p>
              <p style={{ fontSize: '15px', color: 'var(--text-white)' }}>Pune, India</p>
            </div>
          </div>

          {/* MERN Stack Visual */}
          <div className="card" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Available For
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Internships', 'Full-time roles', 'Freelance projects', 'Open Source'].map((item) => (
                <span key={item} className="tech-tag" style={{ fontSize: '12px', padding: '6px 14px' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
