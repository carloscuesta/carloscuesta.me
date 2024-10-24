'use client'

import { getSandpackCssText } from '@codesandbox/sandpack-react'
import { useServerInsertedHTML } from 'next/navigation'

const SandpackCSS = () => {
  useServerInsertedHTML(() => {
    return <style dangerouslySetInnerHTML={{ __html: getSandpackCssText() }} />
  })

  return null
}

export default SandpackCSS
