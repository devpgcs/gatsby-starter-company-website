import React from 'react'
import AditionalWrapper from './aditional.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Image from '../../../components/Image'

const Aditional = () => {
  return (
    <AditionalWrapper>
      <Container className="case">
        <span className="border"/>
        <Heading as="h2" theme="headings" title="Aditional integrations"/>
        <Container className="integrations">
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
        </Container>
        <Container className="integrations">
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
          <Image src="" alt="logo"/>
        </Container>
      </Container>
    </AditionalWrapper>
  );
}

export default Aditional