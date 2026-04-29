import Head from 'next/head';
import Link from 'next/link';

const ValueCard = ({ icon, title, desc }) => (
  <div className="glass" style={{ borderRadius: 20, padding: '32px 28px' }}>
    <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{icon}</div>
    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: '#f0f4ff' }}>{title}</h3>
    <p style={{ color: 'rgba(240,244,255,0.55)', fontSize: '0.88rem', lineHeight: 1.7 }}>{desc}</p>
  </div>
);

export default function About() {
  return (
    <>
      <Head>
        <title>About — Vyzion Holdings Corporation</title>
        <meta name="description" content="Learn about Vyzion Holdings Corporation — the AI-powered technology platform company building the future of digital experience." />
      </Head>

      {/* Hero */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,198,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Our Story</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 28 }}>
            We're Building the<br />
            <span style={{
              background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AI-Powered Future</span>
          </h1>
          <p style={{ color: 'rgba(240,244,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Vyzion Holdings Corporation is a technology platform company on a mission to reshape how humans interact with digital worlds through the power of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.15)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ color: '#e040a0', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 24 }}>Connecting People to What Matters Most</h2>
            <p style={{ color: 'rgba(240,244,255,0.65)', lineHeight: 1.85, fontSize: '1rem', marginBottom: 20 }}>
              We believe the next chapter of the internet is immersive, intelligent, and deeply personal. Vyzion is building the infrastructure and products that make that future accessible to everyone — from individual creators to global enterprises.
            </p>
            <p style={{ color: 'rgba(240,244,255,0.65)', lineHeight: 1.85, fontSize: '1rem' }}>
              Our ecosystem approach means every product we build amplifies the others — creating a compounding intelligence layer that gets smarter, faster, and more valuable over time.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <ValueCard icon="🎯" title="Precision" desc="Every product is purpose-built for its use case — no bloat, no compromises." />
            <ValueCard icon="🧠" title="Intelligence" desc="AI isn't a feature at Vyzion. It's the foundation everything is built on." />
            <ValueCard icon="🌍" title="Scale" desc="Built to grow from day one — from individual creators to enterprise teams." />
            <ValueCard icon="✨" title="Experience" desc="We obsess over the details that make the difference between good and extraordinary." />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section" style={{ textAlign: 'center' }}>
        <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Our Vision</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: 32, maxWidth: 800, margin: '0 auto 32px' }}>
          An <span className="grad">ecosystem</span> where human creativity and machine intelligence become one
        </h2>
        <p style={{ color: 'rgba(240,244,255,0.6)', maxWidth: 640, margin: '0 auto 60px', fontSize: '1.05rem', lineHeight: 1.8 }}>
          From AI video generation to social interaction layers and beyond — we're building the connective tissue of tomorrow's digital world.
        </p>

        {/* Timeline */}
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
          {[
            { year: '2025', title: 'Vyzion Founded', desc: 'Incorporated Vyzion Holdings Corporation with a vision to build the AI-powered digital ecosystem.' },
            { year: '2025', title: 'Verse Launched', desc: 'Released Verse, our flagship AI video generation platform, to early users.' },
            { year: '2026', title: 'Ecosystem Expansion', desc: 'Growing the product suite with new social and interactive experience layers.' },
            { year: 'Next', title: 'Global Scale', desc: 'Taking the Vyzion ecosystem to enterprises, creators, and communities worldwide.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 40, position: 'relative' }}>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: i === 3 ? 'transparent' : 'linear-gradient(135deg, #00c6ff, #e040a0)',
                  border: i === 3 ? '2px dashed rgba(0,198,255,0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  color: i === 3 ? '#00c6ff' : '#0d1b3e',
                  flexShrink: 0,
                }}>{item.year}</div>
                {i < 3 && <div style={{ width: 1, flex: 1, minHeight: 32, background: 'linear-gradient(to bottom, rgba(0,198,255,0.4), transparent)', marginTop: 8 }} />}
              </div>
              <div style={{ paddingBottom: 8 }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 8, color: '#f0f4ff' }}>{item.title}</h3>
                <p style={{ color: 'rgba(240,244,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'rgba(0,0,0,0.15)' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: 20 }}>
          Want to be part of <span className="grad">the journey?</span>
        </h2>
        <p style={{ color: 'rgba(240,244,255,0.6)', marginBottom: 40, fontSize: '1rem' }}>Get early access to the Vyzion ecosystem before we open to the public.</p>
        <Link href="/waitlist" className="btn-primary">Join the Waitlist</Link>
      </section>
    </>
  );
}
