import { ArticleJsonLd } from 'next-seo'

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import Wrapper from 'src/components/shared/Wrapper'
import Header from './components/Header'
import FeaturedImage from './components/FeaturedImage'
import NewsletterSubscribe from './components/NewsletterSubscribe'
import ShareLinks from './components/ShareLinks'

type Params = { params: { slug: string } }

export const generateStaticParams = () =>
  getPostSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({ params }: Params) => {
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
      images: [
        {
          alt: post.title,
          height: 1000,
          url: post.images.featured.src,
          width: 2000,
        },
      ],
    },
    other: {
      'twitter:label1': 'Reading time',
      'twitter:data1': post.readingTime,
    },
  }
}

const Article = async ({ params }: Params) => {
  const post = await fetchPost(params.slug)
  const canonicalUrl = `https://carloscuesta.me/blog/${post.slug}`

  return (
    <article className="postDetail">
      <style>
        {`
          .prose h1:hover .headingLink,
          .prose h2:hover .headingLink,
          .prose h3:hover .headingLink,
          .prose h4:hover .headingLink,
          .prose h5:hover .headingLink,
          .prose h6:hover .headingLink {
            opacity: 1;
          }
        `}
      </style>
      <link href="/prism/prism.css" rel="stylesheet" type="text/css" />

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
          />

          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="prose prose-lg relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-img:rounded-lg"
          />

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
