import PageHeader from '@/components/PageHeader';
import ListingsGrid from '@/components/ListingsGrid';
import { listings } from '@/lib/data';

export const metadata = { title: 'Properties for Sale & Lease', description: 'Houses, land, acreage and apartments for sale and lease across Werribee, Tarneit, Manor Lakes, Wyndham Vale, Lara and Melbourne.', alternates: { canonical: '/properties' } };

export default function Properties() {
  return (
    <>
      <PageHeader crumbs={[['Properties']]} eyebrow={`${listings.length} listings`} title={<>Discover our <em>properties.</em></>}
        lead="Find out the finest selection of carefully selected, first-class and exclusive properties available on the market." />
      <section className="auto" style={{ paddingTop: 0 }}>
        <div className="wrap"><ListingsGrid /></div>
      </section>
    </>
  );
}
