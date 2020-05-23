import React from 'react'
import styled from 'styled-components'

const Image = styled.img``

export default ({src, alt, ...props}) => (
  <Image src={src} alt={alt} {...props}/>
)