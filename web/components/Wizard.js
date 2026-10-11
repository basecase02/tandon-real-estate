'use client';
import { useState } from 'react';
import EnquiryForm from './EnquiryForm';
import { Arrow, Left } from './Icons';
import { suburbs } from '@/lib/data';

const steps = [
  { q: 'What would you like to do?', key: 'goal', opts: ['Purchase', 'Rent', 'Sell', 'Evaluation', 'Mortgage', 'Information'] },
  { q: 'I’m a…', key: 'who', opts: ['Property owner', 'First home buyer', 'Investor', 'Tenant', 'Real estate agent'] },
  { q: 'What type of property?', key: 'type', opts: ['House', 'Townhouse', 'Apartment', 'Land', 'Acreage / Lifestyle', 'Retail'] },
  { q: 'Where are you looking?', key: 'where', opts: suburbs },
];

export default function Wizard() {
  const [s, setS] = useState(0);
  const [a, setA] = useState({});
  const done = s >= steps.length;
  const st = steps[s];
  return (
    <div className="wizard">
      <div className="progress"><i style={{ width: `${((s + (done ? 1 : 0)) / (steps.length + 1)) * 100 + 8}%` }} /></div>
      {!done ? (
        <div key={s} style={{ animation: 'capIn .6s var(--ease)' }}>
          <div className="eyebrow">Step {s + 1} of {steps.length + 1}</div>
          <h2>{st.q}</h2>
          <div className="opts">{st.opts.map(o => <button key={o} className={`opt${a[st.key] === o ? ' on' : ''}`} onClick={() => { setA({ ...a, [st.key]: o }); setTimeout(() => setS(s + 1), 220); }}>{o}</button>)}</div>
          <div className="wiz-nav">
            <button className="btn btn-ghost" disabled={!s} onClick={() => setS(s - 1)} style={{ opacity: s ? 1 : .4 }}><Left /> Back</button>
            {a[st.key] && <button className="btn btn-brand" onClick={() => setS(s + 1)}>Continue <Arrow /></button>}
          </div>
        </div>
      ) : (
        <div style={{ animation: 'capIn .6s var(--ease)' }}>
          <div className="eyebrow">Final step</div>
          <h2>Almost there.</h2>
          <p className="lead" style={{ marginBottom: 26 }}>{Object.values(a).join(' · ')}</p>
          <EnquiryForm cta="Submit" />
          <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => setS(s - 1)}><Left /> Back</button>
        </div>
      )}
    </div>
  );
}
