import Head from 'next/head';
import Link from 'next/link';

const PricingCard = ({ plan, price, desc, features, highlight }) => (
  <div className={highlight ? '' : 'glass'} style={{
    borderRadius: 24,
    padding: '40px 32px',
    border: highlight ? 'none' : undefined,
    background: highlight ? 'linear-gradient(135deg, rgba(0,198,255,0.15), rgba(224,64,160,0.15))' : undefined,
    outline: highlight ? '1px solid rgba(0,198,255,0.4)' : undefined,
    position: 'relative',
    overflow: 'hidden',
  }}>
    {highlight && (
      <div style={{
        position: 'absolute',
        top: 16,
        right: 16,
        background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
        color: '#0d1b3e',
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: '0.7rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '4px 12px',
        borderRadius: 50,
      }}>Most Popular</div>
    )}
    <p style={{ color: highlight ? '#00c6ff' : 'rgba(240,244,255,0.5)', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{plan}</p>
    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', marginBottom: 8 }}>
      {price === 'Free' ? price : <><span style={{ fontSize: '1rem', fontWeight: 400 }}>$</span>{price}<span style={{ fontSize: '1rem', fontWeight: 400 }}>/mo</span></>}
    </div>
    <p style={{ color: 'rgba(240,244,255,0.55)', fontSize: '0.88rem', marginBottom: 28, lineHeight: 1.6 }}>{desc}</p>
    <ul style={{ listStyle: 'none', marginBottom: 36 }}>
      {features.map(f => (
        <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12, color: 'rgba(240,244,255,0.75)', fontSize: '0.88rem' }}>
          <span style={{ color: '#00c6ff', marginTop: 2 }}>✦</span>
          {f}
        </li>
      ))}
    </ul>
    <a href="https://verse.cx" target="_blank" rel="noopener noreferrer"
      className={highlight ? 'btn-primary' : 'btn-outline'}
      style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
      {price === 'Free' ? 'Start Free' : 'Get Started'}
    </a>
  </div>
);

export default function Verse() {
  return (
    <>
      <Head>
        <title>Verse — AI Video Generation by Vyzion</title>
        <meta name="description" content="Verse by Vyzion: The AI video generation platform that turns your ideas into cinematic content. No experience required." />
      </Head>

      {/* Hero */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(224,64,160,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 80%, rgba(0,198,255,0.1) 0%, transparent 60%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 32,
          }}>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>by VYZION</div>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 12 }}>
            <span style={{
              background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Verse</span>
          </h1>
          <p style={{ color: 'rgba(240,244,255,0.5)', fontFamily: 'Syne, sans-serif', fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 40 }}>AI Video. No Limits.</p>

          <p style={{ color: 'rgba(240,244,255,0.7)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto 48px' }}>
            Verse is the AI video generation studio that turns ideas into cinematic content — in seconds. Type a prompt. Get a video. It's that simple.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://verse.cx" target="_blank" rel="noopener noreferrer" className="btn-primary">Launch Verse →</a>
            <Link href="/waitlist" className="btn-outline">Get Early Access</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: '#e040a0', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>How It Works</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Three steps to <span className="grad">cinematic</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {[
              { step: '01', icon: '✍️', title: 'Write Your Prompt', desc: 'Describe your scene, mood, or story in plain language. No technical skills required.' },
              { step: '02', icon: '⚡', title: 'AI Generates', desc: 'Verse processes your prompt through state-of-the-art AI models to produce studio-quality video.' },
              { step: '03', icon: '🎬', title: 'Download & Share', desc: 'Your video is ready in seconds. Download, share, or use across any platform.' },
            ].map(item => (
              <div key={item.step} className="glass" style={{ borderRadius: 20, padding: '36px 28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: 24,
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '3rem',
                  color: 'rgba(0,198,255,0.08)',
                  lineHeight: 1,
                }}>{item.step}</div>
                <div style={{ fontSize: '2rem', marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Simple, <span className="grad">credit-based</span> pricing</h2>
          <p style={{ color: 'rgba(240,244,255,0.55)', maxWidth: 480, margin: '0 auto' }}>Only pay for what you create. No subscriptions required — start free and scale as you grow.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 960, margin: '0 auto' }}>
          <PricingCard
            plan="Starter"
            price="Free"
            desc="Perfect for exploring Verse and testing your first AI videos."
            features={['10 free credits', 'Standard quality output', 'Verse watermark', 'Community support']}
          />
          <PricingCard
            plan="Creator"
            price="29"
            desc="For creators who want to produce consistently and at scale."
            features={['200 credits/month', 'HD quality output', 'No watermark', 'Priority generation', 'Email support']}
            highlight
          />
          <PricingCard
            plan="Studio"
            price="99"
            desc="For teams and enterprises with high-volume production needs."
            features={['1000 credits/month', '4K quality output', 'No watermark', 'API access', 'Dedicated support', 'Custom integrations']}
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'rgba(0,0,0,0.15)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 20 }}>
          Start creating with <span className="grad">Verse</span> today
        </h2>
        <p style={{ color: 'rgba(240,244,255,0.6)', marginBottom: 40 }}>10 free credits. No credit card required.</p>
        <a href="https://verse.cx" target="_blank" rel="noopener noreferrer" className="btn-primary">Launch Verse →</a>
      </section>
    </>
  );
}
