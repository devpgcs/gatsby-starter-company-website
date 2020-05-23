import styled from "styled-components"

export const HeadingElm = styled.h2`
  color: ${props => {
    switch (props.theme) {
      case 'primary':
        return 'var(--primary)'
      case 'secondary':
        return 'var(--secondary)'
      case 'headings':
        return 'var(--headings)'
      case 'contrast':
        return 'var(--contrast)'
      case 'text':
        return 'var(--text)'
      default:
        return 'initial'
    }
  }};
`

export const MainHeading = styled.h1`
  color: ${props => {
    switch (props.theme) {
      case 'primary':
        return 'var(--primary)'
      case 'secondary':
        return 'var(--secondary)'
      case 'headings':
        return 'var(--headings)'
      case 'contrast':
        return 'var(--contrast)'
      case 'text':
        return 'var(--text)'
      default:
        return 'initial'
    }
  }};
`
