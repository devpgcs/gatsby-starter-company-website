import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AsideWrapper from './aside.style'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import Salvavida from '../../../../static/images/salvavida.png'
import { List, ListItem } from '../../../components/List'

const Aside = () => {
  const data = useStaticQuery(graphql`
    query {
      termsJson {
        ASIDE {
          id
          label
          path
        }
      }
    }    
  `)

  return(
    <AsideWrapper id="aside">
      <Container className="case">
        <Image src={Salvavida} alt="Salvavida"/>
        <List>
          {data.termsJson.ASIDE.map(item =>
            <ListItem key={item.id} onClick={() => {
              const target = document.querySelector(`${item.path}`).offsetTop
              window.scrollTo({top: target - 105, behavior: 'smooth'})
            }}>
              {item.label}
            </ListItem>        
          )}
        </List>
      </Container>
    </AsideWrapper>
  )
}

export default Aside