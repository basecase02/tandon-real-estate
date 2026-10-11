import NextImage from 'next/image';
// Prepends the deployment base path (GitHub Pages sub-folder) to local image URLs.
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function Img({ src, ...props }) {
  return <NextImage src={typeof src === 'string' && src.startsWith('/') ? base + src : src} {...props} />;
}
