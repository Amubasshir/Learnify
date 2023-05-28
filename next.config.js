/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.creativeitinstitute.com',
      'miro.medium.com',
      'process.fs.teachablecdn.com',
      'lh3.googleusercontent.com',
      'img-c.udemycdn.com',
      'i0.wp.com',
      'blog.logrocket.com',
    ],
  },
};

module.exports = nextConfig;
