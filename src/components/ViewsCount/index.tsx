'use client'

import useViewsCount from 'src/utils/hooks/useViewsCount'

type Props = { slug: string; views?: string }

const ViewsCount = ({ slug, views }: Props) => {
  const { data } = useViewsCount(slug, views)

  return <>{data?.views?.[slug]}</>
}

export default ViewsCount
