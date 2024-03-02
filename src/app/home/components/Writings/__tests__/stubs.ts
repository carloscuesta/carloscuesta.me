export const props = {
  posts: [
    {
      dateModified: '2019-12-15 10:00',
      datePublished: {
        formatDate: '15/12/2019 10:00',
        value: '2019-12-15 10:00',
        formatMonthDay: '15 Dec',
      },
      disqusIdentifier: 'a-disqus-identifier',
      excerpt: 'This is the post excerpt that will be shown.',
      html: '<h1>post-html</h1>',
      images: {
        featured: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/v1454754838/kcuq34zbo1yieygmx0y6.png',
        },
        preview: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/w_500/v1454754838/kcuq34zbo1yieygmx0y6.png',
          lqpi: 'https://res.cloudinary.com/carloscuesta/image/upload/t_lqpi-post-preview/v1454754838/kcuq34zbo1yieygmx0y6.png',
        },
      },
      slug: 'post-slug',
      title: 'Post Title',
      views: '1,000 views',
    },
    {
      dateModified: '2019-12-17 10:00',
      datePublished: {
        formatDate: '17/12/2019 10:00',
        value: '2019-12-17 10:00',
        formatMonthDay: '17 Dec',
      },
      disqusIdentifier: 'another-disqus-identifier',
      excerpt: 'This is the post excerpt that will be shown.',
      html: '<h1>post-content</h1>',
      images: {
        featured: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/v1454754838/kcuq34zbo1yieygmx0y6.png',
        },
        preview: {
          src: 'https://res.cloudinary.com/carloscuesta/image/upload/w_500/v1454754838/kcuq34zbo1yieygmx0y6.png',
          lqpi: 'https://res.cloudinary.com/carloscuesta/image/upload/t_lqpi-post-preview/v1454754838/kcuq34zbo1yieygmx0y6.png',
        },
      },
      slug: 'post-blog-slug',
      title: 'A post',
      views: '1,000 views',
    },
  ],
}

export const scrollEventMock = (scrollLeft: number) => ({
  target: { scrollLeft },
})

export const scrollablePostsRefMock = () => ({
  childNodes: [{ offsetWidth: 350 }, { offsetWidth: 350 }],
  scrollTo: jest.fn(),
  scrollLeft: 0,
})
