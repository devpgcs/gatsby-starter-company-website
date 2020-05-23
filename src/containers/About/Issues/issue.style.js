import styled from 'styled-components'
import bg from '../../../images/bg-reverse.svg'

const IssueWrapper = styled.section`
  text-align: center;

  .case {
    width: 100%;
    background-image: url('${bg}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    
    h1, p {
      margin: 0 auto;
      max-width: 700px;
      text-align: center;
      position: relative;
      top: 40px;
    }

    h1 { font-weight: bold; }
    
    p {
      margin-top: 30px;
      color: var(--contrast);
    }
  }

  img {
    display: block;
    margin: 0 auto 60px;
    width: 500px;
    height: 300px;
    border: 1px solid var(--text);
  }
`

export default IssueWrapper