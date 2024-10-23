import { ArticleJsonLd } from 'next-seo'
import { type Metadata } from 'next'

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import Wrapper from 'src/components/Wrapper'
import Header from './components/Header'
import FeaturedImage from './components/FeaturedImage'
import MdxContent from './components/MdxContent'
import NewsletterSubscribe from './components/NewsletterSubscribe'
import ShareLinks from './components/ShareLinks'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export const generateStaticParams = () =>
  getPostSlugs().map((slug) => ({ slug }))

export const generateMetadata = async (props: Params): Promise<Metadata> => {
  const params = await props.params
  const post = await fetchPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished.value,
      modifiedTime: post.dateModified,
      authors: ['Carlos Cuesta'],
    },
  }
}

const Article = async (props: Params) => {
  const params = await props.params
  const post = await fetchPost(params.slug)
  const canonicalUrl = `https://carloscuesta.me/blog/${post.slug}`

  return (
    <article className="postDetail">
      <ArticleJsonLd
        useAppDir={true}
        authorName="Carlos Cuesta"
        dateModified={post.dateModified}
        datePublished={post.datePublished.value}
        description={post.excerpt}
        images={[post.images.featured.src]}
        publisherLogo="/images/carloscuesta.jpg"
        publisherName="Carlos Cuesta"
        title={post.title}
        url={canonicalUrl}
      />

      <main>
        <Wrapper isCompressed>
          <FeaturedImage
            image={post.images.featured.src}
            lqpiImage={post.images.preview.lqpi}
            title={post.title}
          />

          <Header
            datePublished={post.datePublished}
            readingTime={post.readingTime}
            title={post.title}
            slug={post.slug}
          />

          <div className="prose prose-neutral relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-img:rounded-lg">
            {post.source()}
          </div>

          <hr className="mt-12 border-neutral-100 dark:border-neutral-800" />

          <ShareLinks
            canonicalUrl={canonicalUrl}
            slug={post.slug}
            title={post.title}
          />

          <NewsletterSubscribe />
        </Wrapper>
      </main>
    </article>
  )
}

export default Article
