'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import PropertyCard from './PropertyCard';
import { listings } from '@/lib/data';

const types = ['All', 'House', 'Land', 'Acreage', 'Apartment'];

function Grid() {
  const sp = useSearchParams();
  const type = sp.get('type') || 'All', q = sp.get('q') || '';
  const items = listings.filter(l => (type === 'All' || l.type === type) && (!q || l.suburb.toLowerCase().includes(q.toLowerCase())));
  const href = t => `/properties/${t === 'All' ? '' : `?type=${t}`}${q && t !== 'All' ? `&q=${encodeURIComponent(q)}` : ''}`;
  return (
    <>
      <nav className="filters" aria-label="Filter properties">
        {types.map(t => <Link key={t} href={href(t)} className={type === t ? 'on' : ''} scroll={false}>{t}</Link>)}
      </nav>
      {q && <p className="muted" style={{ marginBottom: 18 }}>Showing {items.length} result{items.length === 1 ? '' : 's'} in {q} · <Link href="/properties/">clear</Link></p>}
      {items.length
        ? <div className="grid3">{items.map(p => <PropertyCard key={p.slug} p={p} />)}</div>
        : <p className="lead">No listings in {q} right now — <Link href="/get-started/" style={{ color: 'var(--brand)' }}>register your interest</Link> and we’ll let you know first.</p>}
    </>
  );
}

export default function ListingsGrid() {
  return <Suspense fallback={<div className="grid3">{listings.map(p => <PropertyCard key={p.slug} p={p} />)}</div>}><Grid /></Suspense>;
}
