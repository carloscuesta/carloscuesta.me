import { kv } from '@vercel/kv'

// Keeping this in a separate file since `Edge` doesn't support specific
// APIs (we're importing) in the index entrypoint.
// https://nextjs.org/docs/pages/api-reference/edge#unsupported-apis
// `unstable_allowDynamic` might be used at the API level.
// Once this is solved, move this back to the index entrypoint.

export const transformViews = (views: number) => {
  return Intl.NumberFormat('en-us').format(views) + ' views'
}

export const fetchViews = async (): Promise<Record<string, string>> => {
  const views = await kv.hgetall<Record<string, number>>('views')

  return Object.entries(views || {}).reduce(
    (memo, [key, value]) => ({
      ...memo,
      [key]: transformViews(value),
    }),
    {},
  )
}
