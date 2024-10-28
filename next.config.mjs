import { withPlaiceholder } from '@plaiceholder/next'
import createPWA from 'next-pwa'
import createMDX from '@next/mdx'
import remarkGFM from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeMinify from 'rehype-preset-minify'
import rehypeWrap from 'rehype-wrap-all'
import rehypeImageSize from 'rehype-probe-image-size'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkReadingTime from 'remark-reading-time'
import readingMdxTime from 'remark-reading-time/mdx.js'
import dark from 'sprinkles-vscode/themes/sprinkles-dark.json' assert { type: 'json' }
import light from 'sprinkles-vscode/themes/sprinkles-light.json' assert { type: 'json' }

const withPWA = createPWA({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
})

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGFM,
      [remarkToc, { tight: true, maxDepth: 4, ordered: true }],
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkReadingTime,
      readingMdxTime,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeImageSize,
      [rehypeAutoLinkHeadings, { behavior: 'wrap' }],
      rehypeExternalLinks,
      [
        rehypePrettyCode,
        {
          theme: {
            dark,
            light,
          },
        },
      ],
      [rehypeWrap, { selector: 'table', wrapper: 'div.responsiveTable' }],
      rehypeMinify,
    ],
  },
})

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: res.cloudinary.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src https://codesandbox.io https://*.youtube.com https://stackblitz.com https://*.staticblitz.com;
    ${process.env.NODE_ENV === 'development' ? '' : 'upgrade-insecure-requests'};
`

export default withPWA(
  withPlaiceholder(
    withMDX({
      pageExtensions: ['ts', 'tsx', 'mdx'],
      // https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages
      serverExternalPackages: ['uglify-js', 'plaiceholder'],
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/carloscuesta/image/upload/**',
          },
        ],
        deviceSizes: [640, 768, 1024, 1280, 1536],
      },
      redirects: async () => [
        {
          source: '/opensource',
          destination: '/projects',
          permanent: true,
        },
        {
          source: '/follow/linkedin',
          destination: 'https://www.linkedin.com/in/crloscuesta',
          permanent: true,
        },
        {
          source: '/follow/x',
          destination: 'https://twitter.com/crloscuesta',
          permanent: true,
        },
        {
          source: '/follow/github',
          destination: 'https://github.com/carloscuesta',
          permanent: true,
        },
      ],
      headers: async () => [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, ''),
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        },
      ],
    }),
  ),
)
