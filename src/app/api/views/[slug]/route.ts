import kv from '@vercel/kv'
import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

type Params = { slug: string }

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const views = await kv.get<number>(params.slug)

  return NextResponse.json({
    views: views ? Intl.NumberFormat('en-us').format(views) : null,
  })
}

export const POST = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const views = await kv.incr(params.slug)

  return NextResponse.json({ views: Intl.NumberFormat('en-us').format(views) })
}
