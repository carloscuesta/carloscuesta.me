import kv from '@vercel/kv'
import { NextResponse } from 'next/server'

import formatViews from './formatViews'

export const runtime = 'edge'

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
