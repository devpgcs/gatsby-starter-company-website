import React from 'react'
import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import {Link} from 'gatsby'
import SectionWrapper from './integrations.style';

const Integrations = () => (
  <SectionWrapper>
    <Container className="case">
      <Text>
        Looking for integrations? Well... We can work with  <Link to="/integrations">just about anyone</Link>... here are a few
      </Text>
      <Container className="logos">
        <Image src="" alt="logo"/>
        <Image src="" alt="logo"/>
        <Image src="" alt="logo"/>
        <Image src="" alt="logo"/>
        <Image src="" alt="logo"/>
      </Container>
    </Container>
  </SectionWrapper>
);

export default Integrations;