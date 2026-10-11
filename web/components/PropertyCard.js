import Image from '@/components/Img';
import Link from 'next/link';
import { Bed, Bath, Car, Area, Arrow } from './Icons';

// Pinterest-style pin: image-first, rounded, varying aspect ratio.
export default function PropertyCard({ p, ratio }) {
  return (
    <Link href={`/property/${p.slug}`} className="pin">
      <div className="pin-ph" style={{ aspectRatio: ratio || '4/3' }}>
        <Image src={p.img} alt={`${p.title}, ${p.suburb}`} fill sizes="(max-width:640px) 90vw, (max-width:1000px) 50vw, 33vw" />
        <span className="chip glass">{p.status === 'Lease' ? 'For Lease' : 'For Sale'}</span>
        <div className="pin-over"><span className="pin-price">{p.price}</span><span className="pin-go"><Arrow /></span></div>
      </div>
      <div className="pin-bd">
        <h3>{p.title}</h3>
        <div className="muted">{p.suburb} · {p.type}</div>
        <div className="feats">
          {p.beds && <span><Bed />{p.beds}</span>}{p.baths && <span><Bath />{p.baths}</span>}{p.cars && <span><Car />{p.cars}</span>}{p.land && <span><Area />{p.land}</span>}
        </div>
      </div>
    </Link>
  );
}
