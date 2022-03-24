/** @type {import('next').NextConfig} */
const nextConfig = {
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
