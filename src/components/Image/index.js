import React from 'react'
import styled from 'styled-components'

const Image = styled.img``

export default ( props ) => (
  <Image src={props.src} alt={props.alt} {...props}/>
)