import React, { useState } from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import NavbarWrapper from './navbar.style'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import { List, ListItem } from '../../../components/List'
import SwitchMode from '../../../components/SwitchMode'
import Button from '../../../components/Button'
import BarsButton from '../../../../static/images/bars-solid.svg'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        MENU_ITEMS {
          id
          path
          label
        }
      }
    }
  `)

  const [navbarState, setNavbarState] = useState(true);
  
  const toggleNavbar = () => {
    setNavbarState(!navbarState)
    navbarState ?
      document.querySelector('.list').style.right = '0px' :
      document.querySelector('.list').style.right = '-350px'
  }
  
  const navbar = (
    <Container className="case">
      <Container className="navbar">
        <div className="logo">
          <Image src="" alt="Logo"/>
        </div>
        <div className="list">
          <List>
            {data.homeJson.MENU_ITEMS.map(item =>
              <ListItem key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </ListItem>
            )}
          </List>
        </div>
        <div className="sing-up">
          <Link to="/" className="login">Login</Link>
          <Button theme="secondary">
            <Link to="/">Sing up for free</Link>
          </Button>
          <SwitchMode/>
        </div>
      </Container>
    </Container>
  )

  const mobile_navbar = (
    <Container className="mobile-case">
      <Container className="navbar">
        <div className="logo">
          <Image src="" alt="Logo"/>
        </div>
        <Button className="burger-btn" click={toggleNavbar}>
          <Image src={BarsButton} alt="Button"/>
        </Button>
        <div className="list">
          <Button click={toggleNavbar}>X</Button>
          <List>
            <SwitchMode/>
            {data.homeJson.MENU_ITEMS.map(item =>
              <ListItem key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </ListItem>
            )}
          </List>
          <div className="sing-up">
            <Link to="/" className="login">Login</Link>
            <Button theme="secondary">
              <Link to="/">Sing up for free</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  )

  return (
    <NavbarWrapper className="nav">
      {
        document.body.clientWidth > 1024 ?
          navbar : mobile_navbar
      }
    </NavbarWrapper>
  )
}

export default Navbar