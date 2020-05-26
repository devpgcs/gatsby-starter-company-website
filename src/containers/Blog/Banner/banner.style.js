import styled from 'styled-components'
import bg from '../../../images/bg-reverse.svg'

const BannerWrapper = styled.section`
  margin-top: 75px;
  text-align: center;

  .case {
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    h1 {
      padding: 50px 30px 0;

      @media(max-width: 768px) {
        font-size: 32px;
      }

      @media(max-width: 524px) {
        padding-top: 25px;
      }
    }
  }

  p {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 30px;
    @media(max-width: 768px) {
      font-size: 14px;
    }
  }
`

export default BannerWrapper