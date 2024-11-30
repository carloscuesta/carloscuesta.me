const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

async function jestConfig() {
  const nextJestConfig = await createJestConfig({
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/__tests__/*.{js,jsx,ts,tsx}',
      '!src/mocks/**',
      // Ignoring these files as of https://github.com/vercel/next.js/issues/47299
      '!src/**/**/layout.tsx',
      '!src/**/**/route.ts',
      '!src/**/**/page.tsx',
      '!src/app/home/index.tsx',
      '!src/**/**/not-found.tsx',
      '!src/**/**/providers.tsx',
      '!src/**/**/opengraph-image.tsx',
      '!src/mdx-components.tsx',
      '!src/utils/api/blog/index.ts',
      '!src/app/blog/[slug]/components/Playground/index.tsx',
      '!src/app/blog/[slug]/components/SandpackCSS/index.tsx',
    ],
    testMatch: ['**/*.(spec).(js)', '**/*.(spec).(ts)', '**/*.(spec).(tsx)'],
    moduleNameMapper: {
      'src/(.*)$': '<rootDir>/src/$1',
      // For some reason Jest is not able to resolve `rehype-pretty-code`
      // when running tests
      'rehype-pretty-code': '<rootDir>/node_modules/rehype-pretty-code',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  })()

  return nextJestConfig
}

module.exports = jestConfig
