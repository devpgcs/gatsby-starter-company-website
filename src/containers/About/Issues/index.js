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
        <div className="text-wrapper">
          <Heading as="h1" theme="contrast" title="Get everything controled"/>
          <Text content="Issues are tracked so that you can handle them in house, send them out to a vendor, or schedule a future task for an employee."/>
        </div>
        <div className="img-wrapper">
          <Image src="" alt="Issue Image"/>
        </div>
      </Container>
    </IssueWrapper>
  )
}

export default Issue