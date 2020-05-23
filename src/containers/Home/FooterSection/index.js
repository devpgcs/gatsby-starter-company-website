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
          link {
            id
            path
            title
          }
        }
        FOOTER_MEMBERS {
          id
          class
          img {
            id
            source
          }
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <Container className="case">
        <Container className="main-col one">
          <Text className="footer-titles" content="Browse us" />
          {data.homeJson.FOOTER_LINKS.map(e => (
            <List className="col" key={e.id}>
              {e.link.map(i => (
                <ListItem url={i.path} key={i.id}>
                  <Link to={i.path}>{i.title}</Link>
                </ListItem>
              ))}
            </List>
          ))}
        </Container>
        <Container className="main-col two">
          <Text className="footer-titles" content="Proud member of" />
          {data.homeJson.FOOTER_MEMBERS.map(e => (
            <Container className={e.class} key={e.id}>
              {e.img.map(i => (
                <img src="" alt="Member Logo" key={i.id} />
              ))}
            </Container>
          ))}
        </Container>
        <Container className="main-col three">
          <Text className="footer-titles" content="Any questions?" />
          <Button
            url="/"
            type="button"
            theme="primary"
            title="Contact us"
            className="contact-btn"
          />
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
