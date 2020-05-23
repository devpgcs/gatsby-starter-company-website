import React from "react"
import { ListWrapper, ListElement } from "./list.style"

export const List = ({ className, children, ...props }) => {
  return <ListWrapper className={className}>{children}</ListWrapper>
}

export const ListItem = ({ className, children, url, title, ...props }) => {
  return <ListElement>{children}</ListElement>
}