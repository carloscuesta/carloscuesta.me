const { withPlaiceholder } = require("@plaiceholder/next");

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
})

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: res.cloudinary.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src https://codesandbox.io https://*.youtube.com https://stackblitz.com https://*.staticblitz.com;
    ${process.env.NODE_ENV === 'development' ? '' : 'upgrade-insecure-requests'};
`

module.exports = withPWA(
  withPlaiceholder({
    experimental: {
      // https://beta.nextjs.org/docs/api-reference/next-config#servercomponentsexternalpackages
      serverComponentsExternalPackages: ['uglify-js', 'plaiceholder'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/carloscuesta/image/upload/**',
        },
      ],
      deviceSizes: [640, 768, 1024, 1280, 1536],
    },
    redirects: async () => [
      {
        source: '/opensource',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/follow/linkedin',
        destination: 'https://www.linkedin.com/in/crloscuesta',
        permanent: true,
      },
      {
        source: '/follow/x',
        destination: 'https://twitter.com/crloscuesta',
        permanent: true,
      },
      {
        source: '/follow/github',
        destination: 'https://github.com/carloscuesta',
        permanent: true,
      },
    ],
    headers: async () => [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ],
  }),
)
