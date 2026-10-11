import Image from '@/components/Img';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Spotlight from '@/components/Spotlight';
import Carousel from '@/components/Carousel';
import PropertyCard from '@/components/PropertyCard';
import Moodboard from '@/components/Moodboard';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { Arrow, Check } from '@/components/Icons';
import { listings, posts, team } from '@/lib/data';

export const metadata = { alternates: { canonical: '/' } };

const by = s => listings.find(l => l.slug === s);
const latest = ['42-millbrook-drive-wyndham-vale-vic', '9-armadale-court-tarneit-vic', '22-eltham-parade-manor-lakes-vic'].map(by);
const spotlight = ['9-armadale-court-tarneit-vic', '42-millbrook-drive-wyndham-vale-vic', '75-curletts-road-lara-vic', '22-eltham-parade-manor-lakes-vic'].map(by);
const services = [
  ['/property-appraisal', '/images/appraisal.jpg', 'Property appraisal', 'Free, no obligation — in person or virtual.'],
  ['/property-appraisal', '/images/banner.jpg', 'Rental appraisal', 'Know what your investment should earn.'],
  ['/property-appraisal', '/images/contact-bg.jpg', 'Commercial appraisal', 'Market & rental value for commercial assets.'],
  ['/new-land-developments', '/images/land.jpg', 'New land developments', 'Estates & releases across Melbourne’s west.'],
];
const steps = [
  ['Assessment', 'Size, condition, fixtures and renovations.'],
  ['Location', 'Schools, shops, transport and street appeal.'],
  ['Recent sales', 'What sold nearby in the last 90 days.'],
  ['Price guide', 'A clear figure plus tips to add value.'],
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services strip */}
      <section className="auto tight">
        <div className="wrap svc-row swipe">
          {services.map(([href, img, t, d]) => (
            <Link href={href} className="svc-tile" key={t}>
              <span className="svc-img"><Image src={img} alt="" fill sizes="120px" /></span>
              <span><strong>{t}</strong><small>{d}</small></span>
              <Arrow width={16} />
            </Link>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="auto">
        <div className="wrap">
          <div className="shead"><h2>Latest listings</h2><Link href="/properties" className="link">View all {listings.length} properties <Arrow width={16} /></Link></div>
          <div className="grid3 swipe">{latest.map(p => <PropertyCard key={p.slug} p={p} />)}</div>
          <div className="center"><Link href="/properties" className="btn btn-dark">View all {listings.length} properties <Arrow /></Link></div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="auto paper">
        <div className="wrap">
          <div className="shead"><h2>Featured homes</h2><span className="muted">Hand-picked by Prashant</span></div>
          <Spotlight items={spotlight} />
        </div>
      </section>

      {/* About + process */}
      <section className="auto">
        <div className="wrap about">
          <div className="portrait rv-img">
            <Image src="/images/prashant-cutout.png" alt="Prashant Tandon, Director of Tandon Real Estate" fill sizes="(max-width:1060px) 100vw, 42vw" />
            <div className="float-card glass fc2"><b>Prashant Tandon</b><small>Director · Licensed Estate Agent</small></div>
          </div>
          <div>
            <h2>Family-owned. Werribee-based. Diligent, honest, and acting with integrity.</h2>
            <p className="lead">Tandon Real Estate was established in 2020 in one of Melbourne’s most sought-after markets for first-home buyers, upgraders and new migrants. We focus on finding, researching and evaluating great real estate for living and investing — and on relationships that last well beyond settlement.</p>
            <ul className="ticks"><li><Check />Free, no-obligation appraisals</li><li><Check />Sales, leasing & property management</li><li><Check />New land & off-the-plan opportunities</li></ul>
            <h3 className="sub-h">How your free appraisal works</h3>
            <ol className="steps2 swipe">{steps.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ol>
            <div className="btn-row"><Link href="/property-appraisal" className="btn btn-brand">Book my appraisal <Arrow /></Link><Link href="/real-estate-agency-in-melbourne" className="btn btn-ghost">Meet the team</Link></div>
          </div>
        </div>
      </section>

      {/* Moodboard */}
      <section className="auto paper">
        <div className="wrap">
          <div className="shead"><h2>Inside our homes</h2><span className="muted">Real rooms from Tandon listings — tap to view</span></div>
          <Moodboard />
        </div>
      </section>

      <Testimonials />

      {/* Team */}
      <section className="auto">
        <div className="wrap">
          <div className="shead"><h2>Our experts</h2><Link href="/real-estate-agency-in-melbourne" className="link">About Tandon <Arrow width={16} /></Link></div>
          <div className="team swipe">
            {team.map(m => <article className="member" key={m.name}><div className="m-ph"><Image src={m.img} alt={`${m.name}, ${m.role}`} fill sizes="(max-width:700px) 50vw, 25vw" /></div><div className="m-bd"><h3>{m.name}</h3><div className="role">{m.role}</div></div></article>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band auto">
        <div className="cta-card">
          <Image src="/images/hero-home.jpg" alt="" fill sizes="100vw" /><div className="hero-shade" />
          <div className="cta-in">
            <div><h2>What’s your home worth?</h2><p>Request a free market appraisal. We’ll be in touch within one business day.</p></div>
            <EnquiryForm cta="Request appraisal" compact />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="auto">
        <div className="wrap">
          <div className="shead"><h2>Guides & insights</h2><Link href="/blog" className="link">All articles <Arrow width={16} /></Link></div>
          <div className="grid3 swipe">
            {posts.slice(0, 3).map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="post"><div className="p-ph"><Image src={p.img} alt={p.title} fill sizes="(max-width:700px) 100vw, 33vw" /></div><div className="p-bd"><h3>{p.title}</h3><p className="muted">{p.excerpt}</p></div></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
