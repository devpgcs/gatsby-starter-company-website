import styled from 'styled-components'

const BannerWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;

    img {
      display: block;
      width: 270px;
      height: 90px;
      margin: 50px auto ;
      border: 1px solid var(--text);
    }

    h1 { font-weight: bold; }

    p { margin: 30px 0; }
  }
`

export default BannerWrapper