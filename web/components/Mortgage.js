'use client';
import { useState } from 'react';

const fmt = n => n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

export default function Mortgage({ price }) {
  const guess = Number((String(price).match(/\$([\d,]+)/) || [])[1]?.replace(/,/g, '')) || 650000;
  const [p, setP] = useState(guess);
  const [dep, setDep] = useState(20);
  const [rate, setRate] = useState(6.2);
  const [yrs, setYrs] = useState(30);
  const loan = p * (1 - dep / 100), r = rate / 100 / 12, n = yrs * 12;
  const m = r ? loan * r / (1 - Math.pow(1 + r, -n)) : loan / n;
  const Row = ({ l, v, set, min, max, step, out }) => (
    <label className="mrow"><div><span>{l}</span><b>{out}</b></div><input type="range" min={min} max={max} step={step} value={v} onChange={e => set(+e.target.value)} /></label>
  );
  return (
    <div className="mort glass">
      <div className="mort-h"><small>Mortgage calculator</small><b>{fmt(m)}<span>/ month</span></b></div>
      <Row l="Property price" v={p} set={setP} min={200000} max={3000000} step={10000} out={fmt(p)} />
      <Row l="Deposit" v={dep} set={setDep} min={5} max={50} step={1} out={`${dep}% · ${fmt(p * dep / 100)}`} />
      <Row l="Interest rate" v={rate} set={setRate} min={3} max={10} step={0.05} out={`${rate.toFixed(2)}% p.a.`} />
      <Row l="Loan term" v={yrs} set={setYrs} min={5} max={30} step={1} out={`${yrs} years`} />
      <p className="muted" style={{ fontSize: '.76rem' }}>Estimate only — principal &amp; interest on a loan of {fmt(loan)}. Speak to a lender for a personalised quote.</p>
    </div>
  );
}
