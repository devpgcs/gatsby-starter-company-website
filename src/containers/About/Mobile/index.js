import React from 'react'
import MobileWrapper from './mobile.style'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Mobile = () => {
  return (
    <MobileWrapper>
      <Container className="case">
        <Image src="" alt="some image"/>
        <Container className="right-side">
          <Heading as="h1" theme="contrast" title="Mobile friendly"/>
          <Text content="Issues are tracked so that you can handle them in house, send them out to a vendor, or schedule a future task for an employee."/>
        </Container>
      </Container>
    </MobileWrapper>
  )
}

export default Mobile