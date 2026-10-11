'use client';
import { useState } from 'react';
import { suburbs } from '@/lib/data';
import { Arrow, Check } from './Icons';

export default function EnquiryForm({ title, sub, cta = 'Request', requirement = false, compact = false, className = '' }) {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className={`form glass done ${className}`}>
      <span className="ok"><Check width={26} height={26} /></span>
      <h3>Thank you.</h3><p className="muted">Prashant or a member of our team will be in touch shortly.</p>
    </div>
  );
  return (
    <form className={`form glass ${compact ? 'compact ' : ''}${className}`} onSubmit={e => { e.preventDefault(); setSent(true); }}>
      {title && <div className="form-h"><h3>{title}</h3>{sub && <p className="muted">{sub}</p>}</div>}
      <div className="f2">
        <label className="fl"><input required placeholder=" " name="first" /><span>First name</span></label>
        <label className="fl"><input placeholder=" " name="last" /><span>Last name</span></label>
      </div>
      <div className="f2">
        <label className="fl"><input required type="email" placeholder=" " name="email" /><span>Email</span></label>
        <label className="fl"><input type="tel" placeholder=" " name="mobile" /><span>Mobile</span></label>
      </div>
      <div className="f2">
        {requirement && <label className="fl sel"><select name="req" defaultValue="Sell">{['Purchase', 'Rent', 'Sell', 'Evaluation', 'Mortgage'].map(o => <option key={o}>{o}</option>)}</select><span>Requirement</span></label>}
        <label className="fl sel"><select name="suburb" defaultValue="Werribee">{suburbs.map(o => <option key={o}>{o}</option>)}</select><span>Suburb</span></label>
        {!requirement && <label className="fl"><input placeholder=" " name="postcode" inputMode="numeric" /><span>Postal code</span></label>}
      </div>
      {!compact && <label className="fl"><textarea placeholder=" " name="message" rows={3} /><span>Message</span></label>}
      <label className="consent"><input type="checkbox" required /><span>I consent to having this website store my submitted information.</span></label>
      <button className="btn btn-brand btn-block">{cta} <Arrow /></button>
    </form>
  );
}
