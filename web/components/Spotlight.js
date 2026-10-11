'use client';
import Image from '@/components/Img';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Arrow, Bed, Bath, Car, Area, Left, Right } from './Icons';

// Featured-property carousel: one listing at a time with its own gallery.
export default function Spotlight({ items }) {
  const [i, setI] = useState(0);
  const [g, setG] = useState(0);
  const [paused, setPaused] = useState(false);
  const p = items[i];
  useEffect(() => { setG(0); }, [i]);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => { if (g + 1 < Math.min(p.gallery.length, 4)) setG(g + 1); else setI((i + 1) % items.length); }, 3200);
    return () => clearTimeout(t);
  }, [g, i, paused, p, items.length]);
  return (
    <div className="spot" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="spot-media">
        {p.gallery.slice(0, 4).map((src, k) => <div key={src} className={`spot-img${k === g ? ' on' : ''}`}><Image src={src} alt={`${p.title} photo ${k + 1}`} fill sizes="(max-width:1000px) 100vw, 60vw" /></div>)}
        <div className="spot-thumbs">{p.gallery.slice(0, 4).map((src, k) => <button key={src} className={k === g ? 'on' : ''} onClick={() => setG(k)} aria-label={`Photo ${k + 1}`}><Image src={src} alt="" fill sizes="80px" /></button>)}</div>
        <span className="chip glass">Featured · For {p.status}</span>
      </div>
      <div className="spot-info" key={p.slug}>
        <div className="spot-top">
          <span className="count">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
          <div className="spot-ctl"><button className="rbtn" onClick={() => setI((i - 1 + items.length) % items.length)} aria-label="Previous property"><Left /></button><button className="rbtn" onClick={() => setI((i + 1) % items.length)} aria-label="Next property"><Right /></button></div>
        </div>
        <div className="spot-price">{p.price}</div>
        <h3>{p.title}</h3>
        <div className="muted">{p.suburb}</div>
        <p className="spot-blurb">{p.blurb}</p>
        <div className="feats">
          {p.beds && <span><Bed />{p.beds} Bed</span>}{p.baths && <span><Bath />{p.baths} Bath</span>}{p.cars && <span><Car />{p.cars} Car</span>}{p.land && <span><Area />{p.land}</span>}
        </div>
        <Link href={`/property/${p.slug}`} className="btn btn-brand" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>View property <Arrow /></Link>
      </div>
    </div>
  );
}
