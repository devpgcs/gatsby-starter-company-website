import styled from 'styled-components'

const FeatureSection = styled.section`
  margin: 160px 0 0;

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 1024px) {
      max-width: 750px;
    }

    .header { 
      width: 100%;
      text-align: center;
      margin-bottom: 50px;
      @media(max-width: 768px) {
        h1 {
          font-size: 32px;
        }
        
        p {
          font-size: 14px;
        }
      }
    }

    h1, p { max-width: 500px; margin: 0 auto; }

    h1 { margin-bottom: 30px; }
  }

  .feature {
    background: var(--bg-color);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: calc(80% / 4);
    padding: 15px;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px var(--shadow);
    @media(max-width: 1200px) {
      width: calc(80% / 3);
    }
    @media(max-width: 1024px) {
      width: calc(90% / 2);
    }
    @media (max-width: 768px) {
      max-width: 500px;
      width: 100%;
      margin: 60px auto 0;
    }

    img {
      width: 60px;
      height: 60px;
      border: 1px solid var(--text);
    }

    p {
      width: 70%;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 14px;
      }
      @media (max-width: 425px) {
        text-align: center;
      }
    }
  }
`

export default FeatureSection