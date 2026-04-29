import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/verse', label: 'Verse' },
    { href: '/blog', label: 'Blog' },
    { href: '/waitlist', label: 'Demo' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(13, 27, 62, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 36,
            height: 36,
            background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            transform: 'rotate(180deg)',
          }} />
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.3rem',
            letterSpacing: '0.08em',
            background: 'linear-gradient(135deg, #00c6ff, #e040a0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>VYZION</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {links.slice(0, -1).map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: router.pathname === l.href ? '#00c6ff' : 'rgba(240,244,255,0.7)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#00c6ff'}
            onMouseLeave={e => e.target.style.color = router.pathname === l.href ? '#00c6ff' : 'rgba(240,244,255,0.7)'}
            >{l.label}</Link>
          ))}
          <Link href="/waitlist" className="btn-primary" style={{ fontSize: '0.8rem', padding: '10px 24px' }}>
            Get Early Access
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 24,
              height: 2,
              background: 'linear-gradient(90deg, #00c6ff, #e040a0)',
              borderRadius: 1,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(13, 27, 62, 0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '2rem',
                color: router.pathname === l.href ? '#00c6ff' : 'rgba(240,244,255,0.8)',
              }}
            >{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
