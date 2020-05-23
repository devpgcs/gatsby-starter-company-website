import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import IndustriesWrapper from './industries.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

const Industries = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        industries_FEATURES {
          id
          text
        }
        INDUSTRIES {
          id
          image
          text
        }
      }
    }
  `)

  return (
    <IndustriesWrapper>
      <Container className="case">
        <span className="border"/>
        <Heading as="h2" theme="headings" title="Industries"/>
        <Container className="left-side">
          <Image src="" alt="Some image"/>
          <Heading as="h2" theme="text" title="Automate management no matter where you are."/>
          {data.homeJson.industries_FEATURES.map(features =>
            <Text content={features.text} key={features.id}/>
          )}
          <Button
            url="/"
            theme='secondary'
            type="button"
            className="demo-btn"
            title="Sing up for free"
          />
        </Container>
        <Container className="right-side">
          {data.homeJson.INDUSTRIES.map(industries =>
            <Container className="feature" key={industries.id}>
              <Image src={industries.image} alt="Some image"/>
              <Text content={industries.text}/>
            </Container>
          )}
        </Container>
      </Container>
    </IndustriesWrapper>
  )
}

export default Industries