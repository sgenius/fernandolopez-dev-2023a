/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['konva', 'react-konva']);

const nextConfig = {
  transpilePackages: ['konva', 'react-konva'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/w320/**',
      },
      {
        protocol: 'https',
        hostname: 'mainfacts.com',
        port: '',
        pathname: '/media/images/coats_of_arms/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/countrymap',
        headers: [
          {
            key: 'x-nyankos',
            value: 'nyan',
          },
          {
            key: 'Content-Type',
            value: 'image/png',
          }
        ]
      }
    ]
  },
  experimental: {
    esmExternals: 'loose',
  }
}

module.exports = nextConfig;

// module.exports = withTM({
//   ...nextConfig,
// })