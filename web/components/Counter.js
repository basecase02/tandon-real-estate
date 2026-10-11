'use client';
import { useEffect, useRef, useState } from 'react';

// Renders the final value server-side, then counts up from 0 once scrolled into view.
export default function Counter({ to, suffix = '' }) {
  const [n, setN] = useState(to);
  const ref = useRef(null);
  useEffect(() => {
    let raf, start;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const step = ts => { start ??= ts; const p = Math.min((ts - start) / 1600, 1); setN(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <b ref={ref}>{n}{suffix}</b>;
}
