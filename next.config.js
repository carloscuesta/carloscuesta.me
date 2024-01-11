const { withPlaiceholder } = require("@plaiceholder/next");

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
})

module.exports = withPWA(withPlaiceholder({
  experimental: {
    // https://beta.nextjs.org/docs/api-reference/next-config#servercomponentsexternalpackages
    serverComponentsExternalPackages: ['uglify-js', 'plaiceholder']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/carloscuesta/image/upload/**'
      }
    ],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  redirects: async () => [
    {
      source: '/opensource',
      destination: '/projects',
      permanent: true
    }
  ]
}))
