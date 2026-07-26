import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/blog',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ]
  },
}

module.exports = nextConfig