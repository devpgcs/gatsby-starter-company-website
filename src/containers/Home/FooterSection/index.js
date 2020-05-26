import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FooterWrapper from "./footer.style"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import { List, ListItem } from "../../../components/List"
import { Link } from "gatsby"

const FooterSection = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        FOOTER_LINKS {
          id
          path
          title
        }
        FOOTER_MEMBERS {
          id
          source
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <Container className="case">
        <Container className="main-col one">
          <Text className="footer-titles" content="Browse us" />
          <List className="col">
            {data.homeJson.FOOTER_LINKS.map(i =>
              <ListItem key={i.id}>
                <Link to={i.path}>{i.title}</Link>
              </ListItem>
            )}
          </List>
        </Container>
        <Container className="main-col two">
          <Text className="footer-titles" content="Proud member of" />
          <Container className="logos-wrapper">
            {data.homeJson.FOOTER_MEMBERS.map(member =>
              <img src={member.source} alt="Member Logo" key={member.id}/>
            )}
          </Container>
        </Container>
        <span className="divider"/>
        <Container className="main-col three">
          <Text className="footer-titles" content="Any questions?" />
          <Button type="button" theme="primary" className="contact-btn">
            <Link to="/">Contact us</Link>
          </Button>
          <Link to="/" className="link">
            <Text content="Terms and Conditions" />
          </Link>
          <Link to="/" className="link">
            <Text content="Privacy" />
          </Link>
        </Container>
        <Text className="copyright" content="Copyright © Company.com"/>
      </Container>
    </FooterWrapper>
  )
}

export default FooterSection
