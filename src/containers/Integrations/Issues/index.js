import React from 'react'
import { Link } from 'gatsby'
import IssuesWrapper from './issues.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Button from '../../../components/Button'

export const Issues = () => {
  return (
    <IssuesWrapper>
      <Container className="case">
        <Heading as="h2" theme="headings" title="Any issue?"/>
        <Container className="buttons-wrapper">
          <Button theme="inverted">
            <Link to="/">My booking software is not listed</Link>
          </Button>
          <Button theme='primary'>
            <Link to="/">Interested in partnering?</Link>
          </Button>
        </Container>
      </Container>
    </IssuesWrapper>
  )
}

export default Issues
