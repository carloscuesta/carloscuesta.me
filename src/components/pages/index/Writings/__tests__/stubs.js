export const props = {
  posts: [
    {
      dateModified: '2019-12-15 10:00',
      datePublished: { formatInWords: 'A year ago', formatDate: '15/12/2019 10:00', value: '2019-12-15 10:00' },
      disqusIdentifier: 'a-disqus-identifier',
      excerpt: 'This is the post excerpt that will be shown.',
      html: '<h1>post-html</h1>',
      images: {
        featured: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/v1454754838/kcuq34zbo1yieygmx0y6.png'
        },
        preview: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/w_500/v1454754838/kcuq34zbo1yieygmx0y6.png',
          lqpi: 'https://res.cloudinary.com/carloscuesta/image/upload/t_lqpi-post-preview/v1454754838/kcuq34zbo1yieygmx0y6.png'
        }
      },
      slug: 'post-slug',
      title: 'Post Title'
    },
    {
      dateModified: '2019-12-17 10:00',
      datePublished: { formatInWords: 'A year ago', formatDate: '17/12/2019 10:00', value: '2019-12-17 10:00' },
      disqusIdentifier: 'another-disqus-identifier',
      excerpt: 'This is the post excerpt that will be shown.',
      html: '<h1>post-content</h1>',
      images: {
        featured: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/v1454754838/kcuq34zbo1yieygmx0y6.png'
        },
        preview: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/w_500/v1454754838/kcuq34zbo1yieygmx0y6.png',
          lqpi: 'https://res.cloudinary.com/carloscuesta/image/upload/t_lqpi-post-preview/v1454754838/kcuq34zbo1yieygmx0y6.png'
        }
      },
      slug: 'post-blog-slug',
      title: 'A post'
    }
  ]
}
