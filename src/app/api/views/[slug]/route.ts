import kv from '@vercel/kv'
import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

type Params = { slug: string }

const formatViews = (views: number) => {
  return Intl.NumberFormat('en-us').format(views) + ' views'
}

export const POST = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const views = await kv.hincrby('views', params.slug, 1)

  return NextResponse.json({ views: formatViews(views) })
}
