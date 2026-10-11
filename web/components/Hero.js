import Image from '@/components/Img';
import Link from 'next/link';
import { listings, photos, suburbs, testimonials } from '@/lib/data';
import { Arrow, Star } from './Icons';

const RATIOS = ['4/5', '1/1', '3/4', '5/6', '4/5', '1/1'];
const by = s => listings.find(l => l.slug === s);

function Column({ items, i }) {
  const cards = [...items, ...items]; // duplicated for a seamless loop
  return (
    <div className={`col c${i}`}>
      <div className="col-in">
        {cards.map(({ src, slug }, k) => { const p = by(slug); return (
          <Link href={`/property/${slug}`} className="hcard" key={k} tabIndex={-1} style={{ aspectRatio: RATIOS[(k + i) % RATIOS.length] }}>
            <Image src={src} alt="" fill sizes="(max-width:700px) 40vw, 18vw" priority={k < 2} />
            <span className="hcap"><strong>{p.title}</strong><small>{p.suburb}</small></span>
          </Link>); })}
      </div>
    </div>
  );
}

export default function Hero() {
  const cols = [photos.filter((_, k) => k % 3 === 0), photos.filter((_, k) => k % 3 === 1), photos.filter((_, k) => k % 3 === 2)];
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-l">
          <div className="eyebrow">Werribee · Point Cook · Tarneit · Manor Lakes</div>
          <h1>Find your place in <em>Melbourne’s west.</em></h1>
          <p>Tandon Real Estate is a family-owned agency in Werribee — honest advice from listing to sold, and a free, no-obligation appraisal to get you started.</p>
          <form className="search" action={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/properties/`}>
            <label><small>Suburb</small><select name="q" defaultValue="Werribee">{suburbs.map(x => <option key={x}>{x}</option>)}</select></label>
            <label><small>Type</small><select name="type" defaultValue="All"><option>All</option><option>House</option><option>Land</option><option>Acreage</option><option>Apartment</option></select></label>
            <button className="btn btn-brand">Search <Arrow /></button>
            <Link href="/property-appraisal" className="btn btn-ghost">Free appraisal</Link>
          </form>
          <ul className="trust">
            <li><b>Est. 2020</b><span>Family-owned, Werribee</span></li>
            <li><b>30+ yrs</b><span>Combined experience</span></li>
            <li><b>20+</b><span>Suburbs served</span></li>
            <li><b><Star width={13} height={13} /> 5.0</b><span>{testimonials.length} client reviews</span></li>
          </ul>
        </div>
        <div className="collage" aria-hidden>{cols.map((c, i) => <Column items={c} i={i} key={i} />)}</div>
      </div>
    </section>
  );
}
