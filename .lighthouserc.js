module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'started server on',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/blog'
      ],
      settings: {
        skipAudits: [
          'is-on-https',
          'canonical',
          'uses-http2',
          'uses-rel-preconnect',
          'uses-rel-preload'
        ]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
