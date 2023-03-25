const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
})

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/carloscuesta/image/upload/**'
      }
    ]
  }
})
