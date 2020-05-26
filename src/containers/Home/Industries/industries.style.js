import styled from 'styled-components'

const IndustriesWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 1024px) {
      max-width: 750px;
    }

    .border {
      background: var(--secondary);
      width: 40px;
      height: 5px;
      margin: 0 auto 10px;
    }

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 50px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .left-side {
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 680px) {
      width: 100%;
      margin-bottom: 60px;
    }
    
    img {
      border: 1px solid var(--text);
      width: 400px;
      height: 250px;
      margin-bottom: 30px;
    }

    h2 {
      text-align: left;
      margin-bottom: 30px;
    }

    p {
      width: 100%;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .right-side {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    @media(max-width: 1024px) {
      align-content: flex-start;
    }
    @media(max-width: 680px) {
      width: 100%;
    }

    .feature {
      width: calc(95% / 2);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media(max-width: 1024px) {
        margin-bottom: 30px;
      }

      img {
        display: block;
        border: 1px solid var(--text);
        width: 120px;
        height: 120px;
      }

      p {
        margin-top: 30px;
        width: 150px;
        text-align: center;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
`

export default IndustriesWrapper