import React from 'react'
import HeaderWrapper from './header.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Header = () => (
  <HeaderWrapper>
    <Container className="case">
      <Heading as="h1" theme="primary" title="This is how it works"/>
      <Text content="Say Goodbye to Spreadsheets and Wall Calendars. Say Hello to Modern Task and Employee Scheduling Software Today"/>
    </Container>
  </HeaderWrapper>
)

export default Header