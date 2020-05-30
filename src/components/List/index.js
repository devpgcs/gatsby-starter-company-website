import React from "react"
import { ListWrapper, ListElement } from "./list.style"

export const List = ( props ) => {
  return <ListWrapper>{props.children}</ListWrapper>
}

export const ListItem = ( props ) => {
  return <ListElement {...props}>{props.children}</ListElement>
}