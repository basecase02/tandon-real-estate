'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (location.search.includes('static')) document.documentElement.classList.add('no-anim'); else document.documentElement.classList.add('js');
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    const watch = root => root.querySelectorAll?.('.rv:not(.in-view),.rv-img:not(.in-view)').forEach((el, i) => { el.style.transitionDelay = (i % 5) * 70 + 'ms'; io.observe(el); });
    watch(document);
    const mo = new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && watch(n))));
    mo.observe(document.body, { childList: true, subtree: true });
    // pointer glow + parallax
    const mv = e => { const t = e.target.closest?.('.glow'); if (!t) return; const r = t.getBoundingClientRect(); t.style.setProperty('--mx', `${e.clientX - r.left}px`); t.style.setProperty('--my', `${e.clientY - r.top}px`); };
    const plx = [...document.querySelectorAll('[data-plx]')];
    let raf = 0;
    const tick = () => { raf = 0; const vh = innerHeight; plx.forEach(el => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; const p = (r.top + r.height / 2 - vh / 2) / vh; el.style.transform = `translate3d(0,${p * -(+el.dataset.plx || 60)}px,0) scale(1.15)`; }); };
    const sc = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('pointermove', mv, { passive: true }); window.addEventListener('scroll', sc, { passive: true }); window.addEventListener('resize', sc);
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener('pointermove', mv); window.removeEventListener('scroll', sc); window.removeEventListener('resize', sc); };
  }, [path]);
  return null;
}
