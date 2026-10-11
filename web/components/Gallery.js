'use client';
import Image from '@/components/Img';
import { useEffect, useState } from 'react';
import { Left, Right, Close, Expand } from './Icons';

export default function Gallery({ images, alt }) {
  const [i, setI] = useState(0);
  const [full, setFull] = useState(false);
  const n = images.length;
  const prev = () => setI(x => (x - 1 + n) % n), next = () => setI(x => (x + 1) % n);
  useEffect(() => {
    const k = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') setFull(false); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  });
  useEffect(() => { document.body.style.overflow = full ? 'hidden' : ''; }, [full]);
  return (
    <div className="gallery">
      <div className="g-main">
        {images.map((src, k) => <div key={src} className={`g-slide${k === i ? ' on' : ''}`}><Image src={src} alt={`${alt} — photo ${k + 1}`} fill priority={k === 0} sizes="(max-width:1000px) 100vw, 70vw" /></div>)}
        {n > 1 && <><button className="rbtn g-l" onClick={prev} aria-label="Previous photo"><Left /></button><button className="rbtn g-r" onClick={next} aria-label="Next photo"><Right /></button></>}
        <button className="chip glass g-full" onClick={() => setFull(true)}><Expand width={14} height={14} /> {i + 1} / {n}</button>
      </div>
      {n > 1 && <div className="g-thumbs">{images.map((src, k) => <button key={src} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><Image src={src} alt="" fill sizes="120px" /></button>)}</div>}
      {full && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setFull(false)}>
          <div className="lb-img" onClick={e => e.stopPropagation()}><Image src={images[i]} alt={alt} fill sizes="100vw" style={{ objectFit: 'contain' }} /></div>
          <button className="rbtn lb-x" onClick={() => setFull(false)} aria-label="Close"><Close /></button>
          {n > 1 && <><button className="rbtn g-l" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous"><Left /></button><button className="rbtn g-r" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next"><Right /></button></>}
        </div>
      )}
    </div>
  );
}
