'use client';
import Image from '@/components/Img';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { menu, site } from '@/lib/data';
import { Phone } from './Icons';

// Pages whose first screen is a dark full-bleed header → light nav at top
const LIGHT = new Set(['/real-estate-agency-in-melbourne', '/property-appraisal', '/new-land-developments', '/properties', '/speak-to-an-expert', '/blog']);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const light = LIGHT.has(path) && !scrolled && !open;
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  const active = h => (h === '/' ? path === '/' : path.startsWith(h));
  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}${light ? ' light' : ''}`}>
        <div className="nav-in">
          <Link href="/" className="brand" aria-label={`${site.name} — Home`}>
            <Image src="/images/logo.png" alt={site.name} width={82} height={62} priority className="lg-dark" />
            <Image src="/images/logo-footer.png" alt="" width={82} height={64} priority className="lg-light" aria-hidden />
          </Link>
          <nav className="links" aria-label="Main">
            {menu.slice(1).map(m => <Link key={m.href} href={m.href} className={active(m.href) ? 'active' : ''}>{m.label}</Link>)}
          </nav>
          <div className="nav-r">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="nav-tel"><Phone width={15} height={15} />{site.phone}</a>
            <Link href="/get-started" className="btn btn-brand nav-cta">Get Started</Link>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
          </div>
        </div>
      </header>
      <div className={`overlay${open ? ' show' : ''}`} aria-hidden={!open} onClick={() => setOpen(false)}>
        <div className="ov-panel" onClick={e => e.stopPropagation()}>
        <nav className="ov-links">
          {menu.map((m, i) => <Link key={m.href} href={m.href} style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }} className={active(m.href) ? 'active' : ''}>{m.label}</Link>)}
        </nav>
        <div className="ov-foot">
          <Link href="/get-started" className="btn btn-brand">Get Started</Link>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn btn-ghost">{site.phone}</a>
        </div>
        </div>
      </div>
    </>
  );
}
