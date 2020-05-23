import React from "react"
import TextElm from "./text.style"

const Text = ({ className, children, content, ...props }) => {
  return <TextElm className={className}>{children || content}</TextElm>
}

export default Text
