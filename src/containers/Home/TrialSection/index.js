import React, { useState } from "react"
import { Link } from 'gatsby'
import Container from "../../../components/Container"
import Heading from "../../../components/Heading"
import Input from "../../../components/Input"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
import Form from "../../../components/Form"
import DrawTrialWrapper from "./trial.style"

const TrialSection = () => {
  const [emailState, setEmailState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const [confirmPasswordState, setConfirmPasswordState] = useState('')

  const emailInputHandler = e => { setEmailState(e.target.value) }
  const passwordHandler = e => { setPasswordState(e.target.value) }
  const confirmPasswordHandler = e => { setConfirmPasswordState(e.target.value) }

  return (
    <DrawTrialWrapper>
      <Container className="draw one">
        <Heading
          as="h2"
          theme='contrast'
          title="Say Hello to Modern Task and Employee Scheduling Software Today"
        />
      </Container>
      <Container className="case">
        <Container className="draw two">
          <Form>
            <Container className="form-case">
              <Heading
                as="h2"
                theme='secondary'
                title="Start Free 30-day trial"
              />
              <Input
                type="email"
                className="input-field"
                placeholder="Email"
                value={emailState}
                onChange={emailInputHandler}
              />
              <Input
                type="password"
                className="input-field"
                placeholder="Password"
                value={passwordState}
                onChange={passwordHandler}
              />
              <Input
                type="password"
                className="input-field"
                placeholder="Repeat password"
                value={confirmPasswordState}
                onChange={confirmPasswordHandler}
              />
              <Container className="terms">
                <input type="checkbox" />
                <Text content="I Agree to the Terms & Conditions" />
              </Container>
              <Button theme='primary' type="submit" className="sing-btn">
                <Link to="/">Sign up now</Link>
              </Button>
            </Container>
          </Form>
        </Container>
      </Container>
    </DrawTrialWrapper>
  )
}

export default TrialSection
