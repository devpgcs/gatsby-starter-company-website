import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import MainWrapper from './main.style'
import Aside from '../Aside'
import Button from '../../../components/Button'
import Image from '../../../components/Image'
import CompassImg from '../../../../static/images/compass-regular.svg'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'

const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      termsJson {
        MAIN {
          id
          idJS
          heading
          content {
            id
            paragraph
          }
        }
      }
    }    
  `)

  const [compassState, setCompassState] = useState(true);
  
  const toggleCompass = () => {
    setCompassState(!compassState)
    compassState ?
      document.querySelector('aside').style.left = '0px' :
      document.querySelector('aside').style.left = '-260px'
    compassState ?
      document.querySelector('.compass').style.left = '260px' :
      document.querySelector('.compass').style.left = '0px'

      console.log(compassState)
  }

  return (
    <MainWrapper>
      <Aside />
      <Button className="compass" click={toggleCompass}>
        <Image src={CompassImg} alt="Compass"/>
      </Button>
      <Container className="main">
        <span className="buttons-wrapper">
          <Button theme="inverted" className="activate">
            <Link to="/terms">Terms of service</Link>
          </Button>
          <Button theme="inverted">
            <Link to="/">Privacy policy</Link>
          </Button>
        </span>
        {data.termsJson.MAIN.map(main =>
          <div key={main.id} id={main.idJS}>
            <Heading as="h2" title={main.heading} theme="headings"/>
            {main.content.map(content =>
              <Text key={content.id} content={content.paragraph}/>
            )}
          </div>       
        )}
      </Container>
    </MainWrapper>
  )
}

export default Main