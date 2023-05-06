import kv from '@vercel/kv'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

const formatViews = (views: number) => {
  return Intl.NumberFormat('en-us').format(views) + ' views'
}

export const GET = async () => {
  const views = await kv.hgetall<Record<string, number>>('views')

  return NextResponse.json({
    views: Object.entries(views || {}).reduce(
      (memo, [key, value]) => ({
        ...memo,
        [key]: formatViews(value),
      }),
      {}
    ),
  })
}
