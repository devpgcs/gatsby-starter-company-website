import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FeatureSection from './features.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import { Link } from 'gatsby'
import Image from '../../../components/Image'

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        FEATURES {
          id
          image
          text
        }
      }
    }
  `);

  return (
    <FeatureSection>
      <Container className="case">
        <span className="border"/>
        <Heading as="h2" title="Let's talk about highlights" theme="headings"/>
        <Text>
          All our <Link to="/features">features</Link> are focused on making things easier for you.
        </Text>
        {data.homeJson.FEATURES.map(feature =>
          <Container className="feature" key={feature.id}>
            <Image src={feature.image} alt="feature"/>
            <Text content={feature.text}/>
          </Container>        
        )}
      </Container>      
    </FeatureSection>
  )
}

export default Features