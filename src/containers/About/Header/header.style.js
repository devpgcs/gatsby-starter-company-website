import styled from 'styled-components'

const HeaderWrapper = styled.section`
  margin-top: 135px;

  .case {
    max-width: 800px;
    margin: 0 auto 60px;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h1 {
      font-weight: bold;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        font-size: 32px;
      }
      @media (max-width: 375px) {
        text-align: center;
      }
    }

    p {
      max-width: 630px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 14px;
      }
      @media (max-width: 375px) {
        text-align: justify;
      }
    }
  }
`

export default HeaderWrapper