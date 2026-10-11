import Image from '@/components/Img';
import Link from 'next/link';
import { listings, photos } from '@/lib/data';

const RATIOS = ['3/4', '1/1', '4/5', '4/3', '3/4', '1/1', '5/6', '4/3', '3/4', '4/5', '1/1', '3/4'];
export default function Moodboard() {
  return (
    <div className="masonry wall">
      {photos.slice(0, 12).map(({ src, slug }, i) => { const p = listings.find(l => l.slug === slug); return (
        <Link href={`/property/${slug}`} className="m-item wall-pin" key={src + i} style={{ aspectRatio: RATIOS[i % RATIOS.length] }}>
          <Image src={src} alt={`${p.title}, ${p.suburb}`} fill sizes="(max-width:700px) 33vw, 16vw" />
          <span className="wall-cap"><strong>{p.title}</strong><small>{p.suburb}</small></span>
        </Link>); })}
    </div>
  );
}
