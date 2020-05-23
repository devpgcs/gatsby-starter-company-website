import React from "react"
import { MainHeading, HeadingElm } from "./heading.style"

const Heading = ({ className, title, as, ...props }) => {
  if (as === "h1") {
    return (
      <MainHeading className={className} title={title} as={as} {...props}>
        {props.children || title}
      </MainHeading>
    )
  } else {
    return (
      <HeadingElm className={className} title={title} as={as} {...props}>
        {props.children || title}
      </HeadingElm>
    )
  }
}

export default Heading
