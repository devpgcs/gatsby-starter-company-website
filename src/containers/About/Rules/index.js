import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import RulesWrapper from './rules.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import Image from '../../../components/Image'

const Rules = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        RULES {
          id
          text
        }
      }
    }
  `)

  return (
    <RulesWrapper>
      <Container className="case">
        <Container className="left-side">
          <Heading as="h1" theme="primary" title="Task Creation Rules"/>
          {data.aboutJson.RULES.map(rules =>
            <Text content={rules.text} key={rules.id}/>
          )}
        </Container>
        <Container className="right-side">
          <Image src="" alt="some image"/>
        </Container>
      </Container>
    </RulesWrapper>
  )
}

export default Rules