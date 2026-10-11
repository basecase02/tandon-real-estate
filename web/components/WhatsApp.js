import { site } from '@/lib/data';
import { WhatsApp as Icon } from './Icons';
export default function WhatsApp() {
  return <a className="wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><Icon /><span>Hi, how can I help?</span></a>;
}
