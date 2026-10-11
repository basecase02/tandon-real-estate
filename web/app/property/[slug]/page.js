import Image from '@/components/Img';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';
import PropertyCard from '@/components/PropertyCard';
import Carousel from '@/components/Carousel';
import Mortgage from '@/components/Mortgage';
import { Check, Phone } from '@/components/Icons';
import { listings, site } from '@/lib/data';

export const generateStaticParams = () => listings.map(l => ({ slug: l.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = listings.find(l => l.slug === slug);
  if (!p) return {};
  const title = `${p.title}, ${p.suburb}`;
  return { title, description: `${p.blurb} Contact Prashant Tandon on ${site.phone}.`, alternates: { canonical: `/property/${p.slug}` }, openGraph: { title, images: [p.img] } };
}

export default async function Property({ params }) {
  const { slug } = await params;
  const p = listings.find(l => l.slug === slug);
  if (!p) notFound();
  const facts = [['Bedrooms', p.beds], ['Bathrooms', p.baths], ['Garages', p.cars], ['Land', p.land], ['Built', p.year]].filter(([, v]) => v);
  const more = listings.filter(l => l.slug !== p.slug);
  const ld = { '@context': 'https://schema.org', '@type': p.type === 'Land' ? 'Place' : 'SingleFamilyResidence', name: `${p.title}, ${p.suburb}`, description: p.blurb, image: p.gallery,
    ...(p.beds && { numberOfRooms: p.beds }), address: { '@type': 'PostalAddress', streetAddress: p.title, addressLocality: p.suburb.replace(' VIC', ''), addressRegion: 'VIC', addressCountry: 'AU' } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="auto" style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="wrap" style={{ width: 'min(1280px,100% - 32px)' }}>
          <div className="crumbs"><Link href="/">Home</Link> / <Link href="/properties">Properties</Link> / {p.title}</div>
          <Gallery images={p.gallery} alt={`${p.title}, ${p.suburb}`} />
        </div>
      </section>
      <section className="auto" style={{ paddingTop: 20 }}>
        <div className="wrap pd">
          <div>
            <div className="eyebrow rv">For {p.status} · {p.type}</div>
            <h1 className="rv">{p.title}</h1>
            <p className="lead rv">{p.suburb}</p>
            <div className="price-tag rv">{p.price}</div>
            <div className="facts rv">{facts.map(([k, v]) => <div key={k}><b>{v}</b><small>{k}</small></div>)}</div>
            <h2 className="rv" style={{ fontSize: '2.2rem' }}>About this property</h2>
            <p className="lead rv">{p.blurb}</p>
            {p.features && <ul className="ticks rv">{p.features.map(f => <li key={f}><Check />{f}</li>)}</ul>}
            <h2 className="rv" style={{ fontSize: '2.2rem', marginTop: 40 }}>Estimate your repayments</h2>
            <div className="rv"><Mortgage price={p.price} /></div>
          </div>
          <aside className="sticky">
            <div className="agent rv">
              <div className="a-ph"><Image src="/images/team-prashant.jpg" alt="Prashant Tandon" fill sizes="58px" /></div>
              <div><strong>Prashant Tandon</strong><span className="muted">Director, Licensed Estate Agent</span></div>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="rbtn" style={{ marginLeft: 'auto' }} aria-label="Call Prashant"><Phone /></a>
            </div>
            <EnquiryForm className="rv" title="Schedule a tour" cta="Send enquiry" compact />
          </aside>
        </div>
      </section>
      <section className="auto paper">
        <div className="wrap">
          <div className="shead"><div><div className="eyebrow">Similar listings</div><h2>You may also <em>like.</em></h2></div></div>
          <Carousel label="property" className="three">{more.map(m => <PropertyCard key={m.slug} p={m} />)}</Carousel>
        </div>
      </section>
    </>
  );
}
