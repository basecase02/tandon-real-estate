import Image from '@/components/Img';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog — Property Guides & Insights', description: 'Property appraisal tips, pre-approval guides and due diligence checklists from Tandon Real Estate.', alternates: { canonical: '/blog' } };

export default function Blog() {
  return (
    <>
      <PageHeader crumbs={[['Blog']]} eyebrow="Get to know" title={<>Guides for smarter <em>property</em> decisions.</>} />
      <section className="auto" style={{ paddingTop: 0 }}>
        <div className="wrap grid3">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post rv">
              <div className="p-ph"><Image src={p.img} alt={p.title} fill sizes="(max-width:700px) 100vw, 33vw" /></div>
              <div className="p-bd"><div className="eyebrow">by Prashant Tandon</div><h3>{p.title}</h3><p className="muted">{p.excerpt}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
