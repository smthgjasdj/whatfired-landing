'use client'

import Link from 'next/link'
import { useState } from 'react'

const chromeStoreUrl = 'https://chromewebstore.google.com/'

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Whatfired home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>whatfired</span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/what-is-new" onClick={() => setOpen(false)}>What Is New</Link>
          <Link href="/whats-new" onClick={() => setOpen(false)}>What&apos;s New</Link>
          <a className="nav-cta" href={chromeStoreUrl} target="_blank" rel="noreferrer">Get the extension <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo /><p className="footer-note">A clearer signal for every Meta Pixel.</p></div><div className="footer-links"><span>Explore</span><Link href="/what-is-new">What Is New</Link><Link href="/whats-new">What&apos;s New</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-meta"><span>Made for modern growth teams.</span><span>© {new Date().getFullYear()} Whatfired</span></div></div></footer>
}

export function CookieNotice() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return <aside className="cookie-notice" aria-label="Cookie notice"><div><strong>One small note.</strong><p>We use essential cookies to keep Whatfired running smoothly.</p></div><button onClick={() => setVisible(false)} aria-label="Dismiss cookie notice">Got it</button></aside>
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /><CookieNotice /></>
}

export function StoreButton({ label = "Get Whatfired — it's free" }: { label?: string }) {
  return <a className="store-button" href={chromeStoreUrl} target="_blank" rel="noreferrer"><span className="chrome-icon" aria-hidden="true">▣</span><span>{label}</span><span className="button-arrow" aria-hidden="true">↗</span></a>
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span aria-hidden="true" />{children}</p>
}

export function PixelDiagram() {
  return <div className="pixel-diagram" aria-label="Pixel event activity visualization"><div className="diagram-top"><span>LIVE EVENTS</span><span className="live-dot">● connected</span></div><div className="pulse-line"><i /><i /><i /><i /><i /><i /></div><div className="event-list"><div><b>PageView</b><span>just now</span><em>valid</em></div><div><b>ViewContent</b><span>just now</span><em>valid</em></div><div><b>AddToCart</b><span>12 sec ago</span><em>valid</em></div></div></div>
}

export const featureItems = [
  ['01', 'Detect installations instantly', 'See every Meta Pixel on a page the moment it loads.'],
  ['02', 'Validate events in real time', 'Confirm standard and custom events are firing as intended.'],
  ['03', 'Find what needs fixing', 'Spot missing events, incorrect IDs, and common setup issues.'],
  ['04', 'Inspect every parameter', 'Open the debugging details behind each event and signal.'],
]

export const audienceItems = ['Advertisers', 'Agencies', 'Developers', 'Growth teams']
