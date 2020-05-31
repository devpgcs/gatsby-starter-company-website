import React, { useState, useRef } from 'react'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import { List, ListItem } from '../../../components/List'
import SwitchMode from '../../../components/SwitchMode'
import Button from '../../../components/Button'
import BarsButton from '../../../../static/images/bars-solid.svg'
import { Link } from 'gatsby'

const Mobile = ({ links, theme, toggleTheme }) => {
  const [navbarState, setNavbarState] = useState(true)
  const refMobileList = useRef()
  const toggleNavbar = () => {
    setNavbarState(!navbarState)
    navbarState
      ? (refMobileList.current.style.right = '0px')
      : (refMobileList.current.style.right = '-350px')
  }
  return (
    <Container className="mobile-case">
      <Container className="navbar">
        <div className="logo">
          <Image src="" alt="Logo" />
        </div>
        <Button className="burger-btn" click={toggleNavbar}>
          <Image src={BarsButton} alt="Button" />
        </Button>
        <div className="list-mobile" ref={refMobileList}>
          <Button click={toggleNavbar}>X</Button>
          <List>
            <SwitchMode id={'B'} {...{ theme, toggleTheme }} />
            {links.map(item => (
              <ListItem key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </ListItem>
            ))}
          </List>
          <div className="sing-up">
            <Link to="/" className="login">
              Login
            </Link>
            <Button theme="secondary">
              <Link to="/">Sing up for free</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Mobile
