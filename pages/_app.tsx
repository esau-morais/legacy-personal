import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react';
import { seo } from '@/lib/seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
      {/* TODO: change this soon to OG Image Edge Generation */}
      <DefaultSeo {...seo} />
    </>
  )
}

export default MyApp
