import React from "react"
import ContainerWrapper from "./container.style"

const Container = props => {
  return (
    <ContainerWrapper className={props.className}>
      {props.children}
    </ContainerWrapper>
  )
}

export default Container
