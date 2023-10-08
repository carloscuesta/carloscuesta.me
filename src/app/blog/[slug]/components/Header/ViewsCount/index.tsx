'use client'

import { useEffect } from 'react'

import useViewsCount from 'src/utils/hooks/useViewsCount'

type Props = { slug: string }

const ViewsCount = ({ slug }: Props) => {
  const { data, mutate } = useViewsCount(slug)

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
