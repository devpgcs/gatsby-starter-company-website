import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background: ${props => {
    switch (props.theme) {
      case 'primary':
        return 'var(--primary)'
      case 'secondary':
        return 'var(--secondary)'
      case 'inverted':
        return 'var(--inverted)'
      default:
        return '#555'
    }
  }};

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: ${props => {
      if (props.theme === 'inverted') {
        return 'var(--icolor)'
      } else {
        return 'var(--contrast)'
      }
    }};
    margin: 7.5px 0;
  }
`

export default ButtonWrapper