import '@testing-library/jest-dom'
import structuredClone from '@ungap/structured-clone'

if (typeof global.structuredClone === 'undefined') {
  // @ts-expect-error: Polyfilling in jest-env
  global.structuredClone = structuredClone
}
