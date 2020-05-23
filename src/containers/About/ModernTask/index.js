import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import TaskWrapper from './task.style'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import Text from '../../../components/Text'

const ModernTask = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        TASK {
          id
          imgl
          imgr
          text
          itext
        }
      }
    }    
  `)

  return (
  <TaskWrapper>
    {data.aboutJson.TASK.map(task =>
      <Container className="bg" key={task.id}>
        <Container className="case">
          <Container className="left-side">
            <Image src={task.imgl} alt="Some image"/>
            <Container className="description">
              <Text>
                {task.text} <strong>{task.itext}</strong>
              </Text>
            </Container>
          </Container>
          <Container className="right-side">
            <Image src="" alt="Some image"/>
          </Container>
        </Container>
      </Container>
    )}
  </TaskWrapper>
  )
}

export default ModernTask
