import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import PropertyCard from '@/components/PropertyCard';
import { listings } from '@/lib/data';

export const metadata = { title: 'New Land Developments in Melbourne', description: 'Explore new land estates and land releases for sale in Melbourne — Metro North, Metro West and Metro South-East.', alternates: { canonical: '/new-land-developments' } };

export default function Land() {
  const land = listings.filter(l => l.type === 'Land');
  return (
    <>
      <PageHeader crumbs={[['New Land Development']]} eyebrow="Land releases" title={<>Build your future in <em>Melbourne.</em></>} img="/images/land.jpg"
        lead="Explore new land estates & land releases for sale in Melbourne, Victoria — with options across Metro North, Metro West and Metro South-East." />
      <section className="auto" style={{ background: 'var(--paper)' }}>
        <div className="wrap split">
          <div><div className="eyebrow rv">Why Melbourne</div><h2 className="rv">Top 3 most liveable city — <em>for a decade.</em></h2></div>
          <div>
            <p className="lead rv">Melbourne is Australia’s most cosmopolitan city, famous for its café lanes, sport and food. You get a vibrant mix of neighbourhoods that draws both long-term residents and visitors to Australia’s second-largest city.</p>
            <p className="lead rv" style={{ marginTop: 18 }}>Property investment possibilities abound in some of Melbourne’s most affordable districts. Whether you’re a knowledgeable investor or building a portfolio, explore these top-performing suburbs with rapid growth rates.</p>
          </div>
        </div>
      </section>
      <section className="auto">
        <div className="wrap">
          <div className="shead"><div><div className="eyebrow rv">Available now</div><h2 className="rv">Land for <em>sale.</em></h2></div></div>
          <div className="grid3">{land.map(p => <PropertyCard key={p.slug} p={p} />)}</div>
        </div>
      </section>
      <section>
        <div className="wrap split">
          <div><div className="eyebrow rv">Speak to our property experts</div><h2 className="rv">Looking to buy new land in <em>Melbourne?</em></h2></div>
          <EnquiryForm className="rv" cta="Request for appraisal" requirement />
        </div>
      </section>
    </>
  );
}
