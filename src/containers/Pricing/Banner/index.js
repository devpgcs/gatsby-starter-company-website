import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BannerWrapper from './banner.style'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import Button from '../../../components/Button'
import { List, ListItem } from '../../../components/List'
import check from '../../../../static/images/check-solid.svg'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      pricingJson {
        FEATURES {
          id
          text
        }
      }
    }    
  `)

  return (
    <BannerWrapper>
      <Container className="case">
        <Container className="left-side">
          <Heading as="h1" theme="primary" title="One simple track, without hidden fees"/>
          <Heading as="h2" theme="text" title="Unlimited Users. Unlimited Tasks. Unlimited Notifications."/>
          <Text>
            <strong>$2 per property per month.</strong> 2 months free with annual plan.
          </Text>
          <Text content="Everything since just $20/month."/>
          <Image src="" alt="Banner"/>
        </Container>
        <Container className="right-side">
          <Image src="" alt="trophy"/>
          <List>
            {data.pricingJson.FEATURES.map(feature =>
              <ListItem key={feature.id}>
                <Image src={check} alt="check"/>{feature.text}
              </ListItem>            
            )}
          </List>
          <Button
            url="/"
            theme='secondary'
            type="button"
            className="demo-btn"
            title="Sing up for free"
          />
        </Container>
      </Container>
    </BannerWrapper>
  )
}

export default Banner