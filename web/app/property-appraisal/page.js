import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import { Check } from '@/components/Icons';

export const metadata = { title: 'Free Property Appraisal in Werribee & Melbourne', description: 'Discover how much your home is worth. Book a no-obligation free property appraisal with Tandon Real Estate — in person or virtually.', alternates: { canonical: '/property-appraisal' } };

const points = [
  ['A comprehensive assessment of your property', 'Size, bedrooms and bathrooms, condition, fixtures and fittings, and the quality of any renovations.'],
  ['Assessment of your property’s location', 'Appeal based on proximity to amenities, schools, shops and desirable locations.'],
  ['Recent local real estate sales', 'What similar properties are for sale and what sold in the last 90 days — and for how much.'],
  ['Local property buyer insights', 'What local buyers want, what they’ll pay more for, and specific ways to add value.'],
];

export default function Appraisal() {
  return (
    <>
      <PageHeader crumbs={[['Property Appraisal']]} eyebrow="No obligation" title={<>Discover what your home is <em>worth.</em></>} img="/images/appraisal.jpg"
        lead="A property appraisal is an estimate of price for your property in the current market. It’s an excellent way of understanding your property’s potential market value at that point in time." />
      <section>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <div className="eyebrow rv">What you get</div>
            <h2 className="rv">A price guide built on <em>real data.</em></h2>
            <ul className="ticks rv">{points.map(([t, d]) => <li key={t}><Check /><span><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{t}</strong><br />{d}</span></li>)}</ul>
            <p className="lead rv">We believe our job is not just to sell your property — it is about selling your property for a premium price, and creating a relationship that lasts a lifetime.</p>
          </div>
          <EnquiryForm className="rv" title="No obligation free appraisal" sub="We’ll be in touch within one business day." cta="Request for appraisal" requirement />
        </div>
      </section>
    </>
  );
}
