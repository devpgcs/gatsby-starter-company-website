import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import RecentsWrapper from './recents.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Input from '../../../components/Input'

const Recents = () => {
  const data = useStaticQuery(graphql`
    query {
      blogJson {
        BLOG_RECENTS {
          id
          image
          post
          title
          date
        }
      }
    }
  `)

  const [inputState, setInputState] = useState('')

  const inputHandler = e => {
    setInputState(e.target.value)
  }

  return (
    <RecentsWrapper>
      <Container className="case">
        <span className="border" />
        <Heading as="h2" theme="headings" title="Most recent" />
        <Container className="search-case">
          <span className="search">
            <Input
              className="input"
              type="text"
              placeholder="Looking for something in particular?"
              value={inputState}
              onChange={inputHandler}
            />
          </span>
        </Container>
        {data.blogJson.BLOG_RECENTS.map(blog => (
          <Container className="blog-post" key={blog.id}>
            <Image src={blog.image} alt="some image" />
            <Container className="post-info">
              <Text content={<strong>{blog.post}</strong>} />
              <Link to="/">
                <Heading as="h2" theme="primary" title={blog.title} />
              </Link>
              <Text content={blog.date} />
            </Container>
          </Container>
        ))}
      </Container>
    </RecentsWrapper>
  )
}

export default Recents
