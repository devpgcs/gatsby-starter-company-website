import styled from "styled-components"

const BannerWrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  margin-bottom: 0;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  .col {
    display: flex;
    flex-wrap: wrap;
  }
  
  .left {
    width: 55%;
    margin-top: 2vw;
    align-items: start;
    align-content: center;
    
    h1 {
      max-width: 550px;
      width: 100%;
      @media(max-width: 1080px) {
        max-width: 500px;
      }
      @media(max-width: 991px) {
        max-width: 750px;
        text-align: center;
      }

      img {
        display: inline-block;
        border: 1px solid var(--text);
        width: 60px;
        height: 60px;
        font-size: 12px;
      }
    }

    h2 {
      max-width: 1200px;
      width: 100%;
      margin: 30px 0 30px;
      @media (max-width: 991px) {
        max-width: 750px;
        text-align: center;
      }
    }

    button {
      @media(max-width: 991px) {
        margin: 0 30px;
      }
    }

    .sing-up {
      width: 100%;
      margin-top: 80px;

      a {
        font-weight: bold;  
        color: var(--primary);
      }

      @media(max-width: 991px) {
        max-width: 750px;
        text-align: center;
      }
    } @media (max-width: 991px) {
      width: 100%;
      margin-top: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .right {
    width: 45%;
    justify-content: flex-end;
    img {
      display: block;
      border: 1px solid var(--text);
      max-width: 500px;
      max-height: 500px;
      width: 40vw;
      height: 75vh;
    } @media (max-width: 991px) {
      display: none;
    }
  }
`

export default BannerWrapper
