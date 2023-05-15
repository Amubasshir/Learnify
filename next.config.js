/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.creativeitinstitute.com',
      'miro.medium.com',
      'process.fs.teachablecdn.com',
    ],
  },
};

module.exports = nextConfig;
