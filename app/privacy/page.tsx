import Link from 'next/link';
export const metadata = { title: 'Privacy' };
export default function Privacy() {
  return <main style={{ maxWidth: 720, margin: '64px auto', padding: 24 }}>
    <h1>Privacy</h1><p>Updated September 10, 2026.</p>
    <p>We use cookieless PostHog analytics to count visits to public pages and understand aggregate traffic across our sites. We disable session replay, automatic click capture and identified profiles. Search text, URL queries, fragments and referrers are not sent. A site identifier keeps each site’s traffic separate in our shared dashboard.</p>
    <p>Vercel hosts this website and processes requests to deliver and secure it. Existing Vercel analytics may also collect aggregate traffic.</p>
    <p>Learn more in <a href="https://posthog.com/privacy">PostHog’s privacy information</a>. External sites have their own policies.</p>
    <Link href="/">Back home</Link>
  </main>;
}
