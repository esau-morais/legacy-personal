import type { DefaultSeoProps } from 'next-seo'

const title = `Esau Morais`
const description = `Welcome to my (simple and aesthetic) world! Here I'll be sharing more about me and mainly my projects. Hope you enjoy 😊`
const domain = `emorais.vercel.app`
const twitter = `@lil0serboy`

export const seo: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: '/og_image.jpg',
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: 'summary_large_image',
  },
}
