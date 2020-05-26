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
  const [inputState, setInputState] = useState("")

  const inputHandler = e => {
    setInputState(e.target.value)
  }

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
                inputType="email"
                className="input-field"
                placeholder="Email"
                value={inputState}
                onChange={inputHandler}
              />
              <Input
                inputType="password"
                className="input-field"
                placeholder="Password"
              />
              <Input
                inputType="password"
                className="input-field"
                placeholder="Repeat password"
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
