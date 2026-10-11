import Image from '@/components/Img';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import { Arrow, Check } from '@/components/Icons';
import { team } from '@/lib/data';

export const metadata = { title: 'About Us — Real Estate Agency in Melbourne', description: 'Tandon Real Estate is a family-owned agency based in Werribee, established in 2020. Meet Prashant Tandon and our team of experts.', alternates: { canonical: '/real-estate-agency-in-melbourne' } };

export default function About() {
  return (
    <>
      <PageHeader crumbs={[['About Us']]} eyebrow="About Tandon Real Estate" title={<>Diligent, honest, and acting with <em>integrity.</em></>} img="/images/office.jpg"
        lead="A family-owned business based in Werribee — one of the most sought-after markets for first time owners, upgraders and new migrants." />
      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow rv">Our story</div>
            <h2 className="rv">Built in tough times, for our <em>community.</em></h2>
          </div>
          <div>
            <p className="lead rv">Our company was established in 2020, in tough market conditions — a financial crisis amid Covid-19 lockdowns, where people lost jobs and loved ones. We wanted to start our own journey in business and contribute to our community in a positive manner.</p>
            <p className="lead rv" style={{ marginTop: 18 }}>We have over 30 years of experience in understanding our clients’ needs and circumstances. Our goal is to achieve an excellent result and to act in your best interest, always.</p>
            <ul className="ticks rv">
              <li><Check />A long-established track record of outstanding client relationships</li>
              <li><Check />The highest level of service delivery</li>
              <li><Check />Open for business — ready to list and sell in Melbourne’s booming market</li>
            </ul>
            <Link href="/speak-to-an-expert" className="btn btn-brand rv">Speak to an expert <Arrow /></Link>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="shead"><div><div className="eyebrow rv">Meet our experts</div><h2 className="rv">The people behind <em>the results.</em></h2></div></div>
          <div className="team">
            {team.map(m => (
              <article className="member rv" key={m.name}>
                <div className="m-ph"><Image src={m.img} alt={`${m.name}, ${m.role}`} fill sizes="(max-width:700px) 100vw, 25vw" /></div>
                <div className="m-bd"><h3>{m.name}</h3><div className="role">{m.role}</div><p className="muted">{m.bio}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
