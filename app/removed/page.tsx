'use client'

import { useEffect } from 'react'
import { SiteFrame, SectionLabel, StoreButton } from '@/components/site-shell'

export default function RemovedPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const installId = params.get('installId')
    if (!installId) return
    fetch(`/api/removed?installId=${encodeURIComponent(installId)}`, { method: 'POST' }).catch(() => {})
  }, [])

  return <SiteFrame><main className="subpage"><div className="container narrow"><SectionLabel>Sorry to see you go</SectionLabel><h1>Whatfired <em>removed.</em></h1><p className="subpage-intro">Thanks for giving it a try. All recorded data was stored in your browser and is gone with the extension — there is nothing left behind on your machine, and nothing was ever sent anywhere.</p><div className="content-block"><h2>Changed your mind?</h2><p>Whatfired is always free, and reinstalling takes seconds.</p></div><StoreButton label="Get Whatfired again" /></div></main></SiteFrame>
}
