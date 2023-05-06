import kv from '@vercel/kv'
import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

type Params = { slug: string }

const formatViews = (views: number) => {
  return Intl.NumberFormat('en-us').format(views) + ' views'
}

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const views = await kv.get<number>(params.slug)

  return NextResponse.json({
    views: views ? formatViews(views) : null,
  })
}

export const POST = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const views = await kv.incr(params.slug)

  return NextResponse.json({ views: formatViews(views) })
}
