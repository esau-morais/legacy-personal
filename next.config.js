/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'media-exp1.licdn.com',
      'assets.website-files.com',
      'res.cloudinary.com',
    ],
  },
}

module.exports = nextConfig
