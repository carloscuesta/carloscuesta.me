// @flow
import React from 'react'

type Props = {}

const Writings = (props: Props) => (
  <>
    {props.posts.map((post) => (
      <h1 key={post.url}>{post.title}</h1>
    ))}
  </>
)

export default Writings
