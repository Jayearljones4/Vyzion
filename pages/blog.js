import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    slug: 'introducing-vyzion',
    tag: 'Company',
    tagColor: '#00c6ff',
    title: 'Introducing Vyzion: Building the AI-Powered Digital Ecosystem',
    excerpt: 'Today, we're excited to share our vision for the future of human-machine interaction and why we started Vyzion Holdings Corporation.',
    date: 'December 2025',
    readTime: '5 min read',
  },
  {
    slug: 'verse-launch',
    tag: 'Product',
    tagColor: '#e040a0',
    title: 'Verse Is Live: AI Video Generation for Everyone',
    excerpt: 'After months of building and testing, Verse — our flagship AI video generation platform — is now available. Here's what we built and why.',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    slug: 'future-of-ai-video',
    tag: 'Insights',
    tagColor: '#6b3fa0',
    title: 'The Future of AI Video: Where We're Headed in 2026',
    excerpt: 'AI video generation is evolving faster than anyone predicted. Here's our take on where the industry is heading and how Vyzion is positioning for it.',
    date: 'February 2026',
    readTime: '8 min read',
  },
  {
    slug: 'creator-economy-ai',
    tag: 'Insights',
    tagColor: '#6b3fa0',
    title: 'How AI Is Reshaping the Creator Economy',
    excerpt: 'From text-to-video to synthetic media, AI tools are giving individual creators enterprise-level production capabilities. What does this mean for the future?',
    date: 'March 2026',
    readTime: '6 min read',
  },
  {
    slug: 'building-verse-stack',
    tag: 'Engineering',
    tagColor: '#00c6ff',
    title: 'How We Built Verse: The Technical Stack Behind the Magic',
    excerpt: 'A deep dive into the infrastructure, APIs, and architectural decisions that power Verse — from Runway integration to real-time video processing.',
    date: 'April 2026',
    readTime: '10 min read',
  },
  {
    slug: 'ai-enterprise-2026',
    tag: 'Enterprise',
    tagColor: '#e040a0',
    title: 'Why Every Enterprise Will Have an AI Video Strategy by 2027',
    excerpt: 'Marketing, training, communications — AI video is no longer a "nice to have." Here's why the enterprise adoption curve is about to go vertical.',
    date: 'April 2026',
    readTime: '6 min read',
  },
];

const PostCard = ({ post, featured }) => (
  <article
    className="glass"
    style={{
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      gridColumn: featured ? 'span 2' : 'span 1',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    {/* Thumbnail placeholder */}
    <div style={{
      height: featured ? 280 : 180,
      background: `linear-gradient(135deg, rgba(0,198,255,0.15), rgba(224,64,160,0.15))`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${post.tagColor}30, transparent)`,
        filter: 'blur(40px)',
      }} />
      <span style={{ fontSize: featured ? '3rem' : '2rem', position: 'relative', zIndex: 2 }}>
        {post.tag === 'Company' ? '🏢' : post.tag === 'Product' ? '🎬' : post.tag === 'Engineering' ? '⚙️' : post.tag === 'Enterprise' ? '🏛️' : '💡'}
      </span>
    </div>

    <div style={{ padding: featured ? '36px 40px' : '28px 28px' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
        <span style={{
          background: `${post.tagColor}20`,
          border: `1px solid ${post.tagColor}40`,
          color: post.tagColor,
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '3px 12px',
          borderRadius: 50,
        }}>{post.tag}</span>
        <span style={{ color: 'rgba(240,244,255,0.35)', fontSize: '0.8rem' }}>{post.readTime}</span>
      </div>
      <h2 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: featured ? '1.6rem' : '1.1rem',
        fontWeight: 700,
        marginBottom: 14,
        lineHeight: 1.3,
        color: '#f0f4ff',
      }}>{post.title}</h2>
      <p style={{ color: 'rgba(240,244,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(240,244,255,0.35)', fontSize: '0.82rem' }}>{post.date}</span>
        <span style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}>Read →</span>
      </div>
    </div>
  </article>
);

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Vyzion</title>
        <meta name="description" content="Insights, updates, and deep-dives from the Vyzion team on AI, video, and the future of digital experiences." />
      </Head>

      {/* Hero */}
      <section style={{ padding: '140px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,198,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#00c6ff', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>The Vyzion Blog</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: 24 }}>
            Ideas. <span className="grad">Insights.</span> Innovation.
          </h1>
          <p style={{ color: 'rgba(240,244,255,0.6)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Thoughts from the Vyzion team on AI, the future of digital experience, and what we're building.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} featured={false} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'rgba(0,0,0,0.15)' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 16 }}>Stay in the <span className="grad">loop</span></h2>
        <p style={{ color: 'rgba(240,244,255,0.6)', marginBottom: 36 }}>Get the latest from Vyzion delivered to your inbox.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 480, margin: '0 auto' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              minWidth: 220,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 50,
              padding: '14px 24px',
              color: '#f0f4ff',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
          <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
        </div>
      </section>
    </>
  );
}
