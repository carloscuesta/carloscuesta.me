import { kv } from '@vercel/kv'
import { NextResponse, type NextRequest } from 'next/server'

import { transformViews } from 'src/utils/api/blog/views'

export const runtime = 'edge'

type Params = { slug: string }

export const POST = async (
  _request: NextRequest,
  props: { params: Promise<Params> },
) => {
  const params = await props.params
  const increment = process.env.NODE_ENV === 'development' ? 0 : 1
  const views = await kv.hincrby('views', params.slug, increment)

  return NextResponse.json({ [params.slug]: transformViews(views) })
}
