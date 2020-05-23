import React from "react"
import BannerWrapper from './banner.style'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Banner = () => {
  return (
    <BannerWrapper>
      <Container className="case">
        <Image src="" alt="banner"/>
        <Heading as="h1" theme="primary" title="We are better together!"/>
        <Text content="We are proud to work with all these companies"/>
      </Container>
    </BannerWrapper>
  );
}

export default Banner