/** @type {import('next').NextConfig} */
const nextConfig = {
  formats: ['image/webp'],
  images: {
    domains: ['images.oyoroomscdn.com', 'cdn.pixabay.com', 'www.google.com', 'c8.alamy.com', 'www.shutterstock.com']
  }

};

export default nextConfig;
