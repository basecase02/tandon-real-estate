import Image from '@/components/Img';
import Link from 'next/link';
import { menu, posts, site } from '@/lib/data';
import { Arrow } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-cta">
          <h2>Speak to a real estate expert today.</h2>
          <Link href="/speak-to-an-expert" className="btn btn-light">Speak to an expert <Arrow /></Link>
        </div>
        <div className="f-grid">
          <div className="f-brand">
            <Image src="/images/logo-footer.png" alt={site.name} width={120} height={94} />
            <p>{site.description}</p>
            <div className="socials">{Object.entries(site.social).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noopener noreferrer">{k}</a>)}</div>
          </div>
          <div><h4>Explore</h4>{menu.map(m => <Link key={m.href} href={m.href}>{m.label}</Link>)}</div>
          <div><h4>Get to know</h4>{posts.slice(1).map(p => <Link key={p.slug} href={`/blog/${p.slug}`}>{p.title}</Link>)}</div>
          <div>
            <h4>Contact</h4>
            {site.offices.map(o => <span key={o.label}>{o.line}</span>)}
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            <a href={`tel:${site.phone2.replace(/\s/g, '')}`}>{site.phone2}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="f-bar"><span>© {new Date().getFullYear()} {site.name} — All rights reserved.</span><span>Werribee · Point Cook · Melbourne</span></div>
      </div>
    </footer>
  );
}
