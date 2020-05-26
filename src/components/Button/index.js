import React from "react"
import ButtonWrapper from "./button.style"

const Button = ( props ) => (
  <ButtonWrapper 
    title={props.title} 
    onClick={props.click} 
    theme={props.theme}
    className={props.className}
  >
    {props.children || props.title}
  </ButtonWrapper>
)

export default Button
