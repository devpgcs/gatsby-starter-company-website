import React from 'react'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import { List, ListItem } from '../../../components/List'
import SwitchMode from '../../../components/SwitchMode'
import Button from '../../../components/Button'
import { Link } from 'gatsby'

const Desktop = ({ links, theme, toggleTheme }) => {
  return (
    <Container className="case">
      <Container className="navbar">
        <div className="logo">
          <Image src="" alt="Logo" />
        </div>
        <div className="list">
          <List>
            {links.map(item => (
              <ListItem key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="sing-up">
          <Link to="/" className="login">
            Login
          </Link>
          <Button theme="secondary">
            <Link to="/">Sing up for free</Link>
          </Button>
          <SwitchMode id={'A'} {...{ theme, toggleTheme }} />
        </div>
      </Container>
    </Container>
  )
}

export default Desktop
