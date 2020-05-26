import styled from 'styled-components'
import bg from '../../../images/bg-reverse.svg'

const IssueWrapper = styled.section`
  margin: 60px auto 90px;
  text-align: center;

  .case {
    max-max-width: 1200px;
    widtmax-h: 100%;
    
    .text-wrapper {
      padding: 0 30px;
      height: 350px;
      background-image: url('${bg}');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      @media(max-width: 520px) {
        height: auto;
        background: var(--primary);
        padding: 30px;
        margin-bottom: 80px;
      }
    }
    
    h1, p {
      margin: 0 auto;
      max-width: 700px;
      text-align: center;
      position: relative;
      top: 40px;
      @media(max-width: 520px) {
        position: static;
      }
    }

    h1 { 
      font-weight: bold; 
      @media(max-width: 768px) {
        font-size: 32px;
      }
    }
    
    p {
      margin-top: 30px;
      color: var(--contrast);
      @media (max-width: 768px) {
        font-size: 14px;  
      }
    }
  }

  .img-wrapper {
    padding: 0 30px;

  }

  img {
    display: block;
    max-width: 500px;
    max-height: 300px;
    width: 100%;
    height: 56vw;
    margin: 0 auto;
    border: 1px solid var(--text);
  }
`

export default IssueWrapper