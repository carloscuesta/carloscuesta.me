const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

async function jestConfig() {
  const nextJestConfig = await createJestConfig({
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/__tests__/*.{js,jsx,ts,tsx}",
      "!src/mocks/**",
      // Ignoring these files as of https://github.com/vercel/next.js/issues/47299
      "!src/**/**/layout.tsx",
      "!src/**/**/route.ts",
      "!src/**/**/page.tsx",
      "!src/**/**/not-found.tsx",
      "!src/**/**/providers.tsx",
      "!src/**/**/opengraph-image.tsx",
    ],
    "testMatch": [
      "**/*.(spec).(js)",
      "**/*.(spec).(ts)",
      "**/*.(spec).(tsx)"
    ],
    "moduleNameMapper": {
      "src/(.*)$": "<rootDir>/src/$1",
      // For some reason Jest is not able to resolve `rehype-pretty-code` 
      // when running tests
      "rehype-pretty-code": "<rootDir>/node_modules/rehype-pretty-code",
    },
    "testEnvironment": "jsdom"
  })()

  // Add ignores for specific ESM packages so they are transformed by Jest
  // See: https://github.com/vercel/next.js/issues/35634
  nextJestConfig.transformIgnorePatterns[0] = '/node_modules/(!unified|jest-runner)/'

  return nextJestConfig
}

module.exports = jestConfig
