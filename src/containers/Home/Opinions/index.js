import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import OpinionsWrapper from './opinions.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import Image from '../../../components/Image'

const Opinions = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        OPINIONS {
          id
          photo
          name
          profession
        }
      }
    }    
  `)

  return (
    <OpinionsWrapper>
      <Container className="case">
        <span className="border"/>
        <Container className="header">
          <Heading as="h2" theme="headings" title="Still not convinced? You better believe them!"/>
          <Text content="Say goodbye to spreadsheets and wall calendars, make your life easier!"/>
        </Container>
        <Container className="posted-images">
          {data.homeJson.OPINIONS.map(opinion =>
            <Image src="" alt="Posted Photo" key={opinion.id}/>
          )}
        </Container>
        <Text className="explanation">
          <strong>
            <em>Company has revolutionized my rental management company. </em>
          </strong>
          I now receive all bookings automatically directly from X and Y, 
          saving me hours in scheduling. The drag and drop employee scheduling calendar
          <strong>
            <em> allows me to create weekly schedules for my employees efficiently, </em> 
          </strong>
          while making sure properties are not overlooked.
        </Text>
        <Container className="perfil-wrapper">
          <Image src="" alt="perfil"/>
          <span className="perfil-name">Jamie</span>
          <Text className="perfil-profesion"content="Finishing Touch"/>
          <Text className="profesion-description"content="Cabin Rental & Concierge Services since 2008"/>
        </Container>
      </Container>
    </OpinionsWrapper>
  )
}

export default Opinions