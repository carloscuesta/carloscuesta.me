'use client'
import { useEffect } from 'react'
import useSWR from 'swr'

type Props = { slug: string; trackView?: boolean }

async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init)

  return response.json()
}

const ViewsCount = ({ slug, trackView = false }: Props) => {
  const { data } = useSWR<{ views: Record<string, number> }>(
    `/api/views`,
    fetcher
  )

  useEffect(() => {
    if (slug && trackView) {
      fetch(`/api/views/${slug}`, { method: 'POST' })
    }
  }, [slug, trackView])

  return <>{data?.views[slug]}</>
}

export default ViewsCount
