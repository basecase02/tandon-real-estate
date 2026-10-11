import Carousel from './Carousel';
import { testimonials } from '@/lib/data';
import { Star } from './Icons';

export default function Testimonials() {
  return (
    <section className="tst">
      <div className="wrap">
        <div className="shead"><h2>What clients say</h2><div className="rating"><div className="stars">{[...Array(5)].map((_, k) => <Star key={k} width={14} height={14} />)}</div><span>5.0 · {testimonials.length} reviews</span></div></div>
        <Carousel label="review" autoplay={6500} className="three">
          {testimonials.map(t => (
            <figure className="tcard" key={t.name}>
              <blockquote>“{t.text}”</blockquote>
              <figcaption><span className="avatar">{t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span><span><strong>{t.name}</strong><small>{t.role}</small></span></figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
