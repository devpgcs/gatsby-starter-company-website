import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FeatureSection from './features.style'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Image from '../../components/Image'

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
          <Container className="header">
          <Heading as="h1" theme="primary" title="Look what we got for you!"/>
          <Text>
          Did we mention the unlimited users, unlimited tasks, unlimited otifications? We’ll that’s not all.
          </Text>
        </Container>
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