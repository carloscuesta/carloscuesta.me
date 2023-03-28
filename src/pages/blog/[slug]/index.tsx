import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { ParsedUrlQuery } from 'querystring';

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import Header from 'src/components/pages/blog/[slug]/Header'
import FeaturedImage from 'src/components/pages/blog/[slug]/FeaturedImage'
import NewsletterSubscribe from 'src/components/pages/blog/[slug]/NewsletterSubscribe'
import ShareLinks from 'src/components/pages/blog/[slug]/ShareLinks'

const Article = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const canonicalUrl = `https://carloscuesta.me/blog/${props.post.slug}`

  return (
    <article className='postDetail'>
      <ArticleJsonLd
        authorName='Carlos Cuesta'
        dateModified={props.post.dateModified}
        datePublished={props.post.datePublished.value}
        description={props.post.excerpt}
        images={[props.post.images.featured.src]}
        publisherLogo='/images/carloscuesta.jpg'
        publisherName='Carlos Cuesta'
        title={props.post.title}
        url={canonicalUrl}
      />

      <NextSeo
        additionalMetaTags={[
          { name: 'twitter:label1', content: 'Reading time' },
          { name: 'twitter:data1', content: props.post.readingTime }
        ]}
        canonical={canonicalUrl}
        title={`Carlos Cuesta – ${props.post.title}`}
        description={props.post.excerpt}
        openGraph={{
          title: props.post.title,
          description: props.post.excerpt,
          url: canonicalUrl,
          type: 'article',
          article: {
            publishedTime: props.post.datePublished.value,
            modifiedTime: props.post.dateModified,
            authors: ['https://carloscuesta.me']
          },
          images: [
            {
              alt: props.post.title,
              height: 1000,
              url: props.post.images.featured.src,
              width: 2000
            }
          ]
        }}
      />

      <Head>
        <link rel='preload' href='/prism/prism.css' as='style' />
        <link href='/prism/prism.css' rel='stylesheet' type='text/css' />
        <style>{`
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
      </Head>

      <main>
        <Wrapper isCompressed>
          <FeaturedImage
            image={props.post.images.featured.src}
            lqpiImage={props.post.images.preview.lqpi}
            title={props.post.title}
          />

          <Header
            datePublished={props.post.datePublished}
            readingTime={props.post.readingTime}
            title={props.post.title}
          />

          <div 
            dangerouslySetInnerHTML={{ __html: props.post.html }}
            className='prose dark:prose-invert prose-lg max-w-full relative prose-headings:scroll-mt-16 dark:prose-headings:font-semibold prose-img:rounded-lg'
          />

          <ShareLinks
            canonicalUrl={canonicalUrl}
            slug={props.post.slug}
            title={props.post.title}
          />

          <NewsletterSubscribe />
        </Wrapper>
      </main>
    </article>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths<Params> = () => ({
  paths: getPostSlugs().map((slug: string) => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps: GetStaticProps<{ post: Post }, Params> = async ({ params }) => {
  const post = await fetchPost((params as Params).slug)

  return {
    props: {
      post
    }
  }
}

export default Article
