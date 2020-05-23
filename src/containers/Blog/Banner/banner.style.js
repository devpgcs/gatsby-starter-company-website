import styled from 'styled-components'
import bg from '../../../images/bg-reverse.svg'

const BannerWrapper = styled.section`
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
      padding-top: 50px;
    }
  }

  p {
    max-width: 750px;
    margin: 0 auto;
  }
`

export default BannerWrapper