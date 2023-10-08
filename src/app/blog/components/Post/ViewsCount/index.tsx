'use client'

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
  const { data } = useSWR<{ views: Record<string, string> }>(
    '/api/views',
    fetcher,
    views
      ? {
          fallbackData: { views: { [slug]: views } },
        }
      : undefined,
  )

  return <>{data?.views?.[slug]}</>
}

export default ViewsCount
