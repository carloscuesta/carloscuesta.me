import { cx } from 'classix'
import { twMerge } from 'tailwind-merge'

const cn = (...args: Array<string | boolean | undefined>) =>
  twMerge(cx(...args))

export default cn
