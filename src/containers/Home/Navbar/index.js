import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import SwitchMode from "../../../components/SwitchMode"
import { List, ListItem } from "../../../components/List"
import NavbarWrapper from "./navbar.style.js"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        MENU_ITEMS {  
          id
          label
          path
        }
      }
    }
  `)

  return (
    <NavbarWrapper>
      <Container className="case">    
        <Container className="container colOne">
          <Link to="/">
            <img src="" alt="logo"/>
          </Link>
        </Container>
        <Container className="container colTwo">
          <List>
            {data.homeJson.MENU_ITEMS.map(item => (
              <Link to={item.path} key={item.id}>
                <ListItem>{item.label}</ListItem>
              </Link>
            ))}
          </List>
        </Container>
        <Container className="container colThree">
          <Link to="/">
            <Text className="login-btn" content="Login" />
          </Link>
          <Button
            url='/'
            theme='secondary'
            className="sing-up-btn"
            title="Sing up for free"
            />
            <SwitchMode/>
        </Container>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar
