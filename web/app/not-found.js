import Link from 'next/link';
export default function NotFound() {
  return <section><div className="wrap"><div className="eyebrow">404</div><h1>This page has <em>moved on.</em></h1><p className="lead" style={{ margin: '20px 0 30px' }}>The page you’re looking for doesn’t exist — or it may have sold.</p><Link href="/properties" className="btn btn-brand">View properties</Link></div></section>;
}
