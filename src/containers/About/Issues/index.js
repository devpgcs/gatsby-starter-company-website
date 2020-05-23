import React from 'react'
import IssueWrapper from './issue.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import Image from '../../../components/Image'

const Issue = () => {
  return (
    <IssueWrapper>
      <Container className="case">
        <Heading as="h1" theme="contrast" title="Get everything controled"/>
        <Text content="Issues are tracked so that you can handle them in house, send them out to a vendor, or schedule a future task for an employee."/>
      </Container>
      <Image src="" alt="Issue Image"/>
    </IssueWrapper>
  )
}

export default Issue