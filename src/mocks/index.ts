const IS_SERVER = typeof window === 'undefined'

async function setupMocks() {
  if (IS_SERVER) {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start()
  }
}

(async () => {
  await setupMocks()
})()
