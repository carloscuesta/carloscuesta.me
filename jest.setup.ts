import '@testing-library/jest-dom'
import { enableFetchMocks } from 'jest-fetch-mock'
import structuredClone from '@ungap/structured-clone'

enableFetchMocks()

if (typeof global.structuredClone === 'undefined') {
  // @ts-expect-error: Polyfilling in jest-env
  global.structuredClone = structuredClone
}
