'use client'
import { useEffect } from 'react'
import useSWR from 'swr'

type Props = { slug: string }
async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init)

  return response.json()
}

const ViewsCount = ({ slug }: Props) => {
  const { data } = useSWR<{ views: number }>(`/api/views/${slug}`, fetcher)

  useEffect(() => {
    if (slug) {
      fetch(`/api/views/${slug}`, { method: 'POST' })
    }
  }, [slug])

  return <>{data?.views} views</>
}

export default ViewsCount
