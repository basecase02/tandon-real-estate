import { Fraunces, Manrope } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import WhatsApp from '@/components/WhatsApp';
import { site } from '@/lib/data';
import './globals.css';

const serif = Fraunces({ subsets: ['latin'], axes: ['opsz', 'SOFT'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Real Estate Agency in Werribee, Point Cook, Melbourne | Tandon Real Estate', template: '%s | Tandon Real Estate' },
  description: site.description,
  keywords: ['real estate agent Werribee', 'real estate Point Cook', 'free property appraisal Melbourne', 'land for sale Tarneit', 'new land developments Melbourne', 'Tandon Real Estate', 'Prashant Tandon'],
  alternates: { canonical: '/' },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icon.png` },
  openGraph: { type: 'website', locale: 'en_AU', siteName: site.name, title: 'Tandon Real Estate — Your Local Real Estate Agency in Melbourne', description: site.description, images: ['/images/hero-home.jpg'] },
  twitter: { card: 'summary_large_image', site: '@real_tandon' },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#f4f1ea' };

const org = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: site.name, url: site.url, logo: `${site.url}/images/logo.png`, image: `${site.url}/images/hero-home.jpg`,
  telephone: site.phone, email: site.email, foundingDate: '2020', founder: { '@type': 'Person', name: 'Prashant Tandon' },
  address: [
    { '@type': 'PostalAddress', streetAddress: '118/1 Queens Road', addressLocality: 'Melbourne', addressRegion: 'VIC', postalCode: '3004', addressCountry: 'AU' },
    { '@type': 'PostalAddress', streetAddress: '25 Cheyne St', addressLocality: 'Werribee', addressRegion: 'VIC', postalCode: '3030', addressCountry: 'AU' },
  ],
  areaServed: ['Werribee', 'Point Cook', 'Tarneit', 'Wyndham Vale', 'Manor Lakes', 'Melbourne'],
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
        <Reveal />
      </body>
    </html>
  );
}
