import React from 'react'
import PartnerWrapper from './partner.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import { Link } from 'gatsby'

const Partner = () => {
  return (
    <PartnerWrapper>
      <Container className="case">
        <span className="border"/>
        <Heading as="h2" theme="headings" title="Partner Integrations"/>
        <Container className="integrations">
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
        </Container>
        <Text>
          Interested in partnering? So are we, just <Link to="/">contact us here</Link>
        </Text>
      </Container>
    </PartnerWrapper>
  );
}

export default Partner