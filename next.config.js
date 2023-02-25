/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['konva', 'react-konva']);
const nextConfig = {
  transpilePackages: ['konva', 'react-konva'],
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  }
}

module.exports = nextConfig;

// module.exports = withTM({
//   ...nextConfig,
// })