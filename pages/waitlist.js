import Head from 'next/head';
import { useState } from 'react';

export default function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', role: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Get Early Access — Vyzion</title>
        <meta name="description" content="Join the Vyzion waitlist and be first to access our AI-powered ecosystem." />
      </Head>

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(0,198,255,0.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(224,64,160,0.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,198,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div style={{ width: '100%', maxWidth: 580, position: 'relative', zIndex: 2 }}>
          {!submitted ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Early Access</p>
                <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: 20 }}>
                  Get <span style={{ background: 'linear-gradient(135deg, #00c6ff, #e040a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Early Access</span>
                </h1>
                <p style={{ color: 'rgba(240,244,255,0.6)', lineHeight: 1.7, fontSize: '1rem' }}>
                  Be among the first to experience the full Vyzion ecosystem. Limited spots available.
                </p>
              </div>

              <div className="glass" style={{ borderRadius: 24, padding: '48px 40px' }}>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.6)', marginBottom: 10 }}>Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 12,
                      padding: '14px 18px',
                      color: '#f0f4ff',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,198,255,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.6)', marginBottom: 10 }}>Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="you@company.com"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 12,
                      padding: '14px 18px',
                      color: '#f0f4ff',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,198,255,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.6)', marginBottom: 10 }}>I am a...</label>
                  <select
                    value={form.role}
                    onChange={e => setForm({...form, role: e.target.value})}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 12,
                      padding: '14px 18px',
                      color: form.role ? '#f0f4ff' : 'rgba(240,244,255,0.4)',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" style={{ background: '#0d1b3e' }}>Select your role</option>
                    <option value="creator" style={{ background: '#0d1b3e' }}>Content Creator</option>
                    <option value="marketer" style={{ background: '#0d1b3e' }}>Marketer</option>
                    <option value="developer" style={{ background: '#0d1b3e' }}>Developer</option>
                    <option value="enterprise" style={{ background: '#0d1b3e' }}>Enterprise / Business</option>
                    <option value="investor" style={{ background: '#0d1b3e' }}>Investor</option>
                    <option value="other" style={{ background: '#0d1b3e' }}>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 36 }}>
                  <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.6)', marginBottom: 10 }}>Most interested in...</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {['Verse Video', 'Enterprise Tools', 'API Access', 'Partnerships'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setForm({...form, interest: opt})}
                        style={{
                          padding: '12px 16px',
                          borderRadius: 10,
                          border: form.interest === opt ? '1px solid #00c6ff' : '1px solid rgba(255,255,255,0.1)',
                          background: form.interest === opt ? 'rgba(0,198,255,0.1)' : 'rgba(255,255,255,0.03)',
                          color: form.interest === opt ? '#00c6ff' : 'rgba(240,244,255,0.6)',
                          fontFamily: 'Syne, sans-serif',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          textAlign: 'center',
                        }}
                      >{opt}</button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                    opacity: (!form.name || !form.email) ? 0.5 : 1,
                    cursor: (!form.name || !form.email) ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? 'Submitting...' : 'Join the Waitlist →'}
                </button>

                <p style={{ textAlign: 'center', color: 'rgba(240,244,255,0.35)', fontSize: '0.8rem', marginTop: 20 }}>
                  No spam. No noise. Just early access.
                </p>
              </div>
            </>
          ) : (
            <div className="glass" style={{ borderRadius: 24, padding: '72px 48px', textAlign: 'center' }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
                margin: '0 auto 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
              }}>✓</div>
              <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>You're on the list!</h2>
              <p style={{ color: 'rgba(240,244,255,0.6)', lineHeight: 1.7, marginBottom: 32 }}>
                Welcome to the Vyzion early access program, {form.name}. We'll be in touch at <strong style={{ color: '#00c6ff' }}>{form.email}</strong> when your access is ready.
              </p>
              <a href="https://verse.cx" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try Verse Now →
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
