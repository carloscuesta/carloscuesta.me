import { kv } from '@vercel/kv'
import { NextResponse, type NextRequest } from 'next/server'

import { transformViews } from 'src/utils/api/blog/views'

export const runtime = 'edge'

type Params = { slug: string }

export const POST = async (
  request: NextRequest,
  props: { params: Promise<Params> },
) => {
  const params = await props.params
  const views = await kv.hincrby('views', params.slug, 1)

  return NextResponse.json({ [params.slug]: transformViews(views) })
}
