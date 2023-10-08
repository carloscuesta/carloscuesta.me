import useSWR from 'swr'

async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const response = await fetch(input, init)

  return response.json()
}

const useViewsCount = (slug: string, views?: string) => {
  const { data, mutate } = useSWR<{ views: Record<string, string> }>(
    '/api/views',
    fetcher,
    views
      ? {
          fallbackData: { views: { [slug]: views } },
        }
      : undefined,
  )

  return { data, mutate }
}

export default useViewsCount
