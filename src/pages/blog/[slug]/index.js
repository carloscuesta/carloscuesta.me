// @flow
import React from 'react'
import Head from 'next/head'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import Header from 'src/components/pages/blog/[slug]/Header'
import FeaturedImage from 'src/components/pages/blog/[slug]/FeaturedImage'
import NewsletterSubscribe from 'src/components/pages/blog/[slug]/NewsletterSubscribe'
import ShareLinks from 'src/components/pages/blog/[slug]/ShareLinks'

type Props = {
  post: Post
}

const Article = (props: Props) => {
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
      </Head>

      <FeaturedImage
        image={props.post.images.featured.src}
        title={props.post.title}
      />

      <main>
        <Wrapper isCompressed>
          <Header
            title={props.post.title}
            datePublished={props.post.datePublished}
          />

          <div dangerouslySetInnerHTML={{ __html: props.post.html }} />

          <ShareLinks
            canonicalUrl={canonicalUrl}
            slug={props.post.slug}
            title={props.post.title}
          />

          <NewsletterSubscribe />

          <hr />
        </Wrapper>
      </main>
    </article>
  )
}

type Params = { params: { slug: string } }

export const getStaticPaths = (): { paths: Array<Params>, fallback: boolean } => ({
  paths: getPostSlugs().map((slug: string) => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }: Params): Promise<{ props: Props }> => {
  const post = await fetchPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export default Article
