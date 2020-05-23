import React from 'react'
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
          <Button
            url="/"
            theme="inverted"
            txt="inverted"
            type="button"
            title="My booking software is not listed"
          />
          <Button
            url="/"
            theme='primary'
            type="button"
            title="Interested in partnering?"
          />
        </Container>
      </Container>
    </IssuesWrapper>
  )
}

export default Issues
