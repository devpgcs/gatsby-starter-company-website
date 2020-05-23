import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import RecomendationWrapper from './recomendations.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Image from '../../../components/Image'
import Text from '../../../components/Text'

const Recomendations = () => {
  const data = useStaticQuery(graphql`
    query {
      blogJson {
        BLOG_RECOMENDATIONS {
          id
          image
          post
          title
          date
        }
      }
    }
  `)

  return (
    <RecomendationWrapper>
      <Container className="case">
        <span className="border"/>
        <Heading as="h2" theme="headings" title="Editor’s recommendation"/>
        {data.blogJson.BLOG_RECOMENDATIONS.map(blog =>
          <Container className="blog-post" key={blog.id}>
            <Image src={blog.image} alt="some image"/>
            <Container className="post-info">
              <Text content={<strong>{blog.post}</strong>}/>
              <Heading as="h2" theme="primary" title={blog.title}/>
              <Text content={blog.date}/>
            </Container>
          </Container>
        )}
      </Container>
    </RecomendationWrapper>
  )
}

export default Recomendations