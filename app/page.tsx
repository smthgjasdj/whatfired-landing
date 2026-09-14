import Link from 'next/link'
import { SiteFrame, StoreButton, SectionLabel, PixelDiagram } from '@/components/site-shell'

const featureItems = [
  ['01', 'Detect installations instantly', 'See every Meta Pixel on a page the moment it loads.'],
  ['02', 'Validate events in real time', 'Confirm standard and custom events are firing as intended.'],
  ['03', 'Find what needs fixing', 'Spot missing events, incorrect IDs, and common setup issues.'],
  ['04', 'Inspect every parameter', 'Open the debugging details behind each event and signal.'],
]

export default function HomePage() {
  return <SiteFrame><main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy"><SectionLabel>Meta Pixel debugger for Chrome</SectionLabel><h1>Know exactly <em>what fired.</em></h1><p className="hero-lede">Whatfired gives marketers, developers, and growth teams a clear view of every Meta Pixel event — so you can validate, debug, and launch with confidence.</p><div className="hero-actions"><StoreButton /><Link className="text-link" href="/what-is-new">See how it works <span aria-hidden="true">→</span></Link></div><p className="microcopy"><span className="check" aria-hidden="true">✓</span> Free Chrome extension <span className="dot-separator">·</span> No account required</p></div><div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><PixelDiagram /><div className="signal-card"><span className="signal-bar" /><span><b>Signal detected</b><small>Meta Pixel · 284ms</small></span><strong>✓</strong></div></div></div></section>
    <section className="proof-strip"><div className="container proof-inner"><span>Built for the people behind the signal</span><div>{['Advertisers', 'Agencies', 'Developers', 'Growth teams'].map(item => <span key={item}>{item}</span>)}</div></div></section>
    <section className="feature-section"><div className="container"><div className="section-intro"><SectionLabel>Everything in focus</SectionLabel><h2>Debugging shouldn&apos;t<br /><em>feel like detective work.</em></h2><p>Skip the guesswork. Whatfired turns invisible tracking signals into a straightforward, useful view of what&apos;s happening on your site.</p></div><div className="feature-grid">{featureItems.map(([number, title, body]) => <article className="feature-card" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{body}</p><span className="feature-line" /></article>)}</div></div></section>
    <section className="validation-section"><div className="container validation-grid"><div><SectionLabel>A better way to validate</SectionLabel><h2>From first signal<br />to <em>full confidence.</em></h2><p>Whether you&apos;re checking a new campaign or troubleshooting a live funnel, Whatfired helps you move from &quot;is it working?&quot; to &quot;I know it is.&quot;</p><Link className="text-link" href="/whats-new">Explore the latest updates <span aria-hidden="true">→</span></Link></div><div className="validation-note"><div className="quote-mark">“</div><blockquote>Finally, a simple way to see what our pixels are actually doing.</blockquote><div className="quote-byline"><span className="avatar">M</span><span><b>Marketing team lead</b><small>Ecommerce growth team</small></span></div></div></div></section>
    <section className="cta-section"><div className="container cta-inner"><SectionLabel>Ready when you are</SectionLabel><h2>Make every event<br /><em>count.</em></h2><StoreButton label="Add Whatfired to Chrome" /></div></section>
  </main></SiteFrame>
}
