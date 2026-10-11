import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import { Phone, Mail, Pin } from '@/components/Icons';
import { site } from '@/lib/data';

export const metadata = { title: 'Contact Us — Speak to an Expert', description: 'Contact Tandon Real Estate in Werribee and Melbourne. Call Prashant on +61 434 435 559 or send us a message.', alternates: { canonical: '/speak-to-an-expert' } };

export default function Contact() {
  const tel = n => `tel:${n.replace(/\s/g, '')}`;
  return (
    <>
      <PageHeader crumbs={[['Contact Us']]} eyebrow="Speak to an expert" title={<>We’re open for <em>business.</em></>} img="/images/contact-bg.jpg"
        lead="Ready to list your property and sell it? Have a question about buying, renting or investing? Our team is here to help." />
      <section className="auto" style={{ paddingTop: 20 }}>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <div className="eyebrow rv">For enquiries</div>
            <h2 className="rv">{site.legal}</h2>
            <div className="ccards">
              <a className="ccard rv" href={tel(site.phone)}><span className="ic"><Phone /></span><div><small>Phone</small><span>{site.phone}</span></div></a>
              <a className="ccard rv" href={tel(site.phone2)}><span className="ic"><Phone /></span><div><small>Phone</small><span>{site.phone2}</span></div></a>
              <a className="ccard rv" href={`mailto:${site.email}`}><span className="ic"><Mail /></span><div><small>Email</small><span>{site.email}</span></div></a>
              {site.offices.map(o => <div className="ccard rv" key={o.label}><span className="ic"><Pin /></span><div><small>{o.label}</small><span>{o.line}</span></div></div>)}
            </div>
          </div>
          <EnquiryForm className="rv" title="Send us a message" cta="Submit" />
        </div>
      </section>
      <section className="auto" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ height: 420 }}>
          <iframe className="map" title="Tandon Real Estate Werribee office map" loading="lazy" src="https://www.google.com/maps?q=25+Cheyne+St+Werribee+VIC+3030&output=embed" />
        </div>
      </section>
    </>
  );
}
