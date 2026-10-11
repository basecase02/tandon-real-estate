import Image from '@/components/Img';
import Link from 'next/link';

export default function PageHeader({ eyebrow, title, lead, img, crumbs = [], children }) {
  return (
    <section className={`ph${img ? '' : ' plain'}`}>
      {img && <div className="ph-img"><Image src={img} alt="" fill priority sizes="100vw" quality={85} data-plx="60" /></div>}
      <div className="hero-shade" /><div className="hero-grain" />
      <div className="wrap ph-body">
        <div className="crumbs rv"><Link href="/">Home</Link>{crumbs.map(([l, h]) => <span key={l}> / {h ? <Link href={h}>{l}</Link> : l}</span>)}</div>
        <div className="eyebrow light rv">{eyebrow}</div>
        <h1 className="rv">{title}</h1>
        {lead && <p className="lead rv">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
