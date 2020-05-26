import styled from 'styled-components'

const BannerWrapper = styled.section`
  margin-top: 135px;
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;

    img {
      display: block;
      max-width: 270px;
      width: 100%;
      height: 90px;
      margin: 50px auto ;
      border: 1px solid var(--text);
    }

    h1 { 
      font-weight: bold; 
      @media (max-width: 768px) {
        font-size: 32px;
      }
    }

    p { 
      margin: 30px 0;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`

export default BannerWrapper