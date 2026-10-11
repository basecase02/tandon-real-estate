import Image from '@/components/Img';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow } from '@/components/Icons';
import { posts, site } from '@/lib/data';

export const generateStaticParams = () => posts.map(p => ({ slug: p.slug }));
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find(x => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: 'article', images: [p.img] } } : {};
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = posts.find(x => x.slug === slug);
  if (!p) notFound();
  const ld = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt, image: `${site.url}${p.img}`, author: { '@type': 'Person', name: 'Prashant Tandon' }, publisher: { '@type': 'Organization', name: site.name } };
  return (
    <section className="auto" style={{ paddingTop: 130 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="wrap article">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link></div>
        <div className="eyebrow">by Prashant Tandon</div>
        <h1 style={{ fontSize: 'clamp(2.4rem,5.4vw,4.4rem)', marginTop: 16 }}>{p.title}</h1>
        <div className="cover"><Image src={p.img} alt={p.title} fill priority sizes="760px" /></div>
        {p.body.map((b, i) => Array.isArray(b) ? <div key={i}><h2>{b[0]}</h2><p>{b[1]}</p></div> : <p key={i}>{b}</p>)}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          <Link href="/property-appraisal" className="btn btn-brand">Book a free appraisal <Arrow /></Link>
          <Link href="/blog" className="btn btn-ghost">More articles</Link>
        </div>
      </article>
    </section>
  );
}
