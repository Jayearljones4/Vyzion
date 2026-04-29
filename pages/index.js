import Head from 'next/head';
import Link from 'next/link';

const Orb = ({ color, size, top, left, delay = 0 }) => (
  <div style={{
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    filter: 'blur(80px)',
    top,
    left,
    animation: `pulse-glow 4s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none',
  }} />
);

const FeatureCard = ({ icon, title, desc, delay }) => (
  <div className={`glass fade-up-delay-${delay}`} style={{
    borderRadius: 20,
    padding: '36px 32px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'default',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,198,255,0.1)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div style={{ fontSize: '2rem', marginBottom: 16 }}>{icon}</div>
    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 12, color: '#f0f4ff' }}>{title}</h3>
    <p style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
  </div>
);

const StatBlock = ({ value, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      fontFamily: 'Syne, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>{value}</div>
    <div style={{ color: 'rgba(240,244,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{label}</div>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Vyzion — AI-Powered Digital Ecosystem</title>
        <meta name="description" content="Vyzion Holdings Corporation is building the AI-powered ecosystem that connects people, ideas, and real-time information through immersive digital experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Background orbs */}
        <Orb color="rgba(0,198,255,0.2)" size="600px" top="-100px" left="-200px" delay={0} />
        <Orb color="rgba(224,64,160,0.15)" size="500px" top="200px" left="60%" delay={1.5} />
        <Orb color="rgba(107,63,160,0.2)" size="400px" top="50%" left="30%" delay={3} />

        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,198,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="fade-up" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0,198,255,0.1)',
            border: '1px solid rgba(0,198,255,0.3)',
            borderRadius: 50,
            padding: '6px 18px',
            marginBottom: 32,
            fontSize: '0.8rem',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#00c6ff',
            textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c6ff', animation: 'pulse-glow 2s infinite' }} />
            Now Live — Verse AI Video Platform
          </div>

          <h1 className="fade-up-delay-1" style={{
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginBottom: 28,
          }}>
            The Future of
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #00c6ff 0%, #e040a0 60%, #6b3fa0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}> Digital Experience</span>
          </h1>

          <p className="fade-up-delay-2" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(240,244,255,0.65)',
            maxWidth: 680,
            margin: '0 auto 48px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Vyzion is a technology platform company building an AI-powered ecosystem that connects people, ideas, and real-time information through interactive, social, and immersive digital experiences.
          </p>

          <div className="fade-up-delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/waitlist" className="btn-primary">Get Early Access</Link>
            <Link href="/verse" className="btn-outline">Explore Verse →</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 40,
        }}>
          <StatBlock value="AI-First" label="Architecture" />
          <StatBlock value="∞" label="Creative Possibilities" />
          <StatBlock value="Real-Time" label="Intelligence" />
          <StatBlock value="2025" label="Founded" />
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Platform Capabilities</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 20 }}>
            Built for the <span className="grad">AI Era</span>
          </h2>
          <p style={{ color: 'rgba(240,244,255,0.55)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Every product in the Vyzion ecosystem is designed from the ground up with AI at its core — not bolted on, but foundational.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          <FeatureCard delay={1} icon="🎬" title="AI Video Generation" desc="Create stunning, cinematic video content in seconds. Powered by state-of-the-art generative models built for creators and enterprises." />
          <FeatureCard delay={2} icon="🌐" title="Immersive Digital Experiences" desc="Bridge the gap between content and community with interactive platforms that adapt to how people consume and create." />
          <FeatureCard delay={3} icon="⚡" title="Real-Time Intelligence" desc="Live data streams, dynamic personalization, and intelligent recommendations — all happening at the speed of thought." />
          <FeatureCard delay={4} icon="🔗" title="Connected Ecosystem" desc="Every Vyzion product is designed to work together, sharing context and intelligence across the entire platform." />
          <FeatureCard delay={1} icon="🛡️" title="Enterprise Ready" desc="Built with enterprise-grade security, compliance, and scalability from day one. Ready for teams of any size." />
          <FeatureCard delay={2} icon="🚀" title="Creator-First Design" desc="Tools that get out of your way and let creativity flow — from first idea to published experience." />
        </div>
      </section>

      {/* Verse Product Spotlight */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ color: '#e040a0', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Flagship Product</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 24 }}>
              Meet <span className="grad">Verse</span>
            </h2>
            <p style={{ color: 'rgba(240,244,255,0.65)', lineHeight: 1.8, marginBottom: 32, fontSize: '1.05rem' }}>
              Verse is Vyzion's AI video generation platform — a powerful creative studio that transforms ideas into cinematic content. Whether you're a solo creator or an enterprise team, Verse gives you the tools to tell your story at scale.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: 40 }}>
              {['Text-to-video generation', 'Studio-quality output', 'Credit-based flexible pricing', 'Built on industry-leading AI models'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, color: 'rgba(240,244,255,0.75)', fontSize: '0.95rem' }}>
                  <span style={{ color: '#00c6ff', fontSize: '1rem' }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/verse" className="btn-primary">Explore Verse</Link>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="glass" style={{
              borderRadius: 24,
              padding: '60px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,198,255,0.05), rgba(224,64,160,0.05))',
              }} />
              <div style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
                margin: '0 auto 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                animation: 'float 6s ease-in-out infinite',
                boxShadow: '0 0 60px rgba(0,198,255,0.3), 0 0 120px rgba(224,64,160,0.2)',
              }}>🎬</div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', marginBottom: 12 }}>verse.cx</h3>
              <p style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.9rem', marginBottom: 24 }}>AI Video. No limits.</p>
              <a href="https://verse.cx" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.8rem' }}>
                Launch Verse →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          <Orb color="rgba(0,198,255,0.12)" size="500px" top="50%" left="50%" delay={0} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: 24 }}>
              Ready to build the <span className="grad">future?</span>
            </h2>
            <p style={{ color: 'rgba(240,244,255,0.6)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Join thousands of creators and enterprises shaping what comes next with Vyzion.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/waitlist" className="btn-primary">Get Early Access</Link>
              <Link href="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
