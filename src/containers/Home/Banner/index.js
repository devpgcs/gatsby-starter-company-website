import React from "react"
import { Link } from "gatsby"
import BannerWrapper from "./banner.style"
import Heading from "../../../components/Heading"
import Container from "../../../components/Container"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        BANNER {
          id
          image
          note
          noteLink
          noteContinue
          subtitle
          title
          titleStrong
          logo
        }
      }
    }
  `)

  return (
    <BannerWrapper>
      {data.homeJson.BANNER.map(item => (
        <Container className="col left" key={item.id}>
          <Heading as="h1" theme='headings'>
            <img src="" alt="Logo" />
            {item.title} <strong>{item.titleStrong}</strong>
          </Heading>
          <Heading as="h2" title={item.subtitle} theme='text'/>
          <Button
            theme='primary'
            type="button"
            className="demo-btn"
          ><Link to="/">I want my demo</Link></Button>
          <Text className="sing-up">
            {item.note} <Link to="/">{item.noteLink}</Link> {item.noteContinue}
          </Text>
        </Container>
      ))}
      <Container className="col right">
        {data.homeJson.BANNER.map(item => (
          <img src="" alt="Banner" key={item.id} />
        ))}
      </Container>
    </BannerWrapper>
  )
}

export default Banner
