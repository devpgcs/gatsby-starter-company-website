import React from "react"
import { Link } from "gatsby"
import ButtonWrapper from "./button.style"

const Button = ({ className, title, url, ...props }) => {
  return (
    <ButtonWrapper className={className} title={title} url={url} {...props}>
      <Link to={url}>{props.children || title}</Link>
    </ButtonWrapper>
  )
}

export default Button
