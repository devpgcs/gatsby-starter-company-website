import React, { useState } from 'react'
import SectionWrapper from './formSection.style'
import Container from '../../../components/Container'
import Form from '../../../components/Form'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Link } from 'gatsby'

const FormSection = () => {

  const [nameState, setNameState] = useState('') 
  const [emailState, setEmailState] = useState('')
  const [answerState, setAnswerState] = useState('')
  const [commentState, setCommentState] = useState('');

    const nameInputHandler = e => { setNameState(e.target.value) }
    const emailInputHandler = e => { setEmailState(e.target.value) }
    const answerInputHandler = e => { setAnswerState(e.target.value) }
    const commentInputHandler = e => { setCommentState(e.target.value) }

  return (
    <SectionWrapper>
      <Container className="case">
        <Form>
          <Input type="text" label="Name" value={nameState} onChange={nameInputHandler}/>
          <Input type="email" label="Email" value={emailState} onChange={emailInputHandler}/>
          <Input 
            type="textarea" 
            label="Wich Booking Software do you use?" 
            value={answerState}
            onChange={answerInputHandler} 
          />
          <Input 
            type="textarea" 
            label="Any aditional comment? Trust me, we read it all!" 
            value={commentState}
            onChange={commentInputHandler} 
          />
        </Form>
        <Button theme="secondary">
          <Link to="/">Ready to send</Link>
        </Button>
      </Container>
    </SectionWrapper>
  )
}

export default FormSection