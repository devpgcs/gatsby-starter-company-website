import React from 'react'
import BannerWrapper from './banner.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Banner = () => {
  return (
    <BannerWrapper>
      <Container className="case">
        <Heading as="h1" theme="contrast" title="Stay informed, stay connected"/>
      </Container>
      <Text 
        content={`
        This is a collection of articles written just for you
        . Do not stay behind in the progress and trends of your business
        . Check it out, and share it now!`}
      />
    </BannerWrapper>
  )
}

export default Banner