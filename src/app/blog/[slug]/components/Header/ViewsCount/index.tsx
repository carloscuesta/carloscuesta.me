'use client'

import { useEffect } from 'react'
import useSWR from 'swr'

type Props = { slug: string; views?: string }

async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const response = await fetch(input, init)

  return response.json()
}

const ViewsCount = ({ slug, views }: Props) => {
  const { data, mutate } = useSWR<{ views: Record<string, string> }>(
    '/api/views',
    fetcher,
    views
      ? {
          fallbackData: { views: { [slug]: views } },
        }
      : undefined,
  )

  useEffect(() => {
    if (slug) {
      fetch(`/api/views/${slug}`, { method: 'POST' })
        .then((response) => response.json())
        .then((payload: Record<string, string>) => {
          mutate({
            views: {
              ...data?.views,
              ...payload,
            },
          })
        })
    }
  }, [slug])

  return <>{data?.views?.[slug]}</>
}

export default ViewsCount
