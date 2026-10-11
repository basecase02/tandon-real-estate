import Wizard from '@/components/Wizard';
export const metadata = { title: 'Get Started', description: 'Tell us what you’re looking for — buying, selling, renting or an appraisal — and Tandon Real Estate will tailor the next steps.', alternates: { canonical: '/get-started' } };
export default function GetStarted() {
  return <section><div className="wrap"><Wizard /></div></section>;
}
