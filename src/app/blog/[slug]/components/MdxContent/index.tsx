import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGFM from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeMinify from 'rehype-preset-minify'
import rehypeWrap from 'rehype-wrap-all'

type Props = {
  source: string
}

const MdxContent = (props: Props) => (
  <div className="prose prose-neutral relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-img:rounded-lg">
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
    />
  </div>
)

export default MdxContent
