import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGFM from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeMinify from 'rehype-preset-minify'
import rehypeWrap from 'rehype-wrap-all'
import rehypeImageSize from 'rehype-probe-image-size'
import Image from './Image'

type Props = {
  source: string
}

const components = { img: Image } as const

const MdxContent = (props: Props) => (
  <div className="prose prose:pre prose-neutral relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-img:rounded-lg">
    <MDXRemote
      source={props.source}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGFM,
            [remarkToc, { tight: true, maxDepth: 4, ordered: true }],
          ],
          rehypePlugins: [
            rehypeSlug,
            // @ts-expect-error rehype-probe-image-size is not properly typed
            rehypeImageSize,
            [rehypeAutoLinkHeadings, { behavior: 'wrap' }],
            rehypeExternalLinks,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: require('sprinkles-vscode/themes/sprinkles-dark.json'),
                  light: require('sprinkles-vscode/themes/sprinkles-light.json'),
                },
                defaultLang: 'plaintext',
              },
            ],
            [rehypeWrap, { selector: 'table', wrapper: 'div.responsiveTable' }],
            rehypeMinify,
          ],
        },
      }}
      components={components}
    />
  </div>
)

export default MdxContent
