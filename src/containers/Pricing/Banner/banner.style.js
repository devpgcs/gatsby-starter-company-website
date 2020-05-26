import styled from 'styled-components'

const BannerWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 120px auto 0;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 1024px) {
      max-width: 750px;
    }

    .left-side {
      width: 60%;
      @media(max-width: 1024px) {
        width: 100%;
        text-align: center;
      }
      @media(max-width: 768px) {
        p {
          font-size: 14px;
        }
      }

      h1 { 
        font-weight: bold;
        @media (max-width: 768px) {
          font-size: 32px;
        }
      }

      h2 { 
        margin: 30px 0;
        @media(max-width: 768px) {
          font-size: 20px;
        }
      }

      img {
        margin-top: 60px;
        display: block;
        width: 100%;
        height: 30vh;
      }
    }

    .right-side {
      max-width: 360px;
      width: 100%;
      padding: 30px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      box-shadow: 0px 0px 15px var(--shadow);
      border-radius: 10px;
      @media(max-width: 1024px) {
        margin: 0 auto;
      }

      img {
        width: 60px;
        height: 60px;
        border: 1px solid var(--text);
      }

      ul {
        width: 100%;
        margin: 30px 50px 0;
        @media (max-width: 425px) {
          margin: 30px 0;
        }

        li {
          list-style: none;
          margin-bottom: 30px;
          color: var(--text);
          font-family: Poppins;
          font-size: 16px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          @media (max-width: 768px) {
            font-size: 14px;
          }
          @media(max-width: 425px) {
            width: 100%;
            justify-content: center;
          }

          img {
            border: none;
            width: 16px;
            height: 16px;
            margin: 0;
            margin-right: 20px;
            @media (max-width: 425px) {
              padding: 0 100px; 
              margin-right: 0;
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
`

export default BannerWrapper