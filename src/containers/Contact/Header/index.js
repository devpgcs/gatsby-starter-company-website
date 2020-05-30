import React from 'react'
import HeaderWrapper from './header.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container className="case">
        <Heading as="h1" theme="secondary" title="We want to know about you"/>
        <Text 
          content="For direct integration with your booking software, please fill out the form below and we will contact you to get started."
        />
      </Container>
    </HeaderWrapper>
  )
}

export default Header