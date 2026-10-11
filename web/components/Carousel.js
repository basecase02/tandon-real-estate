'use client';
import { Children, useEffect, useRef, useState } from 'react';
import { Left, Right } from './Icons';

// Generic scroll-snap carousel: drag, arrows, dots, optional autoplay.
export default function Carousel({ children, label = 'item', autoplay = 0, dots = true, className = '' }) {
  const track = useRef(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = Children.toArray(children);
  const n = items.length;
  const step = () => { const el = track.current; const w = el.firstElementChild?.offsetWidth || 1; return w + (parseFloat(getComputedStyle(el).columnGap) || 0); };
  const to = k => track.current.scrollTo({ left: ((k % n) + n) % n * step(), behavior: 'smooth' });

  useEffect(() => {
    const el = track.current;
    const on = () => setI(Math.round(el.scrollLeft / step()));
    el.addEventListener('scroll', on, { passive: true });
    let down = false, sx = 0, sl = 0, moved = false;
    const md = e => { down = true; moved = false; sx = e.pageX; sl = el.scrollLeft; el.classList.add('drag'); };
    const mm = e => { if (!down) return; const dx = e.pageX - sx; if (Math.abs(dx) > 5) moved = true; el.scrollLeft = sl - dx; };
    const mu = () => { if (!down) return; down = false; el.classList.remove('drag'); };
    const click = e => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
    el.addEventListener('mousedown', md); window.addEventListener('mousemove', mm); window.addEventListener('mouseup', mu); el.addEventListener('click', click, true);
    return () => { el.removeEventListener('scroll', on); el.removeEventListener('mousedown', md); window.removeEventListener('mousemove', mm); window.removeEventListener('mouseup', mu); el.removeEventListener('click', click, true); };
  }, [n]);

  useEffect(() => {
    if (!autoplay || paused || location.search.includes('static')) return;
    const t = setTimeout(() => to(i + 1), autoplay);
    return () => clearTimeout(t);
  }, [i, paused, autoplay, n]);

  return (
    <div className={`crs ${className}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="crs-track" ref={track}>{items.map((c, k) => <div className="crs-item" key={k}>{c}</div>)}</div>
      <div className="crs-foot">
        {dots && <div className="crs-dots">{items.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => to(k)} aria-label={`${label} ${k + 1}`} />)}</div>}
        <div className="crs-ctl">
          <button className="rbtn" onClick={() => to(i - 1)} aria-label={`Previous ${label}`}><Left /></button>
          <span className="count">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          <button className="rbtn" onClick={() => to(i + 1)} aria-label={`Next ${label}`}><Right /></button>
        </div>
      </div>
    </div>
  );
}
