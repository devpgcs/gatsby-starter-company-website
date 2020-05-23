import styled from 'styled-components'

const BannerWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 60px auto 0;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;

    .left-side {
      width: 60%;
      h1 { font-weight: bold; }
      h2 { margin: 30px 0;}
      img {
        margin-top: 60px;
        display: block;
        width: 100%;
        height: 30vh;
      }
    }

    .right-side {
      max-width: 360px;
      width: 50vw;
      padding: 30px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      box-shadow: 0px 0px 15px var(--shadow);
      border-radius: 10px;

      img {
        width: 60px;
        height: 60px;
        border: 1px solid var(--text);
      }

      ul {
        width: 100%;
        margin: 30px 50px 0;

        li {
          list-style: none;
          margin-bottom: 30px;
          color: var(--text);
          font-family: Poppins;
          font-size: 16px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          img {
            border: none;
            width: 16px;
            height: 16px;
            margin: 0;
            margin-right: 20px;
          }
        }
      }
    }
  }
`

export default BannerWrapper