import { NextResponse } from 'next/server'

import { fetchViews } from 'src/utils/api/blog/views'

export const runtime = 'edge'

export const GET = async () => {
  const views = await fetchViews()

  return NextResponse.json({ views })
}
