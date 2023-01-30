const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
module.exports = createJestConfig({
"collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/__tests__/*.{js,jsx,ts,tsx}",
  ],
  "testMatch": [
    "**/*.(spec).(js)",
    "**/*.(spec).(ts)",
    "**/*.(spec).(tsx)"
  ],
  "moduleNameMapper": {
    "src/(.*)$": "<rootDir>/src/$1"
  },
  "testEnvironment": "jsdom",
  "transformIgnorePatterns": [
    "!/node_modules/unified",
    "/node_modules/jest-runner"
  ]
})
