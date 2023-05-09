const IS_SERVER = typeof window === 'undefined'

async function setupMocks() {
  if (IS_SERVER) {
    const { server } = await import('./server')
    server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await import('./browser')
    worker.start({ quiet: true })
  }
}

;(async () => {
  await setupMocks()
})()
