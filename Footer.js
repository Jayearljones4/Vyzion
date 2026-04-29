import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '60px 40px 40px',
      background: 'rgba(10, 18, 48, 0.9)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 28,
                height: 28,
                background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                transform: 'rotate(180deg)',
              }} />
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>VYZION</span>
            </div>
            <p style={{ color: 'rgba(240,244,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 240 }}>
              Building the AI-powered ecosystem connecting people, ideas, and real-time information.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00c6ff', marginBottom: 20 }}>Platform</h4>
            {['Verse', 'About', 'Blog', 'Careers'].map(item => (
              <div key={item} style={{ marginBottom: 12 }}>
                <Link href={`/${item.toLowerCase()}`} style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#00c6ff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.6)'}
                >{item}</Link>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00c6ff', marginBottom: 20 }}>Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <div key={item} style={{ marginBottom: 12 }}>
                <Link href="#" style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#00c6ff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.6)'}
                >{item}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00c6ff', marginBottom: 20 }}>Connect</h4>
            {['hello@vyzion.ai', 'Twitter / X', 'LinkedIn', 'Instagram'].map(item => (
              <div key={item} style={{ marginBottom: 12 }}>
                <a href="#" style={{ color: 'rgba(240,244,255,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#e040a0'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.6)'}
                >{item}</a>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ color: 'rgba(240,244,255,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Vyzion Holdings Corporation. All rights reserved.
          </p>
          <p style={{ color: 'rgba(240,244,255,0.3)', fontSize: '0.8rem' }}>
            Built with ⚡ and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
