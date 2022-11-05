import { DefaultSeo } from 'next-seo'
import { Karla } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { seo } from '@/lib/seo'
import '../styles/globals.css'

const karlaFont = Karla()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component className={karlaFont.className} {...pageProps} />
      {/* TODO: change this soon to OG Image Edge Generation */}
      <DefaultSeo {...seo} />
    </>
  )
}

export default MyApp
