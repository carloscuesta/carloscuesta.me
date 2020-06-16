// @flow
import React from 'react'
import Head from 'next/head'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import Header from 'src/components/pages/blog/[slug]/Header'

type Props = {
  post: Post
}

const Article = (props: Props) => {
  const canonicalUrl = `https://carloscuesta.me/${props.post.slug}`

  return (
    <article className='postDetail'>
      <ArticleJsonLd
        authorName='Carlos Cuesta'
        dateModified={props.post.dateModified}
        datePublished={props.post.datePublished.value}
        description={props.post.excerpt}
        images={[props.post.image]}
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
              height: 1530,
              url: props.post.image,
              width: 3003
            }
          ]
        }}
      />

      <Head>
        <link rel='preload' href='/prism/prism.css' as='style' />
        <link rel='preload' href='/prism/prism.js' as='script' />
        <link href='/prism/prism.css' rel='stylesheet' type='text/css' />
        <script src='/prism/prism.js' type='text/javascript' />
      </Head>

      <Header image={props.post.image} />

      <main>
        <Wrapper isCompressed>
          <header>
            <h1>{props.post.title}</h1>

            <time dateTime={props.post.datePublished.value}>
              {props.post.datePublished.formatDate}
            </time>
          </header>

          <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </Wrapper>
      </main>
    </article>
  )
}

export const getStaticPaths = () => ({
  paths: getPostSlugs().map<{ params: { slug: string }}>((slug: string) => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }: { params: { slug: string }}) => {
  const post = await fetchPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export default Article
